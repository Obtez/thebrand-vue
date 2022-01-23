<template>
  <div class="headline">
    <p class="subheading">PRODUCT DESCRIPTION</p>
    <h2 class="section-heading">The world's thinnest Automatic Watch</h2>
  </div>
  <div class="indent">
    <p class="text-spaced">
      The thinnest hand-wound mechanical watches in the world. Manufacture Piaget 910P ultra-thin,
      hand-wound mechanical movement.
    </p>
    <p class="text-normal">
      The Altiplano 38 mm watch is a unique concept, and resolutely proud of its status as one of
      the thinnest and most elegant mechanical timepieces in the world. Blending hand-wound calibre
      and external features into a single concept, the watch has been designed as a whole unit and
      is only 3.65 mm thick.
    </p>
    <p class="text-normal">
      The culmination of over half a century of virtuoso craftsmanship in the field of ultra-thin
      watchmaking, a domain in which Piaget reigns supreme, this luxury watch symbolises all the
      excellence.
    </p>
    <Button />
  </div>
</template>

<script>
import Button from '@/components/04-Content/Button.vue';

export default {
  name: 'Headline',
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/_font-sizes.scss';

.headline {
  grid-column: 6 / 13;
}

.section-heading {
  margin-bottom: 4rem;
}

.indent {
  grid-column: 7 / 13;
}

.text-spaced {
  font-size: map-get($large4, 1200);
  color: rgb(140, 140, 140);
  font-family: 'Minion Pro', sans-serif;
  line-height: 1.6;
}

.text-normal {
  margin-top: 2.375rem;
  font-size: map-get($large1, 1200);
  line-height: 1.5;
  color: rgb(140, 140, 140);
  font-family: 'TradeGothic LT', sans-serif;
}

@media screen and (min-width: 2560px) {
  .text-spaced {
    font-size: map-get($large4, 2560);
  }

  .text-normal {
    font-size: map-get($large1, 2560);
  }
}

@media screen and (min-width: 3600px) {
  .text-spaced {
    font-size: map-get($large4, 3600);
  }

  .text-normal {
    font-size: map-get($large1, 3600);
  }
}
</style>
