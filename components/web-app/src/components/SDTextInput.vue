<template>
  <div class="input-box">
    <label style="font-weight: bold">{{ label }}</label>
    <input
        class="linke-text-input"
        type="text"
        :class="
        [
            `${mode}-${colorScheme}`,
            `${disabled ? `${mode}-${colorScheme}--disabled` : ''}`
            ]"
        v-model="textvalue"
        @change="onChange"
        :readonly="readonly"
    />
  </div>
</template>

<script setup lang="ts">

import {ref} from "vue";

const props = defineProps({
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
  text: {
    type: String,
    default: ""
  },
  readonly: {
    type: Boolean,
    default: false
  }
})

const textvalue = ref(props.text)
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
  min-width: 100px;
  outline: none;
  padding: 6px 12px;
}

.input-box {
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  gap: 6px;
}
</style>