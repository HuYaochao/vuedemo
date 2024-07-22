<template>
    <h1>我是一级组件的值</h1>
    <SecondComponent></SecondComponent>
</template>

<script lang='ts'>
import SecondComponent from './SecondComponent.vue'
export default {
    components: {
        SecondComponent
    },
    data() {
        return {
            message1: '我是一级组件中data的值datadatadata'
        }
    },
    // 提供
     provide() {
         return {
            // 函数返回响应式数据
            message: () => this.message1
        }
    },
}
</script>

<style scoped></style>