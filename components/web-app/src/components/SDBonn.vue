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
import {ref, onMounted, nextTick} from 'vue'
import wahlbezirkSVG from "@/assets/wahlbezirke.svg?raw"

const svgContent = ref(null)
const svgRef = ref(null)
const bezirkList: BezirkList = {
  "1": "Bonn-Zentrum",
  "2": "Bonn-Castell/Rheindorf-Süd",
  "3": "Innere Nordstadt",
  "4": "Baumschulviertel/Südstadt",
  "5": "Neu-Tannenbusch/Buschdorf",
  "6": "Auerberg/Graurheindorf",
  "7": "Tannenbusch",
  "8": "Dransdorf/Lessenich/Meßdorf",
  "9": "Endenich I",
  "10": "Poppelsdorf",
  "11": "Kessenich",
  "12": "Dottendorf/Gronau",
  "13": "Äußere Nordstadt",
  "14": "Endenich II",
  "15": "Venusberg/Ippendorf",
  "16": "Röttgen/Ückesdorf",
  "21": "Friesdorf",
  "22": "Villenviertel/Rüngsdorf",
  "23": "Plittersdorf/Hochkreuz",
  "24": "Bad Godesberg-Mitte",
  "25": "Heiderhof/Muffendorf",
  "26": "Pennenfeld/Lannesdorf",
  "27": "Mehlem",
  "31": "Beuel-Zentrum",
  "32": "Schwarzrheindorf/Vilich-Rheindorf/Combahn",
  "33": "Pützchen/Bechlinghoven/Holtorf/Ungarten",
  "34": "Beuel-Süd/Limperich",
  "35": "Holzlar/Hoholz",
  "36": "Küdinghoven/Ramersdorf/Oberkassel",
  "37": "Vilich/Geislar/Vilich-Müldorf",
  "41": "Lengsdorf/Brüser Berg",
  "42": "Duisdorf/Finkenhof/Lengsdorf",
  "43": "Duisdorf/Medinghoven"
}


const emit = defineEmits(['onHover', 'onClick'])

const props = defineProps({

})

const enhanceElement = (el: HTMLElement) => {
  el.style.cursor = 'pointer'
  el.style.transition = 'stroke-width 0.2s'
  el.style.stroke = 'black'
  el.style.strokeWidth = '1'
}

const onHover = (event: Event) => {
  const id = event.target?.id
  if (bezirkList[id]) {
    event.target.style.strokeWidth = '4'
    emit('onHover', {id: id, name: bezirkList[id]})
  }
}

const onMouseOut = (event: Event) => {
  const id = event.target?.id
  if (bezirkList[id]) {
    event.target.style.strokeWidth = '1'
  }
}

const onClick = (event: Event) => {
  const id = event.target?.id
  if (bezirkList[id]) {
    emit('onClick', {id: id, name: bezirkList[id]})
  }
}

onMounted(async () => {
  svgContent.value = wahlbezirkSVG

  await nextTick()

  const svgEl = svgRef.value
  if (svgEl) {
    Object.keys(bezirkList).forEach(id => {
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
