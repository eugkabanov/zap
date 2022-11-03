<script setup lang="ts">
import CustomSelect from "../CustomSelect.vue";
defineProps<{
  selectedViewOption: number;
  setSelectedViewOption: Function;
}>();

const sortingOptions = [
  {
    label: "По цене, сначала дешевые",
    value: "price",
  },
  {
    label: "По цене, сначала дорогие",
    value: "price",
  },
];
const viewOptions = [
  {
    icon: "view_list",
  },
  { icon: "view_module" },
];
</script>

<template>
  <div class="row g-3">
    <ui-form-field class="col-12 col-md-5"
      ><ui-textfield outlined fullwidth placeholder="Поиск">
        <template #after>
          <ui-textfield-icon trailing>search</ui-textfield-icon>
        </template>
      </ui-textfield>
    </ui-form-field>
    <ui-form-field class="col-8 col-md-5 ms-md-auto">
      <label class="me-3 d-none d-md-inline">Сортировка:</label>
      <CustomSelect outlined fullwidth :options="sortingOptions" />
    </ui-form-field>
    <div class="col-auto ms-auto ms-md-3">
      <ui-segmented-buttons
        :model-value="selectedViewOption"
        @update:model-value="setSelectedViewOption($event)"
        :items="viewOptions"
        single-select
      ></ui-segmented-buttons>
    </div>
  </div>
</template>
