<template>
  <div class="home">
    <div class="info-user has-text-centered">
      <img src="@/assets/img/series.png" width="80" />
      <p class="is-size-3 mt-2">Olá, {{ user.name }}</p>
      <p>Bem-vindo ao Séries Loved</p>
    </div>

    <div class="links">
      <router-link
        :key="i"
        v-for="(route, i) in routes"
        class="link-item"
        :to="{ name: route.name }"
      >
        <i class="material-icons mdi-48">{{ route.meta.icon }}</i>
        <span>{{ route.meta.label }}</span>
      </router-link>
      <a href="#" class="link-item">
        <i class="material-icons mdi-48">playlist_add_check</i>
        <span>Já assisti</span>
      </a>
      <a href="#" class="link-item">
        <i class="material-icons mdi-48">dvr</i>
        <span>Todas séries</span>
      </a>
    </div>

    <b-button
      class="btn-exit"
      size="is-medium"
      icon-right="logout"
      @click="logout()"
    />
  </div>
</template>

<script>
// Importando o state da store
import { mapActions, mapState } from "vuex";

export default {
  name: "Home",
  computed: {
    // Chmanado o state user da store do vuex
    ...mapState("auth", ["user"]),
    routes() {
      return this.$router.options.routes.filter(
        (route) => route.meta && route.meta.showNavbar
      );
    },
  },
  methods: {
    ...mapActions("auth", ["ActionSignOut"]),
    logout() {
      this.ActionSignOut();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin flex-center($columns: false) {
  display: flex;
  justify-content: center;
  align-items: center;

  @if $columns {
    flex-direction: column;
  }
}

.home {
  width: 100%;
  height: 100vh;
  @include flex-center(true);
  justify-content: space-around;

  .links {
    width: 100%;
    font-size: 1.2rem;
    @include flex-center();

    .link-item {
      flex: 0 0 30%;
      margin: 0 1rem;
      padding: 3rem 0;
      border-radius: 10px;
      transition: 0.3s ease-in-out;
      @include flex-center(true);

      span,
      i {
        color: #fff;
      }

      &:hover {
        scale: 1.05;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
      }
    }

    .link-item:first-child {
      background-color: #3ec487;
    }

    .link-item:nth-child(2) {
      background-color: #7957d5;
    }

    .link-item:last-child {
      background-color: #f03a5f;
    }
  }

  .btn-exit {
    position: absolute;
    top: 40px;
    right: 40px;
  }
}
</style>
