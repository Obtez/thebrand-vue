<template>
  <div class="container row">
    <button type="button">
      <span class="icon">
        <img src="@/assets/icons/header/share.svg" alt="share icon" />
      </span>
      SHARE
    </button>
    <button type="button">
      <span class="icon">
        <img src="@/assets/icons/header/wishlist.svg" alt="wish list icon" />
      </span>
      WISH LIST
    </button>
    <button type="button">
      <span class="icon">
        <img src="@/assets/icons/header/compare.svg" alt="compare icon" />
      </span>
      COMPARE
    </button>
    <button type="button">
      <span class="icon">
        <img src="@/assets/icons/header/enquire.svg" alt="enquire icon" />
      </span>
      ENQUIRE
    </button>
  </div>
</template>

<script>
export default {
  name: 'Options',
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/_font-sizes.scss';

.container {
  grid-column: 6 / 13;
}

.row {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.icon {
  margin-right: 1.125vw;

  img {
    width: auto;
    height: map-get($small3, 1200);
  }
}

button {
  background: transparent;
  border: none;
  font-family: 'TradeGothic LT Bold', sans-serif;
  letter-spacing: 0.1em;
  font-size: map-get($small3, 1200);
  color: white;
  padding: 2.75vw 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
}

@media screen and (min-width: 2560px) {
  button {
    font-size: map-get($small3, 2560);
  }

  .icon {
    img {
      height: map-get($small3, 2560);
    }
  }
}

@media screen and (min-width: 3600px) {
  button {
    font-size: map-get($small3, 3600);
  }

  .icon {
    img {
      height: map-get($small3, 3600);
    }
  }
}
</style>
