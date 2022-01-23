<template>
  <div class="headline">
    <p class="subheading">ALTIPLANO COLLECTION</p>
    <h2 class="section-heading">Related Pieces</h2>
    <div class="controls">
      <Drag v-on:drag="$emit('drag')" />
      <p class="count">
        {{ currentImage + 1 }}
        <span class="muted"> / {{ totalNumImages }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import Drag from './Drag.vue';

export default {
  name: 'Headline',
  components: {
    Drag,
  },
  props: ['currentImage', 'totalNumImages'],
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/_font-sizes.scss';

.headline {
  flex-basis: 30%;
}

.section-heading {
  margin-bottom: 4rem;
  color: white;
}

.controls {
  width: fit-content;
}

.count {
  color: white;
  font-family: 'Minion Pro', sans-serif;
  font-size: map-get($large2, 1200);
  margin-top: 3rem;
  text-align: center;
}

.muted {
  color: rgb(140, 140, 140);
}

@media screen and (min-width: 2560px) {
  .count {
    font-size: map-get($large2, 2560);
  }
}

@media screen and (min-width: 3600px) {
  .count {
    font-size: map-get($large2, 3600);
  }
}
</style>
