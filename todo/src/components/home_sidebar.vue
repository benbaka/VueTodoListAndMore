<template>
  <aside class="menu">
    <p class="menu-label">
      General Post
    </p>
    <ul class="menu-list">
      <router-link class="nav-link" to="/home/list">List</router-link>
      <li><a>Create</a></li>
    </ul>
  </aside>
</template>

<script>

export default{
  name: 'homeSidebar',
  data() {
    return {
    }
  }
}
</script>

<style scoped>

</style>
