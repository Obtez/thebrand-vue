<template>
  <div class="carousel">
    <div class="thumbnail active">
      <img src="@/assets/images/header/header-img-1.png" alt="product closeup" />
    </div>
    <div class="thumbnail">
      <img src="@/assets/images/header/header-img-2.png" alt="product closeup" />
    </div>
    <div class="thumbnail">
      <img src="@/assets/images/header/header-img-3.png" alt="product closeup" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
};
</script>

<style lang="scss" scoped>
.carousel {
  width: 17%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5vw;
}

.thumbnail {
  cursor: pointer;
}

img {
  width: 100%;
  height: auto;
}
</style>
