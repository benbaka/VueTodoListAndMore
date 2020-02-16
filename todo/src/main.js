import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home.vue'
import index from '@/components/index.vue'
import App from './App.vue'

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
      component: home
    }

  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
