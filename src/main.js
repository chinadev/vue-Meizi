// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import store from './vuex/store';
import VueRouter from 'vue-router';
import Welfare from 'components/welfare/welfare.vue';
import vueResource from 'vue-resource';
import infiniteScroll from 'vue-infinite-scroll';
Vue.use(infiniteScroll);
Vue.use(VueRouter);
Vue.use(vueResource);
let routes = [
  {path: '/', name: 'index', component: App, children: [{path: '/welfare', component: Welfare}]}
];
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
});
/* eslint-disable no-new */
const routerApp = new Vue({
  store,
  router
}).$mount('#app');
export default routerApp;
