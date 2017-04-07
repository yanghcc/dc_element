import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import VueRouter from 'vue-router';
import Routers from './router';

Vue.use(ElementUI)
Vue.use(VueRouter);

const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
