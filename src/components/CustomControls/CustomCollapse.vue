<script setup lang="ts"></script>

<template>
  <ui-collapse class="filter-item" with-icon ripple>
    <template #toggle><slot name="title" /></template>

    <slot name="default" />
  </ui-collapse>
</template>

<style scoped lang="scss">
.filter-item {
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #d9d9de;

  &:last-child {
    border-bottom: unset;
  }
}
</style>

<style lang="scss">
.mdc-collapse__title {
  width: 100%;
}
</style>
