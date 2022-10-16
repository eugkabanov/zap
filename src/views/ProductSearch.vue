<script setup lang="ts">
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
      Артикул TS32701
      <span :class="$tt('body1')" class="ms-3 hint">найдено 2 товара</span>
    </h1>

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

    <div>
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
  </main>
</template>
