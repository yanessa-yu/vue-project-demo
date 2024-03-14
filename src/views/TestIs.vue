
<template>
    <component :is='formatComponentInstance'></component>
  </template>

  <script lang="ts" setup>
  import { ref, h } from 'vue'
  import HelloWorld from '@/components/HelloWorld.vue';
  
  console.log(HelloWorld)
  let msg = ref('Hello World')
  
  function formatComponentInstance(){
  
    let _h = h(HelloWorld)
    console.log(1111, _h)
    let obj = {
      name: 'IsComponent',
      render() {
        return _h
      }
    }
    console.log(222, obj)
    let a = h(obj)
    console.log(333, a)
    return h(obj)
  }
  formatComponentInstance()
  
  </script>