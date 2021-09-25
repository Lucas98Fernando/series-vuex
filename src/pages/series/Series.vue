<template>
  <div class="container mt-4">
    <h1 class="is-size-2 mb-4">Todas séries</h1>
    <div class="columns is-multiline">
      <div class="column is-one-third" v-for="(item, i) in series" :key="i">
        <series-card :series="item"></series-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import SeriesCard from "@/components/SeriesCards.vue";
export default {
  name: "Series",
  components: { SeriesCard },
  mounted() {
    this.ActionFindSeries();
  },
  computed: {
    ...mapState("series", ["series"]),
  },
  methods: {
    ...mapActions("series", ["ActionFindSeries"]),
  },
};
</script>