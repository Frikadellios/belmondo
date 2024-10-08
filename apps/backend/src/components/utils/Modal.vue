<template>
  <Teleport to="body">
    <div @click="closeModal" class="modal-overlay" :class="[ isOpen ? 'modal-active' : '', props.componentClass ]">
      <div class="modal-wrapper">
        <div v-if="isInitialized" class="modal-box adjust-dark" :class="[ props.boxClass ]" @click.stop>
          <header class="modal-header">
            <div class="modal-title">
              <slot name="header"></slot>
            </div>
            <button @click="closeModal" class="modal-close">
              <Icon name="X" class="h-4 w-4 stroke-2 shrink-0"/>
            </button>
          </header>
          <div class="modal-body">
            <slot name="content"></slot>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import Icon from '@/components/utils/Icon.vue'
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  componentClass: { type: String, default: '' },
  boxClass: { type: String, default: '' }
})

const isOpen = ref(false)
const isInitialized = ref(false)

const closeModal = () => {
  isOpen.value = false
  removeEscapeKeyListener()
}

const openModal = () => {
  isOpen.value = true
  isInitialized.value = true
  addEscapeKeyListener()
}

const onEscape = (event) => {
  if (event.key === 'Escape') {
    closeModal()
  }
}

const addEscapeKeyListener = () => {
  window.addEventListener('keydown', onEscape)
}

const removeEscapeKeyListener = () => {
  window.removeEventListener('keydown', onEscape)
}

onMounted(() => {
  if (isOpen.value) {
    addEscapeKeyListener()
  }
})

onUnmounted(() => {
  removeEscapeKeyListener()
})

defineExpose({ openModal, closeModal })
</script>
