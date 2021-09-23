<template>
  <div class="home">
    <div class="info-user has-text-centered">
      Olá, {{ user.name }}
      <p>Bem-vindo ao Séries Loved</p>
    </div>

    <div class="links">
      <router-link class="link-item" :to="{ name: 'Watchlist' }">
        <i class="material-icons mdi-48">playlist_play</i>
        <span>Quero assistir</span>
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
  </div>
</template>

<script>
// Importando o state da store
import { mapState } from "vuex";

export default {
  name: "Home",
  computed: {
    // Chmanado o state user da store do vuex
    ...mapState("auth", ["user"]),
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
      background-color: #7957d5;
      padding: 3rem 0;
      border-radius: 10px;
      transition: 0.5 ease-in-out;
      @include flex-center(true);

      span,
      i {
        color: #fff;
      }

      &:hover {
        transition: 0.5 ease-in-out;
        scale: 1.05;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
      }
    }

    .link-item:first-child {
      background-color: #3ec487;
    }

    .link-item:last-child {
      background-color: #f03a5f;
    }
  }
}
</style>
