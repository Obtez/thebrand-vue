<template>
  <div class="padding row screen-centered">
    <div>
      <ul class="row">
        <li>
          <a class="nav-link" href="#">WATCHES</a>
        </li>
        <li>
          <a class="nav-link" href="#">JEWELLERY</a>
        </li>
        <li>
          <a class="nav-link" href="#">WEDDING</a>
        </li>
      </ul>
    </div>
    <div class="logo">
      <a href="#">THE BRAND</a>
    </div>
    <div>
      <ul class="row">
        <li>
          <a class="nav-link" href="#">ACADEMY</a>
        </li>
        <li>
          <a class="nav-link" href="#">COMPANY</a>
        </li>
        <li>
          <a class="nav-link" href="#">STORES</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/_font-sizes.scss';

.padding {
  padding: 1.5vw 0;
}

.screen-centered {
  margin: 0 1rem;
}

.row {
  display: flex;
  align-items: flex-end;
  gap: 4.5vw;
}

a {
  color: rgb(10, 10, 10);
  font-family: 'Minion Pro', sans-serif;

  &:hover {
    color: rgb(128, 128, 128);
  }
}

.nav-link {
  font-weight: 700;
  letter-spacing: 0.1em;
  font-size: map-get($default, 0);
}

.logo {
  margin: 0 auto;
}

.logo > a {
  width: max-content;
  display: block;
  font-size: map-get($large7, 0);
  line-height: 0.5;
  letter-spacing: 0.2em;
}

@media screen and (min-width: 576px) {
  .nav-link {
    font-size: map-get($default, 576);
  }

  .logo > a {
    font-size: map-get($large7, 576);
  }
}
@media screen and (min-width: 768px) {
  .nav-link {
    font-size: map-get($default, 768);
  }

  .logo > a {
    font-size: map-get($large7, 768);
  }
}

@media screen and (min-width: 992px) {
  .nav-link {
    font-size: map-get($default, 992);
  }

  .logo > a {
    font-size: map-get($large7, 992);
  }
}
@media screen and (min-width: 1200px) {
  .screen-centered {
    margin: 0 12.8vw;
  }

  .nav-link {
    font-size: map-get($default, 1200);
  }

  .logo > a {
    font-size: map-get($large7, 1200);
  }
}

@media screen and (min-width: 2560px) {
  .screen-centered {
    margin: 0 12.8vw;
  }

  .nav-link {
    font-size: map-get($default, 2560);
  }

  .logo > a {
    font-size: map-get($large7, 2560);
  }
}
@media screen and (min-width: 3600px) {
  .nav-link {
    font-size: map-get($default, 3600);
  }

  .logo > a {
    font-size: map-get($large7, 3600);
  }
}
</style>
