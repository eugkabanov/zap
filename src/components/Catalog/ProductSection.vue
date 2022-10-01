<script setup lang="ts">
defineProps<{
  title: string;
  href: string;
}>();
</script>

<template>
  <div class="row justify-content-between mb-4">
    <div :class="$tt('headline3')" class="col-auto">{{ title }}</div>
    <div class="col-auto">
      <RouterLink :to="href"
        ><div :class="$tt('body1')">
          В раздел <ui-icon size="18" class="ms-2">east</ui-icon>
        </div></RouterLink
      >
    </div>
  </div>

  <slot name="products" />
</template>
