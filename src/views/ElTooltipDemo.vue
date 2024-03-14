<template>
    <div v-if="show">
      <el-tooltip content="Top center" placement="top">
        <el-button>Dark</el-button>
      </el-tooltip>
    </div>
    <el-button @click="show = !show">show / hide</el-button>
    </template>

  <script setup lang="ts">
    import { ref } from 'vue';
    import { ElTooltip, ElButton  } from "element-plus";

    const show = ref(true)
  </script>
    