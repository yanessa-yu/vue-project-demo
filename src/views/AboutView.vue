<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-html="text"></div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'

  let text = ref('');
  onMounted(() => {
    let xhr = new XMLHttpRequest()
    xhr.open('get','http://localhost:5173/')
    xhr.onload = function(res) {
      text.value = xhr.responseText
    }
    xhr.send()
  })
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
