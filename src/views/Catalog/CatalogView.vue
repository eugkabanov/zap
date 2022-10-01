<script setup lang="ts">
import CatalogLayout from "../../components/Layout/CatalogLayout.vue";
import CategoryButton from "../../components/Catalog/CategoryButton.vue";
</script>

<template>
  <CatalogLayout>
    <template #aside>
      <div :class="$tt('headline2')" class="mb-4">Каталог</div>
      <div>
        <CategoryButton
          href="/catalog/popular"
          caption="Популярные товары"
        ></CategoryButton>
        <CategoryButton caption="Масла"></CategoryButton>
        <CategoryButton caption="Шины"></CategoryButton>
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
