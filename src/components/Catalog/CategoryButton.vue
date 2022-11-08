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
@use "@/styles/vars";

.category-button:not(:last-child) {
  border-bottom: 1px solid #d9d9de;
}

.category-dialog {
  .mdc-dialog__close {
    right: -5px !important;
  }

  .mdc-dialog__surface {
    overflow-x: hidden;
  }

  @media (min-width: vars.$desktop) {
    position: relative;

    .mdc-dialog,
    .mdc-dialog__scrim {
      left: 24.7vw;
    }

    .mdc-dialog__container {
      position: absolute;
      top: -110px;
      right: -1065px;
      height: 700px;
    }
    .mdc-dialog__surface {
      max-width: 1040px !important;
    }
  }
}
</style>
