<template>
  <div v-if="show">
    <el-select v-model="val">
      <el-option value="1" label="aaaa"></el-option>
      <el-option value="2" label="bbbb"></el-option>
    </el-select>
  </div>
   
    <el-button @click="show = !show">change</el-button>
  </template>
  
  <script lang="ts" setup>
  import { ElSelect, ElOption, ElButton } from 'element-plus'
  import { ref } from 'vue'
  const val = ref('')
  const show = ref(true)




  </script>
  