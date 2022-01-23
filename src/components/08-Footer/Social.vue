<template>
  <div class="inner-row">
    <div class="icon-container icon-facebook">
      <a href="#">
        <img src="@/assets/icons/footer/social/facebook.svg" alt="facebook icon" />
      </a>
    </div>
    <div class="icon-container icon-twitter">
      <a href="#">
        <img src="@/assets/icons/footer/social/twitter.svg" alt="twitter icon" />
      </a>
    </div>
    <div class="icon-container icon-youtube">
      <a href="#">
        <img src="@/assets/icons/footer/social/youtube.svg" alt="youtube icon" />
      </a>
    </div>
    <div class="icon-container icon-instagram">
      <a href="#">
        <img src="@/assets/icons/footer/social/instagram.svg" alt="instagram icon" />
      </a>
    </div>
    <div class="icon-container icon-linkedin">
      <a href="#">
        <img src="@/assets/icons/footer/social/linkedin.svg" alt="linkedin icon" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Social',
};
</script>

<style lang="scss" scoped>
.inner-row {
  margin-top: 4.25rem;
  display: flex;
  gap: 0.625vw;
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(240, 240, 240);
  width: 3vw;
  height: 3vw;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0.85vw 0;
  }
}

img {
  width: auto;
  height: 100%;
}
</style>
