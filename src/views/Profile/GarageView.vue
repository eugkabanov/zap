<script setup lang="ts">
const parkData = [
  {
    year: 2001,
    modification: "ATQ",
    vin: "waubh54b11n111054",
    number: "с423со",
    owner: "Иванов П.И.",
    ctc: "77АА123456",
    comments: "Текст комментария",
  },
];
</script>

<template>
  <main class="container-fluid py-5">
    <h1>Гараж</h1>

    <div class="mt-4 row">
      <div class="col-auto mr-lg-3">AUDI A6/Avant</div>
      <div class="col-auto link">Список деталей</div>
      <div class="col-auto link">История заказов</div>
      <div class="col-auto link">Каталог</div>
    </div>

    <div class="mt-3">
      <ui-table
        fullwidth
        :data="parkData"
        :thead="[
          { value: 'Год' },
          { value: 'Модификация' },
          { value: 'VIN' },
          { value: 'Гос. номер' },
          { value: 'Владелец' },
          { value: 'CTC' },
          { value: 'Комментарии' },
          { value: '' },
        ]"
        :tbody="[
          { field: 'year' },
          { field: 'modification' },
          { field: 'vin' },
          { field: 'number' },
          { field: 'owner' },
          { field: 'ctc' },
          { field: 'comments' },
          { slot: 'actions' },
        ]"
      >
        <template #actions>
          <ui-icon class="hint">border_color</ui-icon>
          <ui-icon class="ms-3 hint">delete</ui-icon>
        </template>
      </ui-table>
    </div>

    <div class="mt-5">
      <ui-button raised>Добавить автомобиль</ui-button>
    </div>
  </main>
</template>
