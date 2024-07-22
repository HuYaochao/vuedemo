
<template>
  <!-- <Practice></Practice> -->
  <Son >
     <template #header>
        <h1>This is the header content.</h1>
      </template>
      <p>This is the default content.</p>
      <template #footer>
        <footer>This is the footer content.</footer>
      </template>
  </Son>
</template>

<script setup>

import Calculator from "./components/Calculator.vue";
import Practice from "./components/Practice.vue";

import Tab from "./components/Tab.vue";

import Form from "./components/Form.vue"

import Son from "./components/Son.vue"
import FirstComponent from './components/FirstComponent.vue'
import { ref } from 'vue'

const vColor = {
  mounted:(el,binding) => el.style.color = 'red'
}

// export default {
//   components: {
//     Practice,
//     Calculator,
//     Tab,
//     Form,
//     Son,
//     FirstComponent
//   },
//   setup() {

//     const message = ref('hello');

//     function changeMessage() {
//       message.value = '你好'
//     }
//     return { message, changeMessage }
//   },
// };
</script>


<style scoped>

</style>
