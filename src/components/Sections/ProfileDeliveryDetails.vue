<script setup lang="ts">
import { ref } from "vue";
import AddAddressDialog from "@/components/Dialogs/AddAddressDialog.vue";

const isAddAddressOpen = ref(false);

const openShowAddress = () => (isAddAddressOpen.value = true);

const addressData = [
  {
    title: "Домашний",
    address: "г. Москва, ул. Ленина, 13а, кв. 20",
    workhours: [
      { start: "8-00", end: "19-00" },
      { start: "8-00", end: "19-00" },
      { start: "8-00", end: "19-00" },
      { start: "8-00", end: "19-00" },
      { start: "8-00", end: "19-00" },
      { start: "—" },
      { start: "—" },
    ],
    comments: "",
  },
];
const addressDataBody = [
  {
    slot: "select",
  },
  { field: "title" },
  { field: "address" },
  { slot: "workhours" },
  { field: "comments" },
  { slot: "actions" },
];
const addressDataHead = [
  { value: "" },
  { value: "Наименование" },
  { value: "Адрес" },
  { value: "Режим работы" },
  { value: "Комментарий" },
  { value: "" },
];
</script>

<template>
  <div class="large bold mb-4">Адрес по умолчанию</div>

  <ui-table
    fullwidth
    class="mdc-data-table--last-select"
    :data="addressData"
    :thead="addressDataHead"
    :tbody="addressDataBody"
  >
    <template #workhours="{ data }">
      <div style="width: 500px" class="row py-3">
        <div class="col-auto">
          <div class="bold">пн</div>
          <div>
            {{ data.workhours[0].start }}
          </div>
          <div>
            {{ data.workhours[0].end }}
          </div>
        </div>
        <div class="col-auto">
          <div class="bold">вт</div>
          <div>
            {{ data.workhours[1].start }}
          </div>
          <div>
            {{ data.workhours[1].end }}
          </div>
        </div>
        <div class="col-auto">
          <div class="bold">ср</div>
          <div>
            {{ data.workhours[2].start }}
          </div>
          <div>
            {{ data.workhours[2].end }}
          </div>
        </div>
        <div class="col-auto">
          <div class="bold">чт</div>
          <div>
            {{ data.workhours[3].start }}
          </div>
          <div>
            {{ data.workhours[3].end }}
          </div>
        </div>
        <div class="col-auto">
          <div class="bold">пт</div>
          <div>
            {{ data.workhours[4].start }}
          </div>
          <div>
            {{ data.workhours[4].end }}
          </div>
        </div>
        <div class="col-auto">
          <div class="bold">сб</div>
          <div>
            {{ data.workhours[5].start }}
          </div>
          <div>
            {{ data.workhours[5].end }}
          </div>
        </div>
        <div class="col-auto">
          <div class="bold">вс</div>
          <div>
            {{ data.workhours[6].start }}
          </div>
          <div>
            {{ data.workhours[6].end }}
          </div>
        </div>
      </div>
    </template>
    <template #select> <ui-radio /></template>
    <template #actions>
      <ui-icon class="hint">border_color</ui-icon>
      <ui-icon class="ms-3 hint">delete</ui-icon>
    </template>
  </ui-table>

  <div @click="openShowAddress" class="mt-5">
    <ui-button raised>Добавить адрес</ui-button>
  </div>

  <ui-dialog
    class="add-new-address"
    v-model="isAddAddressOpen"
    sheet
    maskClosable
  >
    <AddAddressDialog />
  </ui-dialog>
</template>
