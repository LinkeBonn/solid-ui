<template>
  <svg
      v-if="svgContent"
      v-html="svgContent"
      @mouseover="onHover"
      @mouseout="onMouseOut"
      @click="onClick"
      ref="svgRef"
      style="height: 100%; width: 100%;"
  />
</template>

<script setup lang="ts">
// @ts-nocheck
import {ref, onMounted, nextTick, PropType} from 'vue'

const svgContent = ref(null)
const svgRef = ref(null)

const emit = defineEmits(['onHover', 'onClick'])

const props = defineProps({
  bezirkList: {
    type: Object as PropType<BezirkList>,
    default: null
  }
})

const enhanceElement = (el: HTMLElement) => {
  el.style.cursor = 'pointer'
  el.style.transition = 'stroke-width 0.2s'
  el.style.stroke = 'black'
  el.style.strokeWidth = '1'
}

const onHover = (event: Event) => {
  const id = event.target?.id
  if (props.bezirkList[id]) {
    event.target.style.strokeWidth = '4'
    emit('onHover', {id, ...props.bezirkList[id]})
  }
}

const onMouseOut = (event: Event) => {
  const id = event.target?.id
  if (props.bezirkList[id]) {
    event.target.style.strokeWidth = '1'
  }
}

const onClick = (event: Event) => {
  const id = event.target?.id
  if (props.bezirkList[id]) {
    emit('onClick', {id, ...props.bezirkList[id]})
  }
}

onMounted(async () => {
  const res = await fetch('/wahlbezirke.svg')
  const text = await res.text()
  svgContent.value = text

  await nextTick()

  const svgEl = svgRef.value
  if (svgEl) {
    Object.keys(props.bezirkList).forEach(id => {
      const el = svgEl.querySelector(`#${CSS.escape(id)}`)
      if (el) enhanceElement(el)
    })
  }
})
</script>

<style scoped>
svg {
  width: 100%;
  height: auto;
}
</style>
