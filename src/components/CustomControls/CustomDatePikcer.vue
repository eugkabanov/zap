<script setup lang="ts">
import { ref } from "vue";

const selectedDate = ref<string>();

const onChange = (value: string) => {
  selectedDate.value = `с ${value}`;
};
</script>

<template>
  <ui-datepicker
    :model-value="selectedDate"
    @update:model-value="onChange($event)"
    class="custom-datepicker"
    outlined
    toggle
    fullwidth
  >
    <template #toggle
      ><ui-icon class="custom-datepicker__icon">event</ui-icon></template
    >
  </ui-datepicker>
</template>

<style lang="scss">
.custom-datepicker {
  height: 44px;
  max-width: 144px;

  .mdc-text-field__input {
    color: #76767a !important;
    font-size: 14px;
  }

  &.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused
    .mdc-notched-outline__leading,
  &.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused
    .mdc-notched-outline__notch,
  &.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused
    .mdc-notched-outline__trailing {
    border-color: #bfbfc3;
    border-width: 1px;
  }

  .mdc-text-field__icon--trailing {
    padding-left: 4px;
    padding-bottom: 6px;
  }

  &__icon {
    font-size: 18px;
  }
}
</style>
