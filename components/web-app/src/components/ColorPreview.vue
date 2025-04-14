<template>
  <div
      class="color-preview"
      :style="{ backgroundColor: color, width: size + 'px', height: size + 'px' }"
      :title="color"
  ></div>
</template>

<script setup lang="ts">
defineProps({
  color: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    default: 24
  }
})
</script>

<style scoped>
.color-preview {
  border-radius: 4px;
  border: 1px solid #ccc;
  display: inline-block;
}
</style>