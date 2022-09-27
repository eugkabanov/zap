<script setup lang="ts">
import { Carousel, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const settings = {
  itemsToShow: 1,
  snapAlign: "center",
  autoplay: 2000,
  wrapAround: true,
};
// breakpoints are mobile first
// any settings not specified will fallback to the carousel settings
const breakpoints = {
  280: {
    itemsToShow: 2,
    snapAlign: "center",
  },
  992: {
    itemsToShow: 5.5,
    snapAlign: "center",
  },
  1400: {
    itemsToShow: 7,
    snapAlign: "start",
  },
};
</script>

<template>
  <Carousel :settings="settings" :breakpoints="breakpoints">
    <Slide :key="1">
      <div class="slide-item">
        <img
          class="slide-item__brand"
          alt="Brand"
          src="@/assets/brands/image-1.png"
        />
      </div>
    </Slide>
    <Slide :key="2">
      <div class="slide-item">
        <img
          class="slide-item__brand"
          alt="Brand"
          src="@/assets/brands/image-2.png"
        />
      </div>
    </Slide>
    <Slide :key="3">
      <div class="slide-item">
        <img
          class="slide-item__brand"
          alt="Brand"
          src="@/assets/brands/image-3.png"
        />
      </div>
    </Slide>
    <Slide :key="4">
      <div class="slide-item">
        <img
          class="slide-item__brand"
          alt="Brand"
          src="@/assets/brands/image-4.png"
        />
      </div>
    </Slide>
    <Slide :key="5">
      <div class="slide-item">
        <img
          class="slide-item__brand"
          alt="Brand"
          src="@/assets/brands/image-5.png"
        />
      </div>
    </Slide>
    <Slide :key="6">
      <div class="slide-item">
        <img
          class="slide-item__brand"
          alt="Brand"
          src="@/assets/brands/image-6.png"
        />
      </div>
    </Slide>
    <Slide :key="7">
      <div class="slide-item">
        <img
          class="slide-item__brand"
          alt="Brand"
          src="@/assets/brands/image-7.png"
        />
      </div>
    </Slide>
    <Slide :key="8">
      <div class="slide-item">
        <img
          class="slide-item__brand"
          alt="Brand"
          src="@/assets/brands/image-8.png"
        />
      </div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<style scoped lang="scss">
.slide-item {
  background-color: white;
  padding: 10px 1.5rem;
  width: 160px;

  &__brand {
    width: 100%;
    height: 67px;
  }
}
</style>
