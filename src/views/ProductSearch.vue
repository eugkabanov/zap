<script setup lang="ts">
import { ref } from "vue";
import ProductSearchFilters from "../components/Search/ProductSearchFilters.vue";

const isSearchFiltersOpen = ref(false);
const isSimilarShow = ref(false);

const onFilterClick = () => (isSimilarShow.value = true);

const searchData = [
  {
    brand: "NOKIAN",
    dealer: "Название поставщика ",
    count: "4 шт.",
    deadline: "3 дня",
    price: "5841 ₽",
    date: "Сегодня в 14:30",
  },
  {
    brand: "NOKIAN",
    dealer: "Название поставщика ",
    count: "4 шт.",
    deadline: "3 дня",
    price: "5841 ₽",
    date: "Сегодня в 14:30",
  },
];
const similarSearchData = [
  {
    brand: "NOKIAN",
    dealer: "Название поставщика ",
    count: "4 шт.",
    deadline: "3 дня",
    price: "5841 ₽",
    date: "Сегодня в 14:30",
  },
  {
    brand: "NOKIAN",
    dealer: "Название поставщика ",
    count: "4 шт.",
    deadline: "3 дня",
    price: "5841 ₽",
    date: "Сегодня в 14:30",
  },
];
</script>

<template>
  <main class="py-5 container-fluid">
    <h1 class="mb-5">
      <ui-icon-button class="d-xl-none" v-model="isSearchFiltersOpen"
        >menu_open</ui-icon-button
      >Артикул TS32701
      <span :class="$tt('body1')" class="ms-3 hint">найдено 2 товара</span>
    </h1>

    <div class="row">
      <div class="col-12 col-xl-8">
        <div class="mb-5">
          <ui-table
            fullwidth
            :data="searchData"
            :thead="[
              { value: 'Бренд' },
              { value: 'Поставщик' },
              { value: 'Количество' },
              { value: 'Срок' },
              { value: 'Цена' },
              { value: 'Отправка поставщику' },
              { value: '' },
              { value: '' },
            ]"
            :tbody="[
              { field: 'brand' },
              { field: 'dealer' },
              { field: 'count' },
              { field: 'deadline' },
              { field: 'price' },
              { field: 'date' },
              { slot: 'cart' },
              { slot: 'delivery' },
            ]"
          >
            <template #cart>
              <ui-icon class="hint" outlined> shopping_cart </ui-icon>
            </template>
            <template #delivery>
              <ui-icon class="hint" outlined> directions_car </ui-icon>
            </template>
          </ui-table>
        </div>
        <div v-if="isSimilarShow">
          <h2 class="mb-5">Аналоги других производителей</h2>
          <ui-tab-bar class="mb-4">
            <ui-tab min-width content-indicator>По цене</ui-tab>
            <ui-tab min-width content-indicator>По производителю</ui-tab>
          </ui-tab-bar>
          <ui-table
            fullwidth
            :data="similarSearchData"
            :thead="[
              { value: 'Бренд' },
              { value: 'Поставщик' },
              { value: 'Количество' },
              { value: 'Срок' },
              { value: 'Цена' },
              { value: 'Отправка поставщику' },
              { value: '' },
              { value: '' },
            ]"
            :tbody="[
              { field: 'brand' },
              { field: 'dealer' },
              { field: 'count' },
              { field: 'deadline' },
              { field: 'price' },
              { field: 'date' },
              { slot: 'cart' },
              { slot: 'delivery' },
            ]"
          >
            <template #cart>
              <ui-icon class="hint" outlined> shopping_cart </ui-icon>
            </template>
            <template #delivery>
              <ui-icon class="hint" outlined> directions_car </ui-icon>
            </template>
          </ui-table>
        </div>
      </div>

      <div class="d-none d-xl-block offset-1 col-3">
        <ProductSearchFilters @filter-click="onFilterClick" />
      </div>
    </div>
  </main>

  <ui-drawer type="modal" v-model="isSearchFiltersOpen">
    <ui-drawer-content class="p-4">
      <!-- drawer needs at lease one focusable element -->
      <div tabindex="1" />
      <ProductSearchFilters @filter-click="onFilterClick" />
    </ui-drawer-content>
  </ui-drawer>
</template>

<style scoped lang="scss">
.mdc-drawer--modal {
  position: fixed;
  left: 0;
  top: 0;
}
</style>
