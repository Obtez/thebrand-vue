<template>
  <div class="row">
    <div class="contact-icon">
      <button type="button">
        <img src="@/assets/icons/nav/contact.svg" alt="contact icon" />
      </button>
    </div>
    <div class="stores-icon">
      <button type="button">
        <img src="@/assets/icons/nav/stores.svg" alt="stores icon" />
      </button>
    </div>
    <div class="language-icon">
      <button type="button">
        <img src="@/assets/icons/nav/language.svg" alt="language icon" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Left',
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/_font-sizes.scss';

.row {
  display: flex;
  align-items: center;
  gap: 2vw;
}

button {
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}

img {
  width: map-get($default, 1200);
}

@media screen and (min-width: 2560px) {
  img {
    width: map-get($default, 2560);
  }
}

@media screen and (min-width: 3600px) {
  img {
    width: map-get($default, 3600);
  }
}
</style>
