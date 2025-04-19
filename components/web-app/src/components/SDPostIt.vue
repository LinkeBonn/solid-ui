<template>
  <div class="linke-post-it" :style="`background-color: var(--primary-${colorScheme}-full)`">
    <SDTextArea class="post-it-text-area" :color-scheme="colorScheme" mode="primary" :label="textLabel" :disabled="!isEditable" @on-change="onTextAreaUpdate"/>
    <div class="post-it-bottom">
      <SDTextInput :color-scheme="colorScheme" mode="primary" :label="authorLabel" :disabled="!isEditable" @on-change="onAuthorChange"/>
      <SDButton v-if="isEditable" :color-scheme="colorScheme" mode="primary" :label="buttonLabel" @onClick="onSubmit"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import SDTextArea from "./SDTextArea.vue";
import SDTextInput from "./SDTextInput.vue";
import SDButton from "./SDButton.vue";
import {ref} from "vue";

const emit = defineEmits(["onSubmit"])

const props = defineProps({
  colorScheme: {
    type: String,
    default: ''
  },
  textLabel: {
    type: String,
    default: ''
  },
  authorLabel: {
    type: String,
    default: ''
  },
  buttonLabel: {
    type: String,
    default: ''
  },
  isEditable: {
    type: Boolean,
    default: true
  },
  text: {
    type: String,
    default: ''
  },
  author: {
    type: String,
    default: ''
  }
})

const textAreaInput =ref(props.text)
const authorInput = ref(props.author)

const onSubmit = (submitEvent: Event) => {
  submitEvent.preventDefault();
  emit("onSubmit", {text: textAreaInput.value, author: authorInput.value});
}

const onAuthorChange = (authorUpdate: string) => {
  authorInput.value = authorUpdate;
}

const onTextAreaUpdate = (textAreaUpdate: string) => {
  textAreaInput.value = textAreaUpdate;
}
</script>

<style scoped>
.linke-post-it {
  aspect-ratio: 1 / 1;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  padding: 2em;
  gap: 2em;
  flex-grow: 1;
}

.post-it-bottom {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

.post-it-text-area {
  flex-grow: 1;
}
</style>