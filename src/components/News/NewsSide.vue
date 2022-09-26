<script setup lang="ts">
const props = defineProps<{
  image: string;
  link: string;
}>();

const imagePath = new URL(`../../${props.image}`, import.meta.url).href;
</script>

<template>
  <article class="news-side" :style="{ backgroundImage: `url(${imagePath})` }">
    <div class="background">
      <div class="news-side__caption">
        <slot name="caption" />
      </div>

      <router-link :to="{ path: link }"
        ><ui-button outlined>Подробнее</ui-button></router-link
      >
    </div>
  </article>
</template>

<style lang="scss" scoped>
@use "@/styles/vars";
.news-side {
  background-size: cover;

  &__caption {
    width: 70%;
    margin-bottom: 80px;

    font-size: 30px;
    font-weight: 700;
    line-height: 1.2;
    color: white;

    @media (min-width: vars.$desktop) {
      width: 40%;
    }
  }

  .mdc-button--outlined:not(:disabled) {
    border-color: white;
    color: white;
  }

  .background {
    background-color: #0b5290;
    clip-path: polygon(0 0, 85% 0, 65% 100%, 0 100%);
    padding: 40px;
    min-height: 340px;

    @media (min-width: vars.$desktop) {
      clip-path: polygon(0 0, 55% 0, 40% 100%, 0 100%);
    }
  }
}
</style>
