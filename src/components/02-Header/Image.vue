<template>
  <div class="header-image">
    <img src="@/assets/images/header/header-img-large.png" alt="full view of product" />
  </div>
</template>

<script>
export default {
  name: 'Image',
};
</script>

<style lang="scss" scoped>
.header-image {
  width: auto;
  flex-grow: 1;
  margin: 0 4vw;

  img {
    width: 100%;
    height: 100%;
  }
}

@media screen and (min-width: 2560px) {
  .header-image {
    width: auto;
    height: 100%;
  }
}
</style>
