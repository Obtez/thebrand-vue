<template>
  <div class="wrapper">
    <div class="container">
      <div class="image-container">
        <img src="@/assets/images/sections/section-3-img-1.png" alt="image alt text" />
      </div>
      <div class="video-container">
        <img src="@/assets/images/sections/section-3-img-2.png" alt="image alt text" />
        <div class="overlay">
          <div class="chevron"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Image',
};
</script>

<style lang="scss" scoped>
.wrapper {
  grid-column: 9 / 13;
  grid-row: 1 / 3;
}

.container {
  position: relative;
  display: flex;
  height: fit-content;
}

.image-container {
  width: 100%;
  height: auto;
}

img {
  width: 100%;
  height: auto;
}

.video-container {
  position: absolute;
  z-index: 2;
  bottom: -18%;
  right: 10%;
  cursor: pointer;
  width: 70%;

  &:hover {
    .overlay {
      opacity: 1;
    }
  }

  img {
    width: 100%;
  }
}

.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: 20%;
  aspect-ratio: 1;
  background: white;
  z-index: 1;
  opacity: 0.9;
}

.chevron {
  background: black;
  height: 20%;
  width: 20%;
  clip-path: polygon(0 0, 0 0, 100% 0, 100% 100%);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-70%, -50%) rotate(45deg);
}
</style>
