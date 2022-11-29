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
    </div>
  </CustomCollapse>
</template>
