<script setup lang="ts">
import { ref } from "vue";
import VueSlider from "vue-3-slider-component";
import CustomSelect from "../CustomSelect.vue";

const daysRange = ref([0, 40]);
</script>

<template>
  <div class="bold large mb-5">Поиск</div>

  <div class="mb-3">
    <label class="d-block mb-2">Название</label>
    <ui-textfield outlined fullwidth />
  </div>
  <div class="mb-3">
    <label class="d-block mb-2">Регион</label>
    <CustomSelect outlined fullwidth />
  </div>
  <div class="mb-3">
    <VueSlider v-model="daysRange" max="70" />
    <div class="row justify-content-between">
      <div class="col-auto hint small">0 д.</div>
      <div class="col-auto hint small">70 д.</div>
    </div>
  </div>
  <div class="mb-3">
    <ui-form-field class="mb-1">
      <ui-checkbox input-id="filter-1" />
      <label for="filter-1">Центральный склад</label>
    </ui-form-field>
    <ui-form-field class="mb-1">
      <ui-checkbox input-id="filter-2" />
      <label for="filter-2">Официальный дилер</label>
    </ui-form-field>
    <ui-form-field class="mb-1">
      <ui-checkbox input-id="filter-3" />
      <label for="filter-3">Остерегайтесь подделок</label>
    </ui-form-field>
    <ui-form-field class="mb-1">
      <ui-checkbox input-id="filter-4" />
      <label for="filter-4">Безвозвратный</label>
    </ui-form-field>
  </div>
  <div class="mb-3">
    <ui-button class="col-12" outlined>Показать отключенных</ui-button>
  </div>

  <h3 class="mt-5 mb-4">Настройки</h3>

  <ui-form-field class="mb-1">
    <ui-checkbox input-id="filter-5" />
    <label for="filter-5">Автоматически отключать подделки</label>
  </ui-form-field>
  <ui-form-field class="mb-1">
    <ui-checkbox input-id="filter-6" />
    <label for="filter-6">Автоматически отключать безвозратные</label>
  </ui-form-field>
</template>
