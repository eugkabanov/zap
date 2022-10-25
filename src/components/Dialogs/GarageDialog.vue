<script setup lang="ts">
import CustomSelect from "@/components/CustomSelect.vue";
</script>

<template>
  <ui-dialog-title></ui-dialog-title>
  <ui-dialog-content class="py-4">
    <div class="row align-items-center">
      <div class="col-3">Товар</div>
      <div class="col offset-1">
        <div class="bold">
          Шина зимняя 245/60R18 109T XL Hakkapeliitta 10p SUV TL (шип.)
        </div>
      </div>
    </div>
    <div class="row align-items-center mt-3">
      <div class="col-3">Автомобиль</div>
      <div class="col offset-1">
        <CustomSelect
          outlined
          fullwidth
          value
          :options="[{ value: 1, label: 'AUDI' }]"
        />
      </div>
    </div>

    <div class="mt-4 text-center">
      <ui-button raised>Добавить</ui-button>
    </div>
  </ui-dialog-content>
</template>
