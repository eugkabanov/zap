<template>
  <div class="mb-3">
    <div class="mb-2">Марка</div>
    <ui-select outlined fullwidth :options="[{ label: 'Модель' }]"></ui-select>
  </div>

  <div class="mb-3">
    <div class="mb-2">Год</div>
    <ui-select outlined fullwidth :options="[{ label: 'Год' }]"></ui-select>
  </div>

  <div class="mb-3">
    <div class="mb-2">Регион</div>
    <ui-select outlined fullwidth :options="[{ label: 'Регион' }]"></ui-select>
  </div>
  <div class="mb-3">
    <div class="mb-2">Дверей</div>
    <ui-select outlined fullwidth :options="[{ label: 'Дверей' }]"></ui-select>
  </div>
  <div class="mb-3">
    <div class="mb-2">Area</div>
    <ui-select outlined fullwidth :options="[{ label: 'Area' }]"></ui-select>
  </div>
  <div class="mb-3">
    <div class="mb-2">Коробка передач</div>
    <ui-select
      outlined
      fullwidth
      :options="[{ label: 'Коробка передач' }]"
    ></ui-select>
  </div>
  <div class="mb-3">
    <div class="mb-2">Тип коробки передач</div>
    <ui-select
      outlined
      fullwidth
      :options="[{ label: 'Тип коробки передач' }]"
    ></ui-select>
  </div>
  <div class="mb-3">
    <div class="mb-2">Country</div>
    <ui-select outlined fullwidth :options="[{ label: 'Country' }]"></ui-select>
  </div>
</template>
