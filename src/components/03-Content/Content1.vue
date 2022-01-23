<template>
  <section class="grid screen-centered">
    <Headline />
    <Table />
    <Image />
  </section>
</template>

<script>
import Headline from '@/components/03-Content/Headline.vue';
import Table from '@/components/03-Content/Table.vue';
import Image from '@/components/03-Content/Image.vue';

export default {
  name: 'Content1',
  components: {
    Headline,
    Table,
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
