<template>
  <button class="linke-button" :class="[`${mode}-${colorScheme}`]">
    {{ label }}
  </button>
</template>

<script setup lang="ts">

defineProps({
  label: {
    type: String,
    default: ""
  },
  href: {
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
})
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

.linke-button{
  border-radius: 25px;
  min-width: 100px;
  padding: 15px;
  height: 50px;
  font-weight: bold;
}

</style>