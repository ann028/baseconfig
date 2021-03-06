import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../src/assets/css/base.css'


Vue.use(vueAxios, axios)
Vue.use(ElementUI)
Vue.config.productionTip = false

// require('./mock')
import './mock'


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
