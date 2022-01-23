<template>
  <section class="grid screen-centered">
    <Image />
    <Headline />
  </section>
</template>

<script>
import Headline from '@/components/04-Content/Headline.vue';
import Image from '@/components/04-Content/Image.vue';

export default {
  name: 'Content2',
  components: {
    Headline,
    Image,
  },
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 1vw;
}
</style>
