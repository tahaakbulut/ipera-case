<template>
  <nav class="navbar navbar-dark bg-dark fixed-top">
    <router-link class="nav-link" to="dashboard">
      Dashboard
    </router-link>
    <router-link class="nav-link" to="filter">Filter</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.navbar {
  height: 55px;
}
.nav-link {
  color: white;
}
.nav-link.active,
.nav-link:hover {
  color: cornflowerblue;
}
</style>
