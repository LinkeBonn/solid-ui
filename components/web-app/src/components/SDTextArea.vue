<template>
  <div class="input-box">
    <label style="font-weight: bold">{{ label }}</label>
    <textarea
        class="linke-text-input"
        :class="
        [
            `${mode}-${colorScheme}`,
            `${disabled ? `${mode}-${colorScheme}--disabled` : ''}`
            ]"
        v-model="textvalue"
        @change="onChange"
        rows="5"
    />
  </div>
</template>

<script setup lang="ts">

import {ref} from "vue";

defineProps({
  label: {
    type: String,
    default: ""
  },
  colorScheme: {
    type: String,
    default: ""
  },
  mode: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: false
  },
})

const textvalue = ref('')
const emit = defineEmits(["onChange"])

const onChange = (inputEvent: Event) => {
  //@ts-ignore
  emit("onChange", inputEvent.target?.value)
}
</script>

<style scoped>

.linke-text-input {
  appearance: none;
  border: none;
  border-radius: .2em .2em 0 0;
  border-bottom: .2em solid;
  border-left: .2em solid;
  min-width: 100px;
  outline: none;
  padding: 12px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.input-box {
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  gap: 6px;
  width: 100%;
}
</style>