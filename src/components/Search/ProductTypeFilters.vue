<script setup lang="ts">
import CustomSelect from "../CustomSelect.vue";
</script>

<template>
  <div class="mb-3">
    <div style="margin-bottom: 12px">Марка</div>
    <CustomSelect
      class="thin"
      outlined
      fullwidth
      :options="[{ label: 'Honda' }]"
    ></CustomSelect>
  </div>

  <div class="mb-3">
    <div style="margin-bottom: 12px">Модель</div>
    <CustomSelect
      class="thin"
      outlined
      fullwidth
      :options="[{ label: 'Hakkapeliitta' }]"
    ></CustomSelect>
  </div>

  <div class="mb-3">
    <div style="margin-bottom: 12px">Год</div>
    <CustomSelect
      class="thin"
      outlined
      fullwidth
      :options="[{ label: '2012' }]"
    ></CustomSelect>
  </div>

  <div class="mb-3">
    <div style="margin-bottom: 12px">Регион</div>
    <CustomSelect
      class="thin"
      outlined
      fullwidth
      :options="[{ label: 'Корея' }]"
    ></CustomSelect>
  </div>
  <div class="mb-3">
    <div style="margin-bottom: 12px">Дверей</div>
    <CustomSelect
      class="thin"
      outlined
      fullwidth
      :options="[{ label: '4' }]"
    ></CustomSelect>
  </div>
  <div class="mb-3">
    <div style="margin-bottom: 12px">Area</div>
    <CustomSelect
      class="thin"
      outlined
      fullwidth
      :options="[{ label: '300' }]"
    ></CustomSelect>
  </div>
  <div class="mb-3">
    <div style="margin-bottom: 12px">Коробка передач</div>
    <CustomSelect
      class="thin"
      outlined
      fullwidth
      :options="[{ label: 'Автомат' }]"
    ></CustomSelect>
  </div>
  <div class="mb-3">
    <div style="margin-bottom: 12px">Тип коробки передач</div>
    <CustomSelect
      class="thin"
      outlined
      fullwidth
      :options="[{ label: 'Автомат' }]"
    ></CustomSelect>
  </div>
  <div class="mb-3">
    <div style="margin-bottom: 12px">Country</div>
    <CustomSelect
      class="thin"
      outlined
      fullwidth
      :options="[{ label: 'Россия' }]"
    ></CustomSelect>
  </div>
</template>
