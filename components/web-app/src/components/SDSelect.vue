<template>
  <div class="select-box">
    <label style="font-weight: bold">{{ label }}</label>
    <select
        class="linke-select"
        :class="
        [
            `${mode}-${colorScheme}`,
            `${disabled ? `${mode}-${colorScheme}--disabled` : ''}`
            ]"
        @change="onSelect"
        :selected="selected"
    >
      <option class="linke-option" v-for="option in options" :value="option.value" :key="option.value">
        {{ option.label }}
      </option>
    </select>
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
  options: {
    type: Array<SelectOption>,
    default: []
  }
})

const selected = ref(props.options[0])

const emit = defineEmits(["onSelect"])

const onSelect = (selectEvent: Event) => {
  //@ts-ignore
  emit("onSelect", selectEvent.target?.value)
}
</script>

<style scoped>

.linke-select {
  appearance: none;
  border-radius: .2em;
  border: .2em solid;
  min-width: 100px;
  outline: none;
  padding: 6px 26px 6px 12px;
  background-image: url("data:image/svg+xml;utf8,<svg width='12px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d='M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 96%;
  background-position-y: 10px;
}

.select-box {
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  position: relative;
}

.linke-option {
  margin-right: 17px;
}
</style>