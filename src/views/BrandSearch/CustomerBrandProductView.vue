<script setup lang="ts">
const productsDataBody = [
  { field: "brand" },
  { field: "articul" },
  { field: "details" },
  { slot: "actions" },
];
const productsDataHead = [
  { value: "Производитель" },
  { value: "Артикул" },
  { value: "Данные" },
  { value: "" },
];
const brandsData = [
  {
    brand: "GENUINE PART",
    articul: "15110RAAA01",
    details: "HOLDERSETPUMP",
  },
  {
    brand: "GENUINE PART",
    articul: "15110RAAA01",
    details: "HOLDERSETPUMP",
  },
];
</script>

<template>
  <main class="container-fluid py-5">
    <h1 class="mb-5">Оригинальный каталог</h1>

    <h2 class="mb-5">
      <RouterLink to="/search-brand/honda" class="clear">
        <ui-icon class="vertical-align-middle">arrow_back</ui-icon> Honda ACCORD
        IX, Купе 3.5
      </RouterLink>
      <span class="small hint ms-2"
        ><ui-icon outlined class="vertical-align-middle"
          >directions_car</ui-icon
        >
        Добавить в гараж</span
      >
    </h2>

    <h3 class="mb-4">Выбрать производителя</h3>

    <div class="col-12 col-xl-9">
      <ui-table
        class="mdc-data-table--last-select"
        fullwidth
        :data="brandsData"
        :thead="productsDataHead"
        :tbody="productsDataBody"
      >
        <template #actions>
          <ui-icon class="hint">camera_alt</ui-icon>
          <ui-icon class="hint ms-2">link</ui-icon>
        </template>
      </ui-table>
    </div>
  </main>
</template>
