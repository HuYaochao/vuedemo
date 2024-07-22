<template>
    <h1>我是二级组件的值</h1>
    <ThreeComponent></ThreeComponent>
</template>

<script lang='ts'>
import ThreeComponent from './ThreeComponent.vue'
export default {
    components: {
        ThreeComponent
    },
}
</script>
<style scoped></style>