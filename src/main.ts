// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// import  ButtonCounter from './components/ButtonCounter.vue'

const app=createApp(App)


// app.component('ButtonCounter', ButtonCounter)


// app.directive('focus', {
//     mounted(el) {
//         el.focus()
//     }
// })

// app.directive('color', {
//     mounted(el, binding) {
//         el.style.color = binding.value
//     }
// })
    

app.mount('#app')
