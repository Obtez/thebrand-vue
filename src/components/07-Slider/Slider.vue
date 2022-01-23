<template>
  <div class="screen-centered wrapper">
    <Headline
      v-on:drag="nextProduct"
      :currentImage="currentImage"
      :totalNumImages="totalNumImages"
    />
    <div class="slide-container">
      <Product :image="product1Image" />
      <Product :image="product2Image" />
      <Product :image="product3Image" />
      <Product :image="product4Image" />
    </div>
  </div>
</template>

<script>
import Headline from './Headline.vue';
import Product from './Product.vue';

const productImages = [
  './assets/images/slider/slider-1.png',
  './assets/images/slider/slider-2.png',
  './assets/images/slider/slider-3.png',
  './assets/images/slider/slider-4.png',
];

export default {
  name: 'Slider',
  components: {
    Headline,
    Product,
  },
  data() {
    return {
      currentImage: 0,
      totalNumImages: productImages.length,
      product1Image: productImages[0],
      product2Image: productImages[1],
      product3Image: productImages[2],
      product4Image: productImages[3],
    };
  },
  methods: {
    nextProduct() {
      this.currentImage = (this.currentImage + 1) % productImages.length;
      this.product1Image = productImages[this.currentImage];
      this.product2Image = productImages[(this.currentImage + 1) % productImages.length];
      this.product3Image = productImages[(this.currentImage + 2) % productImages.length];
      this.product4Image = productImages[(this.currentImage + 3) % productImages.length];
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 7.75vw 0;
  margin-right: 0;
  display: flex;
  align-items: center;
  background: rgb(15, 15, 15);
  position: relative;

  &::after {
    content: '';
    flex-grow: 1;
    background: green;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 25%;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 0%,
      rgba(255, 255, 255, 0) 75%
    );
  }
}

.slide-container {
  flex-grow: 1;
  display: flex;
  gap: 15%;
  overflow-x: hidden;
  padding-right: 10vw;
}
</style>
