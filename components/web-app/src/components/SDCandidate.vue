<template>
<div class="candidate-container">
  <div class="candidate-polygon"/>
  <img class="candidate-image" :src="imgSrc" :alt="imgAlt"/>
  <div class="candidate-text">
    <h2>{{text}}</h2>
  </div>
</div>
</template>

<script setup lang="ts">
defineProps({
  imgSrc: {
    type: String,
    default: ''
  },
  imgAlt: {
    type: String,
    default: 'candidate image'
  },
  text: {
    type: String,
    default: ''
  }
})
</script>


<style scoped>
.candidate-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  aspect-ratio: 3 / 4;
  background-color: var(--primary-red-full);
  position: relative;
  width: 100%;
  height: 100%;
}

.candidate-image {
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
  z-index: 2;
  padding: 1em 1em 0;
}

.candidate-polygon {
  clip-path: polygon(5% 25%, 100% -10%, 100% 100%, 10% 100%);
  background-color: var(--secondary-red-full);
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
}

.candidate-text{
  position: absolute;
  z-index: 3;
  bottom: 2em;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
</style>