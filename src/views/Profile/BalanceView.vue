<script setup lang="ts">
import { ref } from "vue";
import LineBreak from "../../components/LineBreak.vue";

const balanceData = [
  {
    date: "10.08.2022",
    reason: "Зачисление по счету",
    debit: "10 000",
    credit: "10 000",
    balance: "286 000",
    comments: "Текст комментария",
    documents: "Документ 1",
  },
  {
    date: "10.08.2022",
    reason: "Зачисление по счету",
    debit: "10 000",
    credit: "10 000",
    balance: "286 000",
    comments: "Текст комментария",
    documents: "Документ 1",
  },
  {
    date: "10.08.2022",
    reason: "Зачисление по счету",
    debit: "10 000",
    credit: "10 000",
    balance: "286 000",
    comments: "Текст комментария",
    documents: "Документ 1",
  },
];

const isTopUpBalanceOpen = ref(false);
const onTopUpBalanceOpen = () => (isTopUpBalanceOpen.value = true);
</script>

<template>
  <main class="container-fluid py-5">
    <div class="row align-items-center col-xl-4">
      <div class="col-auto">
        <h1>Баланс</h1>
      </div>
      <div class="col">
        <ui-datepicker outlined toggle fullwidth>
          <template #toggle><ui-icon>event</ui-icon></template>
        </ui-datepicker>
      </div>
      <div class="col">
        <ui-datepicker outlined toggle fullwidth>
          <template #toggle><ui-icon>event</ui-icon></template>
        </ui-datepicker>
      </div>
    </div>

    <div class="row mt-4">
      <div class="row">
        <div class="col-12 col-xl-4">
          <div class="row mb-3">
            <div class="col-auto">
              <div class="bold">Баланс</div>
            </div>
            <div class="col dotted" />
            <div class="col-auto">
              <div class="bold">320 000 ₽</div>
            </div>
          </div>
          <div class="row mb-5">
            <div class="col-auto">
              <div class="bold">Деб. задолженность</div>
            </div>
            <div class="col dotted" />
            <div class="col-auto">
              <div class="bold">0,00 ₽</div>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-auto">
              <div>Заказано сегодня</div>
            </div>
            <div class="col dotted" />
            <div class="col-auto">
              <div>0,00 ₽</div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-auto">
              <div>В работе</div>
            </div>
            <div class="col dotted" />
            <div class="col-auto">
              <div>0,00 ₽</div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-auto">
              <div>Закуплено</div>
            </div>
            <div class="col dotted" />
            <div class="col-auto">
              <div>0,00 ₽</div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-auto">
              <div>На складе в Москве</div>
            </div>
            <div class="col dotted" />
            <div class="col-auto">
              <div>0,00 ₽</div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-auto">
              <div>Поступило в Д/С</div>
            </div>
            <div class="col dotted" />
            <div class="col-auto">
              <div>0,00 ₽</div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-auto">
              <div>Куплено товара</div>
            </div>
            <div class="col dotted" />
            <div class="col-auto">
              <div>0,00 ₽</div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-auto">
              <div>Возвраты</div>
            </div>
            <div class="col dotted" />
            <div class="col-auto">
              <div>0,00 ₽</div>
            </div>
          </div>

          <ui-button outlined class="mt-3 small">Показать возвраты</ui-button>

          <LineBreak class="my-4" />

          <ui-button v-on:click="onTopUpBalanceOpen" raised
            >Пополнить баланс</ui-button
          >
        </div>
        <div class="col-12 col-xl-8">
          <ui-table
            fullwidth
            :data="balanceData"
            :thead="[
              { value: 'Дата' },
              { value: 'Основание' },
              { value: 'Дебит, ₽' },
              { value: 'Кредит, ₽' },
              { value: 'Баланс' },
              { value: 'Комментарии' },
              { value: 'Документы' },
            ]"
            :tbody="[
              { field: 'date' },
              { field: 'reason' },
              { field: 'debit', align: 'center' },
              { field: 'credit', align: 'center' },
              { field: 'balance', align: 'center' },
              { field: 'comments' },
              { field: 'documents' },
            ]"
          >
          </ui-table>

          <div class="row mt-3">
            <div class="col-auto ms-auto">
              <ui-button raised>Экспорт (0)</ui-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <ui-dialog v-model="isTopUpBalanceOpen" maskClosable class="topup-dialog">
    <ui-dialog-content>
      <div class="text-center bold large mb-4">Пополнить баланс</div>

      <div class="mb-4">
        <label for="topup-total" class="d-block mb-2">Сумма пополнения</label>
        <ui-textfield id="topup-total" outlined fullwidth />
      </div>

      <div class="mb-4">Способ оплаты</div>

      <ui-tab-bar>
        <ui-tab> Банковская карта </ui-tab>
        <ui-tab> Счет </ui-tab>
      </ui-tab-bar>

      <div class="mt-4">Выберите карту иди добавьте новую</div>

      <div class="mt-2 card-item row align-items-center">
        <div class="col-auto">
          <ui-radio />
        </div>

        <div class="col-auto">**** 5863</div>

        <div class="col-auto ms-auto">
          <ui-icon>border_color</ui-icon>
          <ui-icon class="ms-3">delete</ui-icon>
        </div>
      </div>
      <div class="mt-2 card-item row align-items-center">
        <div class="col-auto">
          <ui-radio />
        </div>

        <div class="col-auto">Добавить новую</div>
      </div>

      <div class="mt-4">
        <label for="email" class="d-block mb-2">Получить чек на e-mail</label>
        <ui-textfield id="email" outlined fullwidth />
      </div>

      <div class="mt-4">
        <div class="row">
          <ui-button raised>Оплатить 10 000 ₽</ui-button>
        </div>
      </div>
    </ui-dialog-content>
  </ui-dialog>
</template>

<style lang="scss">
@use "@/styles//vars";

.topup-dialog {
  .card-item {
    padding: 14px 22px;
    background-color: #f5f5f7;
  }
}

.topup-dialog .mdc-dialog__surface {
  @media (min-width: vars.$desktop) {
    min-width: 480px !important;
    padding: 40px;
    padding-top: 0;
  }
}
</style>
