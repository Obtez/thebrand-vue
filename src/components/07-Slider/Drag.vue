<template>
  <button @click="emit">
    <img src="@/assets/icons/slider/arrow-left.svg" alt="arrow left icon" />
    DRAG
  </button>
</template>

<script>
export default {
  name: 'DragButton',
  methods: {
    emit() {
      this.$emit('drag');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/_font-sizes.scss';

button {
  color: white;
  letter-spacing: 0.2em;
  font-size: map-get($small2, 1200);
  font-family: 'TradeGothic LT Bold', sans-serif;
  border: 1px solid rgb(202, 162, 92);
  border-radius: 50%;
  background: transparent;
  padding: 2.625vw;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1vw;

  &:hover {
    transform: scale(1.05);
  }
}

img {
  width: auto;
  height: map-get($small2, 1200);
}

@media screen and (min-width: 2560px) {
  button {
    font-size: map-get($small2, 2560);
  }

  img {
    height: map-get($small2, 2560);
  }
}

@media screen and (min-width: 3600px) {
  button {
    font-size: map-get($small2, 3600);
  }

  img {
    height: map-get($small2, 3600);
  }
}
</style>
