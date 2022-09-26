<script setup lang="ts">
const props = defineProps<{
  caption: string;
  image: string;
  link: string;
}>();

const imagePath = new URL(`../../${props.image}`, import.meta.url).href;
</script>

<template>
  <article class="news-side" :style="{ backgroundImage: `url(${imagePath})` }">
    <div class="background">
      <div class="news-side__caption">
        <h3>{{ caption }}</h3>
      </div>

      <router-link :to="{ path: link }"
        ><ui-button outlined>Подробнее</ui-button></router-link
      >
    </div>
  </article>
</template>

<style lang="scss" scoped>
.news-side {
  min-height: 340px;
  background-size: cover;

  &__caption {
    width: 40%;
    margin-bottom: 80px;

    h3 {
      font-size: 30px;
      font-weight: 700;
      line-height: 1.2;
    }
  }

  .mdc-button--outlined:not(:disabled) {
    border-color: white;
    color: white;
  }

  .background {
    background-color: #0b5290;
    clip-path: polygon(0 0, 55% 0, 40% 100%, 0 100%);
    padding: 40px;
  }
}
</style>
