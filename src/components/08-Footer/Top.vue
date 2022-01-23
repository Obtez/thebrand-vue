<template>
  <div class="row padding">
    <div class="col">
      <p class="logo">THE BRAND</p>
      <address>
        <p>Walchestrasse 9</p>
        <p>8006 Zürich</p>
      </address>
      <ul>
        <li>
          <span class="icon">T</span>
          <a href="tel:+4110203040">+41 (0) 10 20 30 40</a>
        </li>
        <li>
          <span class="icon">F</span>
          <a href="fax:+4150607080">+41 (0) 50 60 70 80</a>
        </li>
        <li>
          <span class="icon">M</span>
          <a class="accent" href="mailto:contact@thebrand.com">contact@thebrand.com</a>
        </li>
      </ul>
    </div>
    <div class="col footer-nav">
      <h4>CUSTOMER CARE</h4>
      <ul>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Track your order</a>
        </li>
        <li>
          <a href="#">Returns</a>
        </li>
        <li>
          <a href="#">FAQs</a>
        </li>
        <li>
          <a href="#">Location Finder</a>
        </li>
        <li>
          <a href="#">Service</a>
        </li>
        <li>
          <a href="#">Product Care</a>
        </li>
        <li>
          <a href="#">Gift Cards</a>
        </li>
        <li>
          <a href="#">Sell your jewellery</a>
        </li>
      </ul>
    </div>
    <div class="col footer-nav">
      <h4>OUR COMPANY</h4>
      <ul>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Career</a>
        </li>
        <li>
          <a href="#">Press</a>
        </li>
        <li>
          <a href="#">Social</a>
        </li>
      </ul>
      <h4>OUR COMPANY</h4>
      <ul>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Cookie Policy</a>
        </li>
        <li>
          <a href="#">Terms & Conditions</a>
        </li>
        <li>
          <a href="#">Impressum</a>
        </li>
      </ul>
    </div>
    <div class="col footer-nav">
      <h4>STAY IN TOUCH</h4>
      <ul>
        <li>
          <a href="#">Sign up to our Newsletter</a>
        </li>
        <li>
          <a href="#">Magazine Download</a>
        </li>
      </ul>
      <Social />
    </div>
  </div>
</template>

<script>
import Social from '@/components/08-Footer/Social.vue';

export default {
  name: 'Top',
  components: {
    Social,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/_font-sizes.scss';

.row {
  display: flex;
  justify-content: space-between;
}

.padding {
  padding-top: 7vw;
  padding-bottom: 6vw;
}

* {
  font-family: 'TradeGothic LT', sans-serif;
  font-size: map-get($small3, 1200);
  color: #000;
}

address {
  margin-bottom: 2.75rem;
}

address > p {
  margin-top: 1.5rem;
}

.icon {
  font-family: 'TradeGothic LT Bold', sans-serif;
  margin-right: 1.75vw;
}

.logo {
  font-family: 'Minion Pro', serif;
  font-size: map-get($large3, 1200);
  letter-spacing: 0.15em;
}

.accent {
  color: rgb(202, 162, 92);
}

li {
  margin-bottom: 1vw;
}

h4 {
  font-family: 'TradeGothic LT Bold', sans-serif;
  margin: 1.625vw 0;
  font-size: map-get($default, 1200);
  letter-spacing: 0.1em;
}

.footer-nav a {
  color: rgb(160, 160, 160);

  &:hover {
    color: rgb(202, 162, 92);
  }
}

@media screen and (min-width: 2560px) {
  * {
    font-size: map-get($small3, 2560);
  }

  .logo {
    font-size: map-get($large3, 2560);
  }

  h4 {
    font-size: map-get($default, 2560);
  }
}

@media screen and (min-width: 3600px) {
  * {
    font-size: map-get($small3, 3600);
  }

  .logo {
    font-size: map-get($large3, 3600);
  }

  h4 {
    font-size: map-get($default, 3600);
  }
}
</style>
