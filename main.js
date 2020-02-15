Vue.use(VueRouter);
//Vue.use(httpVueLoader)

//var Settings =

// var router = new VueRouter({
//   routes:[
//     {path:'/settings', component: Settings}
//   ]
// });
new Vue({
  el: "#app",
  components:{
    'settings': httpVueLoader('./settings.vue')
  },
  data:{

  },
  methods: {

  }
});
