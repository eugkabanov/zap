<script setup lang="ts">
import GarageAddCarDialog from "@/components/Dialogs/GarageAddCarDialog.vue";
import { ref } from "vue";
import BalanceBar from "../../components/Profile/BalanceBar.vue";

const parkDataBody = [
  { field: "year" },
  { field: "modification" },
  { field: "vin" },
  { field: "number" },
  { field: "owner" },
  { field: "ctc" },
  { field: "comments" },
  { slot: "actions" },
];
const parkDataHead = [
  { value: "Год" },
  { value: "Модификация" },
  { value: "VIN" },
  { value: "Гос. номер" },
  { value: "Владелец" },
  { value: "CTC" },
  { value: "Комментарии" },
  { value: "" },
];
const isAddCarOpen = ref(false);
const onAddCarClick = () => {
  isAddCarOpen.value = true;
};

const parkData = [
  {
    year: 2001,
    modification: "ATQ",
    vin: "waubh54b11n111054",
    number: "с423со",
    owner: "Иванов П.И.",
    ctc: "77АА123456",
    comments: "Текст комментария",
  },
];
</script>

<template>
  <main class="container-fluid pb-5">
    <BalanceBar class="ms-auto mt-2 mb-3" />
    <h1>Гараж</h1>

    <div class="mt-4 row align-items-center">
      <div class="col-auto mr-lg-3 bold large">AUDI A6/Avant</div>
      <div class="col-auto link">Список деталей</div>
      <div class="col-auto link">История заказов</div>
      <div class="col-auto link">Каталог</div>
    </div>

    <div class="mt-3">
      <ui-table
        fullwidth
        :data="parkData"
        :thead="parkDataHead"
        :tbody="parkDataBody"
      >
        <template #actions>
          <ui-icon class="hint">border_color</ui-icon>
          <ui-icon class="ms-3 hint">delete</ui-icon>
        </template>
      </ui-table>
    </div>

    <div class="mt-5">
      <ui-button @click="onAddCarClick" raised>Добавить автомобиль</ui-button>
    </div>
  </main>

  <ui-dialog v-model="isAddCarOpen" maskClosable sheet class="park-add-car">
    <GarageAddCarDialog />
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
