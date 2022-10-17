<script setup lang="ts">
import SearchFormWithIcon from "./SearchFormWithIcon.vue";
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
      <ui-select outlined fullwidth :options="[{ label: 'Гараж' }]"></ui-select>
    </div>
  </div>
</template>
