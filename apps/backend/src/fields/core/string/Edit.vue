<template>
  <input
    class="input w-full"
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :maxlength="field.options?.maxlength"
  />
  <ul v-if="errors.length" class="mt-2 text-sm text-red-500 dark:text-red-400">
    <li v-for="error in errors" :key="error" class="flex gap-x-1 items-center">
      <Icon name="Ban" class="h-3 w-3 stroke-[2.5]"/>
      {{ error }}
    </li>
  </ul>
</template>

<script setup>
import Icon from '@/components/utils/Icon.vue'
import useFieldValidation from '@/composables/useFieldValidation'
import { ref } from 'vue'

const { validateRequired, validatePattern, validateLength } = useFieldValidation()

const props = defineProps({
  field: Object,
  modelValue: String
})

const errors = ref([])

const validate = () => {
  errors.value = []
  const requiredError = validateRequired(props.field, props.modelValue)
  const patternError = validatePattern(props.field, props.modelValue)
  const lengthError = validateLength(props.field, props.modelValue)
  if (requiredError.length) errors.value = errors.value.concat(requiredError)
  if (patternError.length) errors.value = errors.value.concat(patternError)
  if (lengthError.length) errors.value = errors.value.concat(lengthError)

  return errors.value
}

defineExpose({ validate })
</script>
