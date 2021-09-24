<template>
  <div class="container">
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="@/assets/img/series.png" />
          <span class="ml-2 is-size-5">Séries Loved</span>
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item>
          <router-link
            :to="{ name: route.name }"
            :key="i"
            v-for="(route, i) in routes"
            exact
            exact-active-class="active"
            >{{ route.meta.title }}
          </router-link>
        </b-navbar-item>

        <!-- <b-navbar-item>
          <router-link :to="{ name: 'Watchlist' }">
            Quero assistir
          </router-link>
        </b-navbar-item>
        <b-navbar-item> Já assisti </b-navbar-item> -->
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    routes() {
      return this.$router.options.routes.filter(
        (route) => route.meta && route.meta.showNavbar
      );
    },
  },
};
</script>
