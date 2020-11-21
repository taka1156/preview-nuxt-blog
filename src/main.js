import Vue from 'vue';
import router from './router';
import App from './App.vue';
import VueScrollTo from 'vue-scrollto';
import 'normalize.css';
import '@/assets/css/layout.css';
Vue.use(VueScrollTo, {
  offset: -70,
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
