<template>
    <div @click="change" ref="divRef">change</div>
        <div v-if="show">
            <el-dialog v-model="show" title="Tips" width="80%" >
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="Approved by">
                        <el-input v-model="formInline.name"></el-input>
                    </el-form-item>
                </el-form>
                <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="show = false">Cancel</el-button>
                        <el-button type="primary" @click="show = false">
                            Confirm
                        </el-button>
                    </span>
                </template>
            </el-dialog>
        </div>
</template>

<script lang="ts" setup>
import { ref, nextTick, onUnmounted } from 'vue';
import { ElDialog, ElForm, ElFormItem, ElInput, ElButton } from 'element-plus'
const value = ref(null)
                const formInline = ref({
                    name: ''
                })
                const show = ref(false)
                const dialogRef = ref(null)
                const change = () => {
                    show.value = !show.value
                    nextTick(() => {
                        const timer = setTimeout(() => {
                            console.log(dialogRef.value)
                            clearTimeout(timer)
                        }, 1000);
                    })
                }
                onUnmounted(() => {
                    console.log(111)
                })
</script>