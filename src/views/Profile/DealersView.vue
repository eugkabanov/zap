<script setup lang="ts">
import { ref } from "vue";
import DealersFilters from "../../components/Profile/DealersFilters.vue";
import BalanceBar from "../../components/Profile/BalanceBar.vue";

const isFiltersOpen = ref(false);

const dealersData = [
  {
    title: "RYTSON DW9Z351269",
    time: "4 дня",
    progress: "88",
    info: "",
  },
  {
    title: "RYTSON DW9Z351269",
    time: "4 дня",
    progress: "88",
    info: "",
  },
  {
    title: "RYTSON DW9Z351269",
    time: "4 дня",
    progress: "88",
    info: "",
  },
];
</script>

<template>
  <div class="container-fluid pb-5">
    <BalanceBar class="ms-auto mt-2 mb-3" />
    <h1 class="mb-5">
      <ui-icon-button class="d-xl-none me-2" v-model="isFiltersOpen"
        >menu_open</ui-icon-button
      >
      Поставщики
    </h1>

    <div class="row">
      <aside class="d-none d-xl-block col-xl-3">
        <DealersFilters />
      </aside>

      <div class="offset-xl-1 col-12 col-xl-8 dark">
        <ui-table
          class="mdc-data-table--last-select"
          fullwidth
          :data="dealersData"
          :thead="[
            { value: 'Название' },
            { value: 'Срок' },
            { value: 'Исполнение (%)' },
            { value: 'Информация' },
            {
              slot: 'th-select',
              columnId: 'select',
            },
          ]"
          :tbody="[
            { field: 'title' },
            { field: 'time' },
            { field: 'progress', align: 'center' },
            { field: 'info' },
            {
              slot: 'select',
            },
          ]"
        >
          <template #th-select> <ui-checkbox /></template>
          <template #select>
            <ui-checkbox />
          </template>
        </ui-table>

        <div class="mt-4 row justify-content-end">
          <div class="col-6 col-md-auto">
            <ui-button outlined disabled>Включить (0)</ui-button>
          </div>
          <div class="col-6 col-md-auto ms-md-2">
            <ui-button outlined disabled>Отключить (0)</ui-button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <ui-drawer type="modal" v-model="isFiltersOpen">
    <ui-drawer-content class="p-4">
      <div tabindex="1" />

      <DealersFilters />
    </ui-drawer-content>
  </ui-drawer>
</template>

<style scoped lang="scss">
.mdc-drawer--modal {
  position: fixed;
  left: 0;
  top: 0;
}
</style>
