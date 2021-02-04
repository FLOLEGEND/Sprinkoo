import '@babel/polyfill'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./registerServiceWorker"
// eslint-disable-next-line no-unused-vars
import css from './assets/css/style.css'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

