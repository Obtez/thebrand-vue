<template>
  <div class="row">
    <div class="search-icon">
      <button type="button">
        <img src="@/assets/icons/nav/search.svg" alt="search icon" />
      </button>
    </div>
    <div class="login-icon">
      <button type="button">
        <img src="@/assets/icons/nav/login.svg" alt="login icon" />
      </button>
    </div>
    <div class="wishlist-icon">
      <button type="button">
        <img src="@/assets/icons/nav/wishlist.svg" alt="wishlist icon" />
      </button>
    </div>
    <div class="bag-icon">
      <button type="button">
        <img src="@/assets/icons/nav/bag.svg" alt="bag icon" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Right',
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/_font-sizes.scss';

.row {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 2vw;
}

button {
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}

img {
  width: map-get($default, 1200);
}

@media screen and (min-width: 2560px) {
  img {
    width: map-get($default, 2560);
  }
}

@media screen and (min-width: 3600px) {
  img {
    width: map-get($default, 3600);
  }
}
</style>
