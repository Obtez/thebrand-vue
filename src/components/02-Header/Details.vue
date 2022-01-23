<template>
  <div class="row details-tab">
    <button type="button" @click="toggle">
      <span class="icon">
        <img src="@/assets/icons/header/arrow-down.svg" alt="arrow pointing down icon" />
      </span>
      {{ this.visibility ? 'CLOSE PRODUCT DETAILS' : 'SHOW PRODUCT DETAILS' }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Details',
  props: ['visibility'],
  methods: {
    toggle() {
      this.$emit('toggle');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/_font-sizes.scss';

.row {
  display: flex;
  justify-content: center;
  align-items: center;
}

.details-tab {
  grid-column: 1 / 6;
  background: white;
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
