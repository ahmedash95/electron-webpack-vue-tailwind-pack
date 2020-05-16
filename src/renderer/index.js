import './styles.scss';

import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV === "development"
if(process.env.NODE_ENV === "development") {
  require('devtron').install()
}

const Foo = { template: '<div class="font-bold text-center w-full text-gray-800 text-2xl mt-10">Hello World</div>' }
const routes = [
  { path: '/', component: Foo },
]
const router = new VueRouter({
  routes // short for `routes: routes`
})

import App from './App.vue'
new Vue({
  // render: h => h(App)
  router
}).$mount('#app')