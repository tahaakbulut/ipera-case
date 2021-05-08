<template>
  <div id="app">
    <Navigation />
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "./components/ui/Navigation";
export default {
  name: "App",
  components: {
    Navigation,
  },
};
</script>
<style>
#app {
  padding-top: 55px;
  min-height: calc(100vh - 55px);
}
</style>
