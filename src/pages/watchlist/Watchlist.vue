<template>
  <h1>Watchlist</h1>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Watchlist",
  mounted() {
    this.ActionFindWatchlist();
  },
  methods: {
    ...mapActions("watchlist", ["ActionFindWatchlist"]),
  },
};
</script>