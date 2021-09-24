<template>
  <div class="view-serie">
    <div class="container">
      <div class="columns is-centered">
        <div class="column has-text-centered is-6">
          <template v-if="loading">
            <span>Carregando</span>
            <b-notification :closable="false">
              <b-loading
                :is-full-page="true"
                v-model="loading"
                :can-cancel="false"
              >
              </b-loading>
            </b-notification>
          </template>
          <template v-else>
            <img :src="serie.image" width="250" />
            <h2 class="is-size-3 mt-4">{{ serie.title }}</h2>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "ShowSerie",
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    this.getData();
  },
  computed: {
    ...mapState("showSerie", ["serie"]),
  },
  methods: {
    ...mapActions("showSerie", ["ActionFindSerie"]),
    async getData() {
      try {
        await this.ActionFindSerie(this.$route.params.id);
      } catch (err) {
        alert("Ocorreu um erro!");
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.view-serie {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}
</style>