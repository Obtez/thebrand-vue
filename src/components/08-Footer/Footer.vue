<template>
  <footer class="screen-centered">
    <Top />
    <Bottom />
  </footer>
</template>

<script>
import Top from '@/components/08-Footer/Top.vue';
import Bottom from '@/components/08-Footer/Bottom.vue';

export default {
  name: 'Footer',
  components: {
    Top,
    Bottom,
  },
};
</script>

<style lang="scss" scoped></style>
