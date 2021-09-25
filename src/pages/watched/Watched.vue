<template>
  <div class="container mt-4">
    <h1 class="is-size-2 mb-4">Já assisti</h1>
    <div class="columns is-multiline">
      <div class="column is-one-third" v-for="(item, i) in watched" :key="i">
        <series-card :series="item"></series-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import SeriesCard from "@/components/SeriesCards.vue";
export default {
  name: "Watched",
  components: { SeriesCard },
  mounted() {
    this.ActionFindWatched();
  },
  computed: {
    ...mapState("watched", ["watched"]),
  },
  methods: {
    ...mapActions("watched", ["ActionFindWatched"]),
  },
};
</script>