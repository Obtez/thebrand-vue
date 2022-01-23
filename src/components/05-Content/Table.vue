<template>
  <div class="table inner-grid">
    <div class="col-left">
      <div class="icon">
        <img src="@/assets/icons/content/icon-1.svg" alt="icon" />
      </div>
      <div class="text-box">
        <p class="category">Metal</p>
        <p class="text">ROSE GOLD / SILVER</p>
      </div>
    </div>
    <div class="col-right">
      <div class="icon">
        <img src="@/assets/icons/content/icon-5.svg" alt="icon" />
      </div>
      <div class="text-box">
        <p class="category">Case Shape</p>
        <p class="text">ROUND</p>
      </div>
    </div>
    <div class="col-left">
      <div class="icon">
        <img src="@/assets/icons/content/icon-2.svg" alt="icon" />
      </div>
      <div class="text-box">
        <p class="category">Metal Weight</p>
        <p class="text">32.14</p>
      </div>
    </div>
    <div class="col-right">
      <div class="icon">
        <img src="@/assets/icons/content/icon-6.svg" alt="icon" />
      </div>
      <div class="text-box">
        <p class="category">Case Diameter</p>
        <p class="text">38 MM</p>
      </div>
    </div>
    <div class="col-left">
      <div class="icon">
        <img src="@/assets/icons/content/icon-3.svg" alt="icon" />
      </div>
      <div class="text-box">
        <p class="category">Strap Type</p>
        <p class="text">ALLIGATOR</p>
      </div>
    </div>

    <div class="col-right">
      <div class="icon">
        <img src="@/assets/icons/content/icon-7.svg" alt="icon" />
      </div>
      <div class="text-box">
        <p class="category">Case Thickness</p>
        <p class="text">3.45 MM</p>
      </div>
    </div>
    <div class="col-left">
      <div class="icon">
        <img src="@/assets/icons/content/icon-4.svg" alt="icon" />
      </div>
      <div class="text-box">
        <p class="category">Strap Color</p>
        <p class="text">BLACK / BROWN</p>
      </div>
    </div>

    <div class="col-right">
      <div class="icon">
        <img src="@/assets/icons/content/icon-8.svg" alt="icon" />
      </div>
      <div class="text-box">
        <p class="category">Water Resistance</p>
        <p class="text">30 M / O2 ATM</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/_font-sizes.scss';

.table {
  grid-row: 2 / 3;
  grid-column: 1 / 9;
}
.inner-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, 1fr);
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

.col-left:nth-of-type(7),
.col-right:nth-of-type(8) {
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
