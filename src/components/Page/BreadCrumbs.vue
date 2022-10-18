<script lang="ts" setup>
defineProps<{
  crumbs: { title: string; href: string }[];
}>();
</script>

<template>
  <div class="row g-0">
    <div
      v-for="(crumb, index) in crumbs"
      :key="index"
      class="col-auto ps-2 pe-3 crumb-item small"
    >
      <RouterLink class="clear" :to="crumb.href"
        ><span class="hint">
          {{ crumb.title }}
        </span></RouterLink
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.crumb-item {
  position: relative;

  &:first-child {
    padding-left: 0 !important;
  }
  &:not(:last-child):after {
    content: "/";
    position: absolute;
    right: 0;
  }
}
</style>
