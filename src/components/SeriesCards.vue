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
            type="button"
            @click.prevent="toggleWatchlist()"
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
            class="button"
            :class="series.watched ? 'is-danger' : 'is-primary'"
            @click.prevent="toggleWatchedlist()"
          >
            <span class="icon is-small">
              <i class="material-icons mdi-48">
                {{ series.watched ? "remove" : "playlist_add_check" }}
              </i>
            </span>
            <span>
              {{ series.watched ? "Remover da" : "Adicionar à" }}
              watchedlist
            </span>
          </button>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SeriesBox",
  props: {
    series: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions("watched", [
      "ActionAddWatched",
      "ActionDeleteFromWatched",
      "ActionFindWatched",
    ]),
    ...mapActions("watchlist", [
      "ActionAddWatchlist",
      "ActionDeleteFromWatchlist",
      "ActionFindWatchlist",
    ]),
    // Método para adicionar e remover items da watchlist
    async toggleWatchlist() {
      try {
        // Se o item já estiver na lista de assistidos, ele será removido
        if (this.series.watched) {
          await this.ActionDeleteFromWatched(this.series.id);
        }

        if (this.series.watchlist) {
          await this.ActionDeleteFromWatchlist(this.series.id);
          // Se o procedimento der certo, vai atualizar a lista
          this.ActionFindWatchlist();
          alert("Removida com sucesso!");
        } else {
          await this.ActionAddWatchlist({ serieId: this.series.id });
          // Se o procedimento der certo, vai atualizar a lista
          this.ActionFindWatchlist();
          alert("Adicionada com sucesso!");
        }
        // Se o procedimento der certo, vai atualizar a lista
        this.ActionFindWatchlist();
      } catch (err) {
        console.log(err);
        alert("Ocorreu um erro inesperado");
      }
    },
    // Método para adicionar e remover items da watchedlist
    async toggleWatchedlist() {
      try {
        // Se o item já estiver na lista de quero assistir, ele será removido
        if (this.series.watchlist) {
          await this.ActionDeleteFromWatchlist(this.series.id);
        }

        if (this.series.watched) {
          await this.ActionDeleteFromWatched(this.series.id);
          // Se o procedimento der certo, vai atualizar a lista
          this.ActionFindWatched();
          alert("Removida com sucesso!");
        } else {
          await this.ActionAddWatched({ serieId: this.series.id });
          // Se o procedimento der certo, vai atualizar a lista
          this.ActionFindWatched();
          alert("Adicionada com sucesso!");
        }
        // Se o procedimento der certo, vai atualizar a lista
        this.ActionFindWatched();
      } catch (err) {
        console.log(err);
        alert("Ocorreu um erro inesperado");
      }
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