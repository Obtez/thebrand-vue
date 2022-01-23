<template>
  <button type="button">ADD TO SHOPPING BAG</button>
</template>

<script>
export default {
  name: 'Button',
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/_font-sizes.scss';

button {
  font-size: map-get($default, 1200);
  font-family: 'TradeGothic LT Bold', sans-serif;
  letter-spacing: 0.1em;
  padding: 1.5em 1.75em;
  background: rgb(202, 162, 92);
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background: rgb(208, 182, 128);
    color: white;
  }
}

@media screen and (min-width: 2560px) {
  button {
    font-size: map-get($default, 2560);
  }
}

@media screen and (min-width: 3600px) {
  button {
    font-size: map-get($default, 3600);
  }
}
</style>
