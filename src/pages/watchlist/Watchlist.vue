<template>
  <div class="container mt-4">
    <h1 class="is-size-2 mb-4">Watchlist</h1>
    <div class="columns">
      <div class="column is-3" v-for="(item, i) in watchlist" :key="i">
        <series-card :series="item"></series-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import SeriesCard from "@/components/SeriesCards.vue";
export default {
  name: "Watchlist",
  components: { SeriesCard },
  mounted() {
    this.ActionFindWatchlist();
  },
  computed: {
    ...mapState("watchlist", ["watchlist"]),
  },
  methods: {
    ...mapActions("watchlist", ["ActionFindWatchlist"]),
  },
};
</script>