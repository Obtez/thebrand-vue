<template>
  <div class="bg-dark">
    <ul class="row padded screen-centered">
      <li>
        <p>
          <a class="nav-link" href="#">Home</a>
        </p>
      </li>
      <li>
        <p>
          <span>/</span>
          <a class="nav-link" href="#">Watches</a>
        </p>
      </li>
      <li>
        <p>
          <span>/</span>
          <a class="nav-link" href="#">Men's Watches</a>
        </p>
      </li>
      <li>
        <p>
          <span>/</span>
          <a class="nav-link" href="#">Piaget</a>
        </p>
      </li>
      <li>
        <p>
          <span>/</span>
          <a class="nav-link active" href="#">Piaget Altiplano Ultimate 910P</a>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumbs',
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/_font-sizes.scss';

.bg-dark {
  background: rgb(20, 20, 20);
}

.padded {
  padding-top: 1.5vw;
  padding-bottom: 1.5vw;
}

.row {
  display: flex;
}

.nav-link {
  color: rgb(128, 128, 128);
  font-size: map-get($small1, 1200);
  font-family: 'TradeGothic LT Light', serif;

  &:hover {
    color: rgb(255, 255, 255);
  }
}

.active {
  color: rgb(255, 255, 255);
}

span {
  margin: 0 0.5vw;
  color: rgb(128, 128, 128);
}

@media screen and (min-width: 2560px) {
  .nav-link {
    font-size: map-get($small1, 2560);
  }
}

@media screen and (min-width: 3600px) {
  .nav-link {
    font-size: map-get($small1, 3600);
  }
}
</style>
