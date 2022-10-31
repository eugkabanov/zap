<script setup lang="ts">
import AddCarDialog from "@/components/Dialogs/AddCarDialog.vue";
import { ref } from "vue";
import BalanceBar from "../../components/Profile/BalanceBar.vue";

const webServicesBody = [
  { slot: "radio" },
  { field: "address" },
  { field: "status" },
  { field: "data" },
  { field: "comments" },
  { slot: "actions" },
];
const webServicesHeader = [
  { value: "" },
  { value: "IP-адрес" },
  { value: "Статус" },
  { value: "Дата подключения" },
  { value: "Комментарий" },
  { value: "" },
];
const selectedRow = ref(0);
const isAddCarOpen = ref(false);
const onAddCarClick = () => {
  isAddCarOpen.value = true;
};

const webServicesData = [
  {
    address: "759.462.789.82",
    status: "Подключен",
    data: "25.08.2022, 15-38",
    comments: "Текст комментария",
  },
  {
    address: "759.462.789.82",
    status: "Подключен",
    data: "25.08.2022, 15-38",
    comments: "Текст комментария",
  },
  {
    address: "759.462.789.82",
    status: "Подключен",
    data: "25.08.2022, 15-38",
    comments: "Текст комментария",
  },
];
</script>

<template>
  <main class="container-fluid pb-5">
    <div class="row">
      <h1 class="col-auto mt-5">Web-сервисы</h1>
      <div class="col-auto ms-auto">
        <BalanceBar class="mt-2 mb-3" />
      </div>
    </div>

    <div class="mt-4 bold large">IP-адрес</div>

    <div class="mt-3 col-xl-7">
      <ui-table
        class="mdc-data-table--last-select"
        fullwidth
        :data="webServicesData"
        :thead="webServicesHeader"
        :tbody="webServicesBody"
      >
        <template #actions>
          <ui-icon class="hint">link_off</ui-icon>
        </template>
        <template #radio>
          <ui-radio v-model="selectedRow" />
        </template>
      </ui-table>
    </div>

    <div class="mt-5">
      <ui-button @click="onAddCarClick" raised>Добавить IP-адрес</ui-button>
    </div>
  </main>

  <ui-dialog v-model="isAddCarOpen" maskClosable sheet class="park-add-car">
    <AddCarDialog />
  </ui-dialog>
</template>

<style lang="scss">
@use "@/styles//vars";
.park-add-car .mdc-dialog__surface {
  @media (min-width: vars.$desktop) {
    min-width: 530px !important;
  }
}
</style>
