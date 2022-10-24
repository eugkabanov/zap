<script setup lang="ts">
import SearchFormWithIcon from "./SearchFormWithIcon.vue";
import CustomSelect from "../CustomSelect.vue";
</script>

<template>
  <div class="aside-search float-block">
    <div class="mb-4">
      <SearchFormWithIcon
        :submit-handler="() => {}"
        placeholder="По VIN-коду автомобиля или Frame номеру"
      />
    </div>

    <div>
      <CustomSelect
        outlined
        fullwidth
        :options="[{ label: 'Гараж' }]"
      ></CustomSelect>
    </div>
  </div>
</template>
