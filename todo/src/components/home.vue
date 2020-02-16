<template>
<div class="container">
  <div class="columns">
    <div class="column">
      <div class="home">
        <h1>Home</h1>
        {{msg}}
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default{
  name: 'home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>

</style>
