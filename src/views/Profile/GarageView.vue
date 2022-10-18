<script setup lang="ts">
import { ref } from "vue";
import BalanceBar from "../../components/Profile/BalanceBar.vue";

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

    <div class="mt-4 row">
      <div class="col-auto mr-lg-3">AUDI A6/Avant</div>
      <div class="col-auto link">Список деталей</div>
      <div class="col-auto link">История заказов</div>
      <div class="col-auto link">Каталог</div>
    </div>

    <div class="mt-3">
      <ui-table
        fullwidth
        :data="parkData"
        :thead="[
          { value: 'Год' },
          { value: 'Модификация' },
          { value: 'VIN' },
          { value: 'Гос. номер' },
          { value: 'Владелец' },
          { value: 'CTC' },
          { value: 'Комментарии' },
          { value: '' },
        ]"
        :tbody="[
          { field: 'year' },
          { field: 'modification' },
          { field: 'vin' },
          { field: 'number' },
          { field: 'owner' },
          { field: 'ctc' },
          { field: 'comments' },
          { slot: 'actions' },
        ]"
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
    <ui-dialog-title class="mb-4">
      <div class="bold large">Гараж</div>
    </ui-dialog-title>

    <ui-dialog-content>
      <div class="mb-3 row align-items-center">
        <label class="col-3">Марка</label>
        <div class="col-8 offset-1">
          <ui-textfield outlined fullwidth />
        </div>
      </div>
      <div class="mb-3 row align-items-center">
        <label class="col-3">Название</label>
        <div class="col-8 offset-1">
          <ui-textfield outlined fullwidth />
        </div>
      </div>
      <div class="mb-3 row align-items-center">
        <label class="col-3">Модель</label>
        <div class="col-8 offset-1">
          <ui-textfield outlined fullwidth />
        </div>
      </div>
      <div class="mb-3 row align-items-center">
        <label class="col-3">Год</label>
        <div class="col-8 offset-1">
          <ui-textfield outlined fullwidth />
        </div>
      </div>
      <div class="mb-3 row align-items-center">
        <label class="col-3">Модификация</label>
        <div class="col-8 offset-1">
          <ui-textfield outlined fullwidth />
        </div>
      </div>
      <div class="mb-3 row align-items-center">
        <label class="col-3">Vin/Frame</label>
        <div class="col-8 offset-1">
          <ui-textfield outlined fullwidth />
        </div>
      </div>
      <div class="mb-3 row align-items-center">
        <label class="col-3">Гос. номер</label>
        <div class="col-8 offset-1">
          <ui-textfield outlined fullwidth />
        </div>
      </div>
      <div class="mb-3 row align-items-center">
        <label class="col-3"
          >СТС
          <ui-icon
            v-tooltip="'Укажите СТС и можете оплачивать штрафы'"
            aria-describedby="tooltip"
            :dark="false"
          >
            contact_support
          </ui-icon></label
        >
        <div class="col-8 offset-1">
          <ui-textfield outlined fullwidth />
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-3">Владелец</label>
        <div class="col-8 offset-1">
          <div>
            <ui-textfield outlined fullwidth placeholder="Имя" />
          </div>
          <div class="mt-3">
            <ui-textfield outlined fullwidth placeholder="E-mail" />
          </div>
          <div class="mt-3">
            <ui-textfield outlined fullwidth placeholder="Телефон" />
          </div>
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-3">Комментарии</label>
        <div class="col-8 offset-1">
          <ui-textfield outlined fullwidth input-type="textarea" rows="4" />
        </div>
      </div>

      <div class="mt-4 text-center">
        <ui-button raised>Сохранить</ui-button>
      </div>
    </ui-dialog-content>
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
