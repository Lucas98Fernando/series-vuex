<template>
  <div id="app">
    <Navbar v-if="showNavbar" />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/layout/navbar/navbar.vue";
// import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    Navbar,
  },
  computed: {
    // ...mapGetters("auth", ["hasToken"]),
    showNavbar() {
      return this.$route.name !== "Home" && this.$route.name !== "Login";
    },
  },
};
</script>
