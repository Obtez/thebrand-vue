<template>
  <div class="headline">
    <p class="subheading">PIAGET WATCHES</p>
    <h1>Piaget Altiplano Ultimate 910P</h1>
    <div class="indent">
      <p class="price">CHF 35'700.00</p>
      <p class="productID">Watch G0A39111</p>
      <p class="description">
        The thinnest hand-wound mechanical watches <br />
        in the world. Manufacture Piaget 910P ultra-thin, hand-wound mechanical movement.
      </p>
      <Button />
    </div>
  </div>
</template>

<script>
import Button from './Button.vue';

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
  padding: 6.75vw 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1vw;
}

.subheading,
h1 {
  grid-column: 1 / 7;
}

.indent {
  grid-column: 2 / 7;
}

h1 {
  font-family: 'Minion Pro', sans-serif;
  font-size: map-get($large9, 1200);
  color: rgb(20, 20, 20);
  font-weight: 400;
  margin-bottom: 3rem;
}

.price {
  font-size: map-get($large6, 1200);
  color: rgb(202, 162, 92);
  font-family: 'Minion Pro', sans-serif;
  margin-bottom: 2.75rem;
}

.productID {
  font-size: map-get($small1, 1200);
  color: rgb(140, 140, 140);
  font-family: 'TradeGothic LT Light', sans-serif;
  margin-bottom: 1vw;
}

.description {
  font-size: map-get($large5, 1200);
  color: rgb(140, 140, 140);
  font-family: 'Minion Pro', sans-serif;
  line-height: 1.6;
  margin-bottom: 3.75rem;
}

@media screen and (min-width: 2560px) {
  h1 {
    font-size: map-get($large9, 2560);
  }

  .price {
    font-size: map-get($large6, 2560);
  }

  .productID {
    font-size: map-get($small1, 2560);
  }

  .description {
    font-size: map-get($large5, 2560);
  }
}

@media screen and (min-width: 3600px) {
  h1 {
    font-size: map-get($large9, 3600);
  }

  .price {
    font-size: map-get($large6, 3600);
  }

  .productID {
    font-size: map-get($small1, 3600);
  }

  .description {
    font-size: map-get($large5, 3600);
  }
}
</style>
