<template>
  <button class="linke-button"
          :class="[
              `${mode}-${colorScheme}`,
               `${small ? 'linke-button--small' : ''}`,
                `${disabled ? `${mode}-${colorScheme}--disabled` : ''}`,
                `${iconLeading ? 'linke-button--reverse' : ''}`
              ]"
          @click="onClick">
    {{ label }}
    <font-awesome-icon :icon="icon" class="icon"/>
  </button>
</template>

<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import '../icons.ts'

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
  small: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  },
  iconLeading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(["onClick"])

const onClick = (e: MouseEvent) => {
  emit("onClick", e)
}
</script>


<style scoped>

button, input[type="submit"], input[type="reset"] {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

.linke-button {
  border-radius: 25px;
  min-width: 100px;
  padding: 12px;
  font-weight: bold;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.linke-button--small {
  min-width: unset;
  padding: 10px;
}

.linke-button--reverse {
  flex-direction: row-reverse;
}

.icon {
  font-size: 17px;
}
</style>