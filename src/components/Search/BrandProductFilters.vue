<script setup lang="ts">
import CustomCollapse from "../CustomControls/CustomCollapse.vue";
</script>

<template>
  <div class="mb-3">
    <div class="mb-2">Название узла, детали</div>
    <ui-textfield fullwidth outlined></ui-textfield>
  </div>

  <CustomCollapse>
    <template #title>Детали для ТО</template>
    <div class="ps-4">
      <RouterLink
        to="/search-brand/honda/accord/cupe"
        class="fw-400 d-block clear mb-3"
        >Фильтр масляный</RouterLink
      >
      <RouterLink
        to="/search-brand/honda/accord/cupe"
        class="fw-400 d-block clear mb-3"
        >Фильтр воздушный</RouterLink
      >
      <RouterLink
        to="/search-brand/honda/accord/cupe"
        class="fw-400 d-block clear mb-3"
        >Фильтр салонный</RouterLink
      >
      <RouterLink
        to="/search-brand/honda/accord/cupe"
        class="fw-400 d-block clear mb-3"
        >Свечи зажигания</RouterLink
      >
      <RouterLink
        to="/search-brand/honda/accord/cupe"
        class="fw-400 d-block clear mb-3"
        >Ремень поликлиновой</RouterLink
      >
      <RouterLink
        to="/search-brand/honda/accord/cupe"
        class="fw-400 d-block clear mb-3"
        >Термостат</RouterLink
      >
      <RouterLink
        to="/search-brand/honda/accord/cupe"
        class="fw-400 d-block clear mb-3"
        >Щетки стеклоочистителя</RouterLink
      >
      <RouterLink
        to="/search-brand/honda/accord/cupe"
        class="fw-400 d-block clear mb-3"
        >Насос системы охлаждения</RouterLink
      >
      <RouterLink
        to="/search-brand/honda/accord/cupe"
        class="fw-400 d-block clear mb-3"
        >Колодки тормозные</RouterLink
      >
    </div>
  </CustomCollapse>

  <CustomCollapse> <template #title>Двигатель</template> </CustomCollapse>
  <CustomCollapse> <template #title>Топливная</template> </CustomCollapse>
  <CustomCollapse> <template #title>Система</template> </CustomCollapse>
  <CustomCollapse> <template #title>Система</template> </CustomCollapse>
  <CustomCollapse> <template #title>Трансмиссия</template> </CustomCollapse>
  <CustomCollapse> <template #title>Ходовая</template> </CustomCollapse>
  <CustomCollapse> <template #title>Рулевое</template> </CustomCollapse>
  <CustomCollapse> <template #title>Тормозная</template> </CustomCollapse>
  <CustomCollapse>
    <template #title>Электрооборудование</template>
  </CustomCollapse>
  <CustomCollapse> <template #title>Отопление</template> </CustomCollapse>
  <CustomCollapse> <template #title>Детали</template> </CustomCollapse>
  <CustomCollapse> <template #title>Детали</template> </CustomCollapse>
</template>
