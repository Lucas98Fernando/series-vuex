<template>
  <router-link :to="{ name: 'Visualizar série', params: { id: series.id } }">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="series.image" alt="Imagem da série" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ series.title }}</p>
        </div>
      </div>
      <div class="content">
        <button class="button is-primary mt-4">Adicionar</button>
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
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transition: 0.3 ease-in-out;
    scale: 1.05;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  }
}
</style>