<template>
  <!-- Add folder modal -->
  <Modal ref="addFolderModal">
    <template #header>Add a folder</template>
    <template #content>
      <input class="w-full" type="text" v-model="folderName" placeholder="Name of the folder"/>
      <footer class="flex justify-end text-sm gap-x-2 mt-4">
        <button class="btn-secondary" @click="addFolderModal.closeModal()">Cancel</button>
        <button :disabled="status === 'adding-folder' || !folderName" class="btn-primary" @click="folderNameEntry">
          Add folder
          <div class="spinner-white-sm" v-if="status == 'adding-folder'"></div>
        </button>
      </footer>
    </template>
  </Modal>
  <!-- Waiting overlay -->
  <Teleport to="body">
    <div class="waiting" v-show="status === 'adding-folder'"></div>
  </Teleport>
</template>

<script setup>
import Modal from '@/components/utils/Modal.vue'
import github from '@/services/github'
import notifications from '@/services/notifications'
import { computed, ref } from 'vue'

const emits = defineEmits(['folder-added'])

const props = defineProps({
  owner: String,
  repo: String,
  branch: String,
  path: String
})

const addFolderModal = ref(null)
const folderName = ref('')
const fullPath = computed(() => (props.path ? `${props.path}/${folderName.value}` : folderName.value))
const status = ref('')

const folderNameEntry = async () => {
  status.value = 'adding-folder'

  const data = await github.saveFile(props.owner, props.repo, props.branch, `${fullPath.value}/.gitkeep`, '')
  if (data) {
    emits('folder-added', { path: `${fullPath.value}` })
    notifications.notify(`Folder "${folderName.value}" successfully created.`, 'success')
    addFolderModal.value.closeModal()
  } else {
    notifications.notify(`Folder "${folderName.value}" couldn't be created.`, 'error')
  }
  status.value = ''
}

const openModal = () => {
  folderName.value = ''
  addFolderModal.value.openModal()
}

defineExpose({ openModal })
</script>