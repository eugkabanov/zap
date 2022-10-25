<script setup lang="ts">
import { ref } from "vue";
import ProductTypeFilters from "../../components/Search/ProductTypeFilters.vue";

const productsDataBody = [
  { field: "title" },
  { field: "engineType" },
  { field: "bodyType" },
  { field: "fuelType" },
  { field: "engineCode" },
  { field: "power" },
  { field: "capacity" },
  { field: "year" },
  {
    slot: "choose",
  },
];
const productsDataHead = [
  { value: "Модификация" },
  { value: "Тип двигателя" },
  { value: "Тип кузова" },
  { value: "Тип топлива" },
  { value: "Код двигателя" },
  { value: "Мощность" },
  { value: "Объем двигателя" },
  { value: "Год выпуска" },
  { value: "" },
];
const isFiltersOpen = ref(false);

const productTypesData = [
  {
    title: "1.4 (199.AXNB)",
    engineType: "Бензиновый",
    bodyType: "Наклонная задняя ось",
    fuelType: "Бензин",
    engineCode: "199 А8.000",
    power: "155 л.с.",
    capacity: "1.4 л",
    year: "2007–2010",
  },
  {
    title: "1.4 (199.AXNB)",
    engineType: "Бензиновый",
    bodyType: "Наклонная задняя ось",
    fuelType: "Бензин",
    engineCode: "199 А8.000",
    power: "155 л.с.",
    capacity: "1.4 л",
    year: "2007–2010",
  },
];
</script>

<template>
  <main class="container-fluid py-5">
    <h1 class="mb-5">
      <ui-icon-button class="d-xl-none" v-model="isFiltersOpen"
        >menu_open</ui-icon-button
      >Оригинальный каталог
    </h1>

    <h2 class="mb-4">
      <RouterLink to="/search-brand/honda" class="clear">
        <ui-icon class="vertical-align-middle">arrow_back</ui-icon> Honda Accord
      </RouterLink>
    </h2>

    <div class="row">
      <div class="col-xl-3 d-none d-xl-block">
        <ProductTypeFilters />
      </div>

      <div class="col-12 col-xl-9">
        <ui-table
          class="mdc-data-table--last-select"
          fullwidth
          :data="productTypesData"
          :thead="productsDataHead"
          :tbody="productsDataBody"
        >
          <template #choose>
            <router-link
              to="/search-brand/honda/accord/cupe"
              style="height: 30px; padding: 0px 10px; font-size: 12px"
              v-button.outlined
              >Выбрать</router-link
            >
          </template>
        </ui-table>
      </div>
    </div>
  </main>

  <ui-drawer type="modal" v-model="isFiltersOpen">
    <ui-drawer-content class="p-4">
      <!-- drawer needs at lease one focusable element -->
      <div tabindex="1" />
      <ProductTypeFilters />
    </ui-drawer-content>
  </ui-drawer>
</template>

<style scoped lang="scss">
@use "@/styles/vars";

.mdc-drawer--modal {
  position: fixed;
  left: 0;
  top: 0;
}
</style>
