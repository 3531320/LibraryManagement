<template>
  <router-view />
</template>
<script>
import Index from "./components/home.vue";
export default {
  name: "App",
  components: {
    Index,
  },
};
</script>
<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
