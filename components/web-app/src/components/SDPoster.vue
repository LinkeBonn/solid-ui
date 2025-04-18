<template>
  <div class="sd-poster" :style="`background-color: var(--primary-${colorScheme}-full)`">
    <h1>
      <p class="sd-poster__block">
      <span class="heading-font-black">{{ firstHeadline }}</span>
      <span class="heading-font-light">{{ secondHeadline }}</span>
      </p>
    </h1>
    <h3 class="sd-poster__sub">
      {{ subHeadline }}
    </h3>
  </div>
</template>

<script setup lang="ts">
defineProps({
  colorScheme: {
    type: String,
    default: ""
  },
  firstHeadline: {
    type: String,
    default: ""
  },
  secondHeadline: {
    type: String,
    default: ""
  },
  subHeadline: {
    type: String,
    default: ""
  }
})
</script>

<style scoped>
.sd-poster {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  padding: 40px;
  box-sizing: border-box;
}

.sd-poster__block {
  margin: unset;
  line-height: 0.9;
}

.sd-poster__sub {
  margin-top: 30px;
}

h1, h2, h3, h4 {
  color: white;
}

</style>