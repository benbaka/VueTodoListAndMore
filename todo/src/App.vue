<template>
  <div id="app">

<li class="nav-item">
  <router-link class="nav-link" to="/">Index</router-link> |
  <router-link class="nav-link" to="/home">Home</router-link>
</li>
    <router-view/>

  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
