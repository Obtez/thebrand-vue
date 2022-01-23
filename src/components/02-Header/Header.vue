<template>
  <header>
    <div class="screen-centered">
      <div class="split">
        <div class="left">
          <Carousel />
          <Image />
        </div>
        <div class="right">
          <Headline />
        </div>
      </div>
      <div class="options-container">
        <Details :visibility="visibility" v-on:toggle="$emit('toggle')" />
        <Options />
      </div>
    </div>
  </header>
</template>

<script>
import Carousel from './Carousel.vue';
import Image from './Image.vue';
import Headline from './Headline.vue';
import Details from './Details.vue';
import Options from './Options.vue';

export default {
  name: 'Header',
  components: {
    Carousel,
    Image,
    Headline,
    Details,
    Options,
  },
  props: ['showDetails'],
  computed: {
    visibility() {
      return this.showDetails;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background: rgb(240, 240, 240);
}

.split {
  display: flex;
  align-items: center;
}

.left,
.right {
  flex-basis: 50%;
}

.left {
  display: flex;
}

.options-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background: rgb(20, 20, 20);
}
</style>
