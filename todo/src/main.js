import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home.vue'
import index from '@/components/index.vue'
import homeList from '@/components/home_list.vue'
import App from './App.vue'
import "bulma/css/bulma.css";

Vue.config.productionTip = false

Vue.use(Router)

var router =  new Router({
  routes: [
    {
      path: '/',
      component: index
    },

    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: '/home/list',
          name: 'home_list',
          component: homeList,
        }
      ]
    },



  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
