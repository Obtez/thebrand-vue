<template>
  <div class="bg-dark">
    <div class="grid screen-centered">
      <button type="button" @click="toggle">
        <span class="icon">
          <img src="@/assets/icons/buttons/arrow-up.svg" alt="icon" />
        </span>
        CLOSE PRODUCT DETAILS
      </button>
      <button type="button">
        <span class="icon">
          <img src="@/assets/icons/buttons/bag.svg" alt="icon" />
        </span>
        ADD TO THE SHOPPING BAG
      </button>
      <button type="button">
        <span class="icon">
          <img src="@/assets/icons/buttons/enquiry.svg" alt="icon" />
        </span>
        MAKE AN ENQUIRY
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Buttons',
  methods: {
    toggle() {
      this.$emit('toggle');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/_font-sizes.scss';

.bg-dark {
  background: rgba(255, 255, 255, 0.08);
  padding-top: 4vw;
  padding-bottom: 4.625vw;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1vw;
}

.icon {
  margin-right: 1.125vw;
  img {
    width: auto;
    height: map-get($default, 1200);
  }
}

button {
  background: transparent;
  border: none;
  color: white;
  font-size: map-get($default, 1200);
  font-family: 'TradeGothic LT Bold', sans-serif;
  letter-spacing: 0.1em;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
}

@media screen and (min-width: 2560px) {
  button {
    font-size: map-get($default, 2560);
  }

  .icon {
    img {
      height: map-get($default, 2560);
    }
  }
}

@media screen and (min-width: 3600px) {
  button {
    font-size: map-get($default, 3600);
  }

  .icon {
    img {
      height: map-get($default, 3600);
    }
  }
}
</style>
