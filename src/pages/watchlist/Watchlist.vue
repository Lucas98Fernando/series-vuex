<template>
  <div>
    <h1>Watchlist</h1>
    <div class="columns">
      <div class="column" v-for="(item, i) in watchlist" :key="i">
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