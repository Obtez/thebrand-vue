<template>
  <div class="wrapper">
    <div class="image-container-front">
      <img src="@/assets/images/sections/section-2-img-1.png" alt="image alt text" />
    </div>
    <div class="image-container-back">
      <img src="@/assets/images/sections/section-2-img-2.png" alt="image alt text" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Image',
};
</script>

<style lang="scss" scoped>
.wrapper {
  grid-column: 1 / 6;
  grid-row: 1 / 3;
  position: relative;
}

.image-container {
  &-front {
    position: absolute;
    top: 17%;
    right: 0;
    z-index: 2;
  }

  &-back {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
}

img {
  width: auto;
  height: 100%;
}

@media screen and (min-width: 2560px) {
  img {
    height: 27.5vw;
  }
}
</style>
