<template>
  <input
    class="input w-full"
    :type="inputType"
    :value="formattedValue"
    @input="updateModelValue($event.target.value)"
    :min="formattedMin"
    :max="formattedMax"
    :step="props.field.options?.step || null"
  />
</template>

<script setup>
import moment from 'moment'
import { computed } from 'vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  field: Object,
  modelValue: String
})

const inputType = computed(() => (props.field.options?.time ? 'datetime-local' : 'date'))
const inputFormat = computed(() => (inputType.value === 'datetime-local' ? 'YYYY-MM-DDTHH:mm' : 'YYYY-MM-DD'))
const saveFormat = computed(() => props.field.options?.format || inputFormat.value)

// Formatted min and max values
const formattedMin = computed(() => {
  const min = props.field.options?.min
  const dateMin = moment(min, saveFormat.value)
  return dateMin.isValid() ? dateMin.format(inputFormat.value) : null
})
const formattedMax = computed(() => {
  const max = props.field.options?.max
  const dateMax = moment(max, saveFormat.value)
  return dateMax.isValid() ? dateMax.format(inputFormat.value) : null
})

// Convert modelValue to the display format for the input field
const formattedValue = computed(() => {
  if (!props.modelValue) return ''
  const dateObject = moment(props.modelValue, saveFormat.value)
  if (!dateObject.isValid()) {
    console.warn(
      `Date for field '${props.field.name}' is saved in the wrong format or invalid: value is '${props.modelValue}' and format is '${saveFormat.value}'.`
    )
    return ''
  }

  return dateObject.format(inputFormat.value)
})

// TODO: add validate() method and enforce better sanitization of the value
// Update modelValue from the input field, converting back to the save format
const updateModelValue = (value) => {
  let [year, month, day] = value.split('-')
  year = year === '0000' ? '0001' : year
  month = month === '00' ? '01' : month
  day = day === '00' ? '01' : day
  const safeDate = moment(`${year}-${month}-${day}`, inputFormat.value)
  if (safeDate.isValid()) {
    emit('update:modelValue', safeDate.format(saveFormat.value))
  }
}
</script>