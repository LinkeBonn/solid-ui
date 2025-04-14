<template>
  <div class="sd-banner" :style="`background-color: var(--secondary-${colorScheme}-full)`">
    <h2 class="sd-banner__background">
        {{firstHeadline}}
    </h2>
    <div class="sd-banner__second-headline">
    <h1 class="sd-banner__background">
      {{secondHeadline}}
    </h1>
    </div>
    <h4 :style="`background-color: var(--primary-${colorScheme}-full); padding: 5px`">
      {{ subHeadline }}
    </h4>
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
.sd-banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 110px;
  padding-bottom: 110px;
  max-width: 780px;
  box-sizing: border-box;
}

.sd-banner__background {
  background-color: var(--primary-red-full);
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
}

.sd-banner__second-headline {
  align-self: start;
  margin-left: 60px;
}

h1, h2, h3, h4 {
  color: white;
}

</style>