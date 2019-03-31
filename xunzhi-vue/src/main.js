import Vue from 'vue'
import 'normalize.css/normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/styles/index.scss' // global css
import "@/assets/css/main.css";
import "@/assets/css/color-dark.css";
import '@/assets/css/icon.css';
import '@/icons'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from './utils/Http';

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
