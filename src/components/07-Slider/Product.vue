<template>
  <div class="product">
    <img :src="imageURL" alt="product" />
    <p class="brand">PIAGET</p>
    <p class="name">Altiplano</p>
    <p class="watchID">GOA39111</p>
    <p class="price">CHF 24'900.00</p>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    image: {
      type: String,
      required: true,
    },
  },
  computed: {
    imageURL() {
      return this.image;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/_font-sizes.scss';

.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25vw;
}

img {
  width: auto;
  height: 14.75vw;
}

.brand {
  color: rgb(140, 140, 140);
  font-family: 'TradeGothic LT Bold', sans-serif;
  letter-spacing: 0.1em;
  font-size: map-get($default, 1200);
}

.name {
  font-size: map-get($large8, 1200);
  font-family: 'Minion Pro', sans-serif;
  color: white;
}

.watchID {
  color: rgb(128, 128, 128);
  font-family: 'TradeGothic LT Light', sans-serif;
  font-size: map-get($small2, 1200);
}

.price {
  margin-top: 0.875rem;
  color: white;
  font-family: 'Minion Pro', sans-serif;
  font-size: map-get($large2, 1200);
}

@media screen and (min-width: 2560px) {
  .brand {
    font-size: map-get($default, 2560);
  }
  .name {
    font-size: map-get($large8, 2560);
  }
  .watchID {
    font-size: map-get($small2, 2560);
  }
  .price {
    font-size: map-get($large2, 2560);
  }
}

@media screen and (min-width: 3600px) {
  .brand {
    font-size: map-get($default, 3600);
  }
  .name {
    font-size: map-get($large8, 3600);
  }
  .watchID {
    font-size: map-get($small2, 3600);
  }
  .price {
    font-size: map-get($large2, 3600);
  }
}
</style>
