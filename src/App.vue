<template>
  <div id="app">
    <NavBar class="mb-5 sticky-top" />
    <router-view class="container" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  mounted() {
    this.$store.commit("onStart");
  },
};
</script>
