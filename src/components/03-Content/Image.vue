<template>
  <div class="image-container">
    <img src="@/assets/images/sections/section-1-img.png" alt="image alt text" />
  </div>
</template>

<script>
export default {
  name: 'Image',
};
</script>

<style lang="scss" scoped>
.image-container {
  grid-column: 9 / 13;
  grid-row: 1 / 3;
}

img {
  max-width: 100%;
  height: 100%;
}
</style>
