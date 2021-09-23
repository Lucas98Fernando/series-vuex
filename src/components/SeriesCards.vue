<template>
  <div class="card">
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
        <button class="button is-primary">Adicionar</button>
      </div>
    </div>
  </div>
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