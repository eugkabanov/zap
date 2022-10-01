<script setup lang="ts">
defineProps<{
  caption: string;
  href?: string;
}>();
</script>

<template>
  <RouterLink v-if="href" :to="href" class="category-button">
    <div class="row g-0 justify-content-between align-items-center">
      <div :class="$tt('body1')" class="col-auto">{{ caption }}</div>
      <ui-icon class="col-auto">keyboard_arrow_right</ui-icon>
    </div>
  </RouterLink>
  <div v-else class="category-button">
    <div class="row g-0 justify-content-between align-items-center">
      <div :class="$tt('body1')" class="col-auto">{{ caption }}</div>
      <ui-icon class="col-auto">keyboard_arrow_right</ui-icon>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/styles/vars";

.category-button {
  display: block;
  color: black;
  padding: 20px 0;
  @media (max-width: vars.$desktop) {
    padding: 10px 0;
  }

  &:hover {
    color: vars.$primaryColor;
    cursor: pointer;
  }
}
</style>

<style lang="scss">
.category-button:not(:last-child) {
  border-bottom: 1px solid #d9d9de;
}
</style>
