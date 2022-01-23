<template>
  <Nav />
  <Header v-on:toggle="toggleDetails" :showDetails="showDetails" />
  <div :class="drawer">
    <main>
      <Spacer />
      <Content1 />
      <Spacer />
      <Content2 />
      <Spacer />
      <Content3 />
      <Spacer />
    </main>
    <div class="bg-black">
      <Buttons v-on:toggle="toggleDetails" />
    </div>
  </div>
  <div class="bg-black">
    <Slider />
  </div>
  <Footer />
</template>

<script>
import Spacer from '@/components/00-other/Spacer.vue';
import Nav from '@/components/01-Nav/Nav.vue';
import Header from '@/components/02-Header/Header.vue';
import Content1 from '@/components/03-Content/Content1.vue';
import Content2 from '@/components/04-Content/Content2.vue';
import Content3 from '@/components/05-Content/Content3.vue';
import Buttons from '@/components/06-Buttons/Buttons.vue';
import Slider from '@/components/07-Slider/Slider.vue';
import Footer from '@/components/08-Footer/Footer.vue';

export default {
  name: 'App',
  components: {
    Spacer,
    Nav,
    Header,
    Content1,
    Content2,
    Content3,
    Buttons,
    Slider,
    Footer,
  },
  data() {
    return {
      showDetails: false,
      drawer: 'drawer hidden',
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
      if (this.drawer === 'drawer visible') {
        this.drawer = 'drawer hidden';
      } else {
        this.drawer = 'drawer visible';
      }
    },
  },
};
</script>

<style lang="scss">
.bg-black {
  background: rgb(15, 15, 15);
}

.drawer {
  max-height: 500vh;
  transition: max-height 0.5s ease-in-out;
  overflow: hidden;
}

.hidden {
  max-height: 0px;
  transition: max-height 0.5s ease-in-out;
}
</style>
