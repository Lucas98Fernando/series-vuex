<template>
  <div id="app">
    <Navbar v-if="hasToken" />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/layout/navbar/navbar.vue";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    Navbar,
  },
  computed: {
    ...mapGetters("auth", ["hasToken"]),
  },
};
</script>
