import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import {routes} from './routes'
import store from './store/store'
Vue.use(Router)
Vue.config.productionTip = false;

const router = new Router({
  routes,
  mode:'history'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
