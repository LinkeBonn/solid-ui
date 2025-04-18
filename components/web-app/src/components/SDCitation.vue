<template>
  <div class="sd-citation__wrapper" :style="`background-color: var(--secondary-${colorScheme}-full)`">
    <div class="sd-citation__transform sd-citation" :style="`background-color: var(--primary-${colorScheme}-full)`">
    <h2 class="sd-citation__citation" :style="`background-color: var(--primary-${colorScheme}-full)`">
      „{{citation}}“
    </h2>
    <h4 class="sd-citation__background">
      {{author}}
    </h4>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  colorScheme: {
    type: String,
    default: ""
  },
  citation: {
    type: String,
    default: ""
  },
  author: {
    type: String,
    default: ""
  },
})
</script>

<style scoped>
.sd-citation__wrapper {
  box-sizing: border-box;
  overflow: hidden;
}

.sd-citation {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  padding: 40px 40px 40px 110px;
  line-height: 0.9;
}

.sd-citation__background {
  background-color: var(--primary-red-full);
  margin-top: 20px;
  padding: 5px 10px;
  width: 100%;
}

.sd-citation__transform {
  clip-path: polygon(5% 25%, 100% -10%, 100% 100%, 10% 100%);
  position: relative;
}

.sd-citation__citation{
  margin-top: 10%;
  width: 100%;
}

h1, h2, h3, h4 {
  color: white;
}

</style>