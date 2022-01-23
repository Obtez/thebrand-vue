<template>
  <nav>
    <div class="screen-centered row padded-top">
      <Left />
      <Right />
    </div>
    <Main />
    <Breadcrumbs />
  </nav>
</template>

<script>
import Left from './Links/Left.vue';
import Right from './Links/Right.vue';
import Main from './Links/Main.vue';
import Breadcrumbs from './Links/Breadcrumbs.vue';

export default {
  name: 'Nav',
  components: {
    Left,
    Right,
    Main,
    Breadcrumbs,
  },
};
</script>

<style lang="scss" scoped>
.padded-top {
  padding-top: 1.375rem;
}

.row {
  display: flex;
  justify-content: space-between;
}
</style>
