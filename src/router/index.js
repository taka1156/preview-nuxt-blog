import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      name: 'home',
      component: () => import('@/view/home.vue')
    },
    {
      path: '/article',
      name: 'article',
      component: () => import('@/view/article')
    }
  ]
});
