<template>
<div class="container">
  <br><br>
  <div class="columns">
    <div class="column is-one-fifth">
      <home-sidebar> </home-sidebar>
    </div>
    <div class="column">

    <router-view/>
      </div>
    </div>
  </div>
</template>

<script>

import homeSidebar from './home_sidebar.vue'

export default{
  name: 'home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    homeSidebar
  }
}
</script>

<style scoped>

</style>
