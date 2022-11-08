<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  caption: string;
  href?: string;
}>();

const isOpen = ref(false);
const openCategoryDrawer = () => (isOpen.value = true);
</script>

<template>
  <RouterLink v-if="href" :to="href" class="clear category-button">
    <div class="row g-0 justify-content-between align-items-center">
      <div :class="$tt('body1')" class="col-10">{{ caption }}</div>
      <ui-icon class="col-auto">keyboard_arrow_right</ui-icon>
    </div>
  </RouterLink>
  <div v-else @click="openCategoryDrawer" class="link clear category-button">
    <div class="row g-0 justify-content-between align-items-center">
      <div :class="$tt('body1')" class="col-10">{{ caption }}</div>
      <ui-icon class="col-auto">keyboard_arrow_right</ui-icon>
    </div>
  </div>

  <ui-dialog class="category-dialog" v-model="isOpen" fullscreen sheet>
    <ui-dialog-content>
      <slot name="subCategory" />
    </ui-dialog-content>
  </ui-dialog>
</template>

<style scoped lang="scss">
@use "@/styles/vars";

.category-button {
  display: block;
  padding: 20px 0;
  @media (max-width: vars.$desktop) {
    padding: 10px 0;
  }
}
</style>

<style lang="scss">
.category-button:not(:last-child) {
  border-bottom: 1px solid #d9d9de;
}
.category-dialog .mdc-dialog__close {
  right: -5px !important;
}
</style>
