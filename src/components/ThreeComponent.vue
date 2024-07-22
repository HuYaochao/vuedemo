<template>
    <h1>我是三级组件的值</h1>
    {{ newMessage }}
</template>

<script lang='ts'>
export default {
    inject: ['message'],
    computed: {
        newMessage() {
            return this.message()
        }
    }
    
}
</script>
<style scoped></style>