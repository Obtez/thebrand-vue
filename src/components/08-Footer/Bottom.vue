<template>
  <div class="bottom-footer">
    <div class="row">
      <div>
        <p>© Copyright 2018 The Brand</p>
      </div>
      <button type="button" @click="scrollToTop">
        <div class="row">
          <p>Back to top</p>
          <img src="@/assets/icons/footer/arrow-up.svg" alt="arrow up icon" />
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bottom',
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/_font-sizes.scss';

.bottom-footer {
  padding: 4.5rem 4rem;
  border-top: 1px solid rgb(220, 220, 220);
}

* {
  font-size: map-get($small3, 1200);
  font-family: 'TradeGothic LT', sans-serif;
  color: rgb(140, 140, 140);
}

.row {
  display: flex;
  justify-content: space-between;
}

button {
  background: transparent;
  align-self: flex-end;
  border: none;
  cursor: pointer;

  img {
    margin-left: 0.75vw;
  }

  &:hover {
    transform: scale(1.1);
  }
}

img {
  width: auto;
  height: map-get($small3, 1200);
}

@media screen and (min-width: 2560px) {
  * {
    font-size: map-get($small3, 2560);
  }
  img {
    height: map-get($small3, 2560);
  }
}

@media screen and (min-width: 3600px) {
  * {
    font-size: map-get($small3, 3600);
  }
  img {
    height: map-get($small3, 3600);
  }
}
</style>
