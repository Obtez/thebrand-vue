<template>
  <div class="table inner-grid">
    <div class="col-left">
      <div class="icon">
        <img src="@/assets/icons/content/icon-1.svg" alt="icon" />
      </div>
      <div class="text-box">
        <p class="category">Brand</p>
        <p class="text">PIAGET</p>
      </div>
    </div>
    <div class="col-right">
      <div class="icon">
        <img src="@/assets/icons/content/icon-5.svg" alt="icon" />
      </div>
      <div class="text-box">
        <p class="category">Warranty</p>
        <p class="text">2 YEARS</p>
      </div>
    </div>
    <div class="col-left">
      <div class="icon">
        <img src="@/assets/icons/content/icon-2.svg" alt="icon" />
      </div>
      <div class="text-box">
        <p class="category">Collection</p>
        <p class="text">60TH ANNIVERSARY</p>
      </div>
    </div>
    <div class="col-right">
      <div class="icon">
        <img src="@/assets/icons/content/icon-6.svg" alt="icon" />
      </div>
      <div class="text-box">
        <p class="category">Gender</p>
        <p class="text">FOR MEN'S</p>
      </div>
    </div>
    <div class="col-left">
      <div class="icon">
        <img src="@/assets/icons/content/icon-3.svg" alt="icon" />
      </div>
      <div class="text-box">
        <p class="category">Movement</p>
        <p class="text">AUTOMATIC MOVEMENT</p>
      </div>
    </div>

    <div class="col-right">
      <div class="icon">
        <img src="@/assets/icons/content/icon-7.svg" alt="icon" />
      </div>
      <div class="text-box">
        <p class="category">Origin</p>
        <p class="text">SWITZERLAND</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  components: {},
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/_font-sizes.scss';

.table {
  grid-row: 2 / 3;
  grid-column: 1 / 8;
}
.inner-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 0 1vw;
}

.col-left,
.col-right {
  display: flex;
  border-bottom: 1px solid rgb(210, 210, 210);
  padding: 1.125rem 0;
}

.col-left {
  grid-column: 1 / 4;
}

.col-right {
  grid-column: 5 / 8;
}

.col-left:nth-of-type(5),
.col-right:nth-of-type(6) {
  border-bottom: none;
}

.icon {
  margin-right: 1.25vw;
  place-content: center;
}

.category,
.text {
  font-size: map-get($default, 1200);
}

.category {
  color: rgb(140, 140, 140);
  font-family: 'Minion Pro', sans-serif;
}

.text {
  letter-spacing: 0.1em;
  color: #000;
  font-family: 'TradeGothic LT bold', sans-serif;
}

@media screen and (min-width: 2560px) {
  .category,
  .text {
    font-size: map-get($default, 2560);
  }
}

@media screen and (min-width: 3600px) {
  .category,
  .text {
    font-size: map-get($default, 3600);
  }
}
</style>
