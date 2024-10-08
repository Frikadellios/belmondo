<template>
  <input type="file" ref="fileInput" @change="handleFileInput" multiple hidden />
  <!-- Waiting overlay -->
  <Teleport to="body">
    <div class="waiting" v-show="status === 'uploaded'"></div>
  </Teleport>
</template>

<script setup>
import github from '@/services/github'
import notifications from '@/services/notifications'
import { ref } from 'vue'

const emits = defineEmits(['processed', 'uploaded', 'error'])

const props = defineProps({
  owner: String,
  repo: String,
  branch: String,
  path: String
})

const fileInput = ref(null)
const status = ref('')

function openFileInput() {
  fileInput.value.click()
}

const handleFileInput = async (event) => {
  const files = event.target.files
  await processFiles(files)
}

async function processFiles(files) {
  status.value = 'uploading'
  for (let i = 0; i < files.length; i++) {
    await upload(files[i])
  }
  emits('processed')
  status.value = ''
}

const upload = async (file) => {
  if (file) {
    let content = await readFileContent(file)
    if (content) {
      const notificationId = notifications.notify(`Uploading "${file.name}".`, 'processing', { delay: 0 })
      content = content.replace(/^(.+,)/, '') // We strip out the info at the beginning of the file (mime type + encoding)
      const fullPath = props.path ? `${props.path}/${file.name}` : file.name
      const data = await github.saveFile(props.owner, props.repo, props.branch, fullPath, content, null, true)
      notifications.close(notificationId)
      if (data) {
        if (data.content.path === fullPath) {
          notifications.notify(`File '${file.name}' successfully uploaded.`, 'success')
        } else {
          notifications.notify(
            `File '${file.name}' successfully uploaded but renamed to '${data.content.name}'.`,
            'success'
          )
        }
        emits('uploaded', data)
      } else {
        notifications.notify('File upload failed.', 'error')
        emits('error', data)
      }
    }
  }
}

const readFileContent = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => resolve(e.target.result)
    reader.onerror = (e) => reject(e)
    reader.readAsDataURL(file) // Reads the file as base64 encoded string
  })
}

defineExpose({ openFileInput, processFiles })
</script>