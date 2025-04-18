<template>
  <div class="sd-banner" :style="`background-color: var(--secondary-${colorScheme}-full)`">
    <div class="sd-banner-container">
      <div>
        <h2 class="sd-banner__background">
          {{ firstHeadline }}
        </h2>
      </div>
      <div class="sd-banner__second-headline">
        <h1 class="sd-banner__background">
          {{ secondHeadline }}
        </h1>
      </div>
      <h4 :style="`background-color: var(--primary-${colorScheme}-full); padding: 5px`">
        {{ subHeadline }}
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
  padding-top: 10%;
  padding-bottom: 10%;
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
}

h1, h2, h3, h4 {
  color: white;
}

.sd-banner-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;

  @media screen and (min-width: 850px) {
    width: 60%;
  }
}

</style>