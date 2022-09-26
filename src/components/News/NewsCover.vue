<script setup lang="ts">
const props = defineProps<{
  image: string;
  link: string;
}>();

const imagePath = new URL(`../../${props.image}`, import.meta.url).href;
</script>

<template>
  <router-link :to="{ path: link }">
    <article
      class="news-side"
      :style="{ backgroundImage: `url(${imagePath})` }"
    >
      <div class="background">
        <div class="news-side__caption">
          <slot name="caption" />
        </div>
      </div>
    </article>
  </router-link>
</template>

<style lang="scss" scoped>
@use "@/styles/vars";

.news-side {
  height: 100%;
  min-height: 340px;
  background-size: cover;
  padding-top: 30px;

  &__caption {
    width: 90%;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.2;
    color: white;

    @media (min-width: vars.$desktop) {
      width: 40%;
    }
  }

  .background {
    background-color: rgba($color: #08234b, $alpha: 0.85);
    clip-path: polygon(0 0, 95% 0, 80% 100%, 0 100%);
    padding: 30px 40px;

    @media (min-width: vars.$desktop) {
      clip-path: polygon(0 0, 57% 0, 48% 100%, 0 100%);
    }
  }
}
</style>
