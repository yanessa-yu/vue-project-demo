<template>
    <div class="father">
        <div class="title">我是主应用</div>
    </div>
    <div id="container" class="son">

    </div>
</template>

<script setup lang="ts">

import { loadMicroApp } from 'qiankun';
import { onBeforeUnmount, onMounted } from 'vue';

let app: any = null;
onMounted(() => {
    localStorage.setItem('ysg', 'test')
    console.log('localStorage', localStorage.getItem('ysg'))
    app = loadMicroApp({
        name: 'my-app',
        entry: '//192.168.3.102:3000',
        container: '#container'
    }
  )
})

onBeforeUnmount(() => {
    app.unmount()
})
</script>

<style>
.title {
    font-size: 20px;
}
</style>