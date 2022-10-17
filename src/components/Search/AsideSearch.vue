<script setup lang="ts">
import SearchFormWithIcon from "./SearchFormWithIcon.vue";
</script>

<template>
  <div class="aside-search">
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

<style scoped lang="scss">
.aside-search {
  padding: 40px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
}
</style>
