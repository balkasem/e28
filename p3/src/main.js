import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import store from '@/common/store.js';
import router from '@/common/router.js';

Vue.config.productionTip = false

Vue.use(VueRouter);

new Vue({
  router: router, 
  store,
  render: h => h(App),
}).$mount('#app')



