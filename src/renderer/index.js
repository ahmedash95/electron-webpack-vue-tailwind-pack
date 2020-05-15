import Vue from "vue"

Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV === "development"


import App from './App.vue'
new Vue({
  render: h => h(App)
}).$mount('#app')