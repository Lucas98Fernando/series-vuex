<template>
  <router-link :to="{ name: 'Visualizar série', params: { id: series.id } }">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img class="img-inside" :src="series.image" alt="Imagem da série" />
        </figure>
      </div>
      <div class="card-content has-text-centered">
        <div class="media">
          <div class="media-content">
            <p class="title is-5">{{ series.title }}</p>
          </div>
        </div>
        <div class="content mt-4">
          <button
            class="button mb-3"
            :class="series.watchlist ? 'is-danger' : 'is-success'"
          >
            <span class="icon is-small">
              <i class="material-icons mdi-48">
                {{ series.watchlist ? "remove" : "playlist_add_check" }}
              </i>
            </span>
            <span>
              {{ series.watchlist ? "Remover da" : "Adicionar à" }} watchlist
            </span>
          </button>
          <button
            class="button is-outlined"
            :class="series.watchedlist ? 'is-danger' : 'is-primary'"
          >
            <span class="icon is-small">
              <i class="material-icons mdi-48">
                {{ series.watchedlist ? "remove" : "playlist_add_check" }}
              </i>
            </span>
            <span>
              {{ series.watchedlist ? "Remover da" : "Adicionar à" }} watchedlist
            </span>
          </button>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "SeriesBox",
  props: {
    series: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 15px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  .img-inside {
    border-radius: 15px 15px 0 0;
  }

  &:hover {
    transition: 0.3 ease-in-out;
    scale: 1.05;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  }
}
</style>