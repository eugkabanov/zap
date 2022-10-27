<script setup lang="ts">
import CustomSelect from "../CustomSelect.vue";
</script>

<template>
  <div class="mb-3">
    <div class="mb-2">Марка</div>
    <CustomSelect
      outlined
      fullwidth
      :options="[{ label: 'Honda' }]"
    ></CustomSelect>
  </div>

  <div class="mb-3">
    <div class="mb-2">Модель</div>
    <CustomSelect
      outlined
      fullwidth
      :options="[{ label: 'Модель' }]"
    ></CustomSelect>
  </div>

  <div class="mb-3">
    <div class="mb-2">Год</div>
    <CustomSelect
      outlined
      fullwidth
      :options="[{ label: 'Год' }]"
    ></CustomSelect>
  </div>

  <div class="mb-3">
    <div class="mb-2">Регион</div>
    <CustomSelect
      outlined
      fullwidth
      :options="[{ label: 'Регион' }]"
    ></CustomSelect>
  </div>
  <div class="mb-3">
    <div class="mb-2">Дверей</div>
    <CustomSelect
      outlined
      fullwidth
      :options="[{ label: 'Дверей' }]"
    ></CustomSelect>
  </div>
  <div class="mb-3">
    <div class="mb-2">Area</div>
    <CustomSelect
      outlined
      fullwidth
      :options="[{ label: 'Area' }]"
    ></CustomSelect>
  </div>
  <div class="mb-3">
    <div class="mb-2">Коробка передач</div>
    <CustomSelect
      outlined
      fullwidth
      :options="[{ label: 'Коробка передач' }]"
    ></CustomSelect>
  </div>
  <div class="mb-3">
    <div class="mb-2">Тип коробки передач</div>
    <CustomSelect
      outlined
      fullwidth
      :options="[{ label: 'Тип коробки передач' }]"
    ></CustomSelect>
  </div>
  <div class="mb-3">
    <div class="mb-2">Country</div>
    <CustomSelect
      outlined
      fullwidth
      :options="[{ label: 'Country' }]"
    ></CustomSelect>
  </div>
</template>
