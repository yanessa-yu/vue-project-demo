<template>
    <el-input v-model="input" style="width: 240px" placeholder="Please input" v-if="show"/>
    <el-button @click="show = !show">change</el-button>
  </template>
  
  <script lang="ts" setup>
  import { ElInput, ElButton } from 'element-plus'
  import { onBeforeUnmount, onMounted, onUnmounted, ref } from 'vue'
  const input = ref('')
  const show = ref(true)

  onMounted(() => {
    console.log('mounted')
  })

  window.onbeforeunload = function() {
    console.log("onbeforeunload")
  }
  onBeforeUnmount(() => {
    console.log('unmount')
  })

  onUnmounted(() => {
    console.log('unmounted22')
  })
  </script>
  