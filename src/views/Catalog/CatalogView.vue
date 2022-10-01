<script setup lang="ts">
import CatalogLayout from "../../components/Layout/CatalogLayout.vue";
</script>

<template>
  <CatalogLayout>
    <template #aside>
      <div :class="$tt('headline2')" class="mb-5">Каталог</div>
      <div>
        <!-- aside content -->
      </div>
    </template>
    <template #main>
      <div class="mb-4">
        <span :class="$tt('headline1')">Шины</span>
        <span :class="$tt('body2')" class="ms-2 hint">250 226 товаров</span>
      </div>
      <div>
        <!-- main content -->
      </div>
    </template>
  </CatalogLayout>
</template>
