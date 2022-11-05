<script setup lang="ts">
import TopUpBalanceDialog from "@/components/Dialogs/TopUpBalanceDialog.vue";
import BalanceWarnDialog from "@/components/Dialogs/BalanceWarnDialog.vue";
import { onMounted, ref } from "vue";
import LineBreak from "../../components/LineBreak.vue";
import BalanceBar from "../../components/Profile/BalanceBar.vue";
import CustomDatePikcer from "@/components/CustomControls/CustomDatePikcer.vue";

const balanceDataBody = [
  { field: "date" },
  { field: "reason" },
  { field: "debit", align: "center" },
  { field: "credit", align: "center" },
  { field: "balance", align: "center" },
  { field: "comments" },
  { field: "documents" },
];
const balanceDataHead = [
  { value: "Дата" },
  { value: "Основание" },
  { value: "Дебит, ₽" },
  { value: "Кредит, ₽" },
  { value: "Баланс" },
  { value: "Комментарии" },
  { value: "Документы" },
];
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

const isWarningOpen = ref(false);
const isTopUpBalanceOpen = ref(false);
const onTopUpBalanceOpen = () => (isTopUpBalanceOpen.value = true);

onMounted(() => {
  isWarningOpen.value = true;
});
</script>

<template>
  <main class="container-fluid pb-5">
    <div class="row align-items-center">
      <div class="row align-items-center col-xl-5 pt-5">
        <div class="col-auto">
          <h1>Баланс</h1>
        </div>
        <div class="col-auto ms-auto">
          <CustomDatePikcer />
        </div>
        <div class="col-auto pe-0">
          <CustomDatePikcer />
        </div>
      </div>
      <div class="col-12 col-md-6 ms-auto">
        <ui-alert state="warning" closable
          ><div class="row">
            <div class="col-auto">Внимание! Необходимо оплатить заказ</div>
            <div class="col text-center">
              <RouterLink to="/">
                Перейти к заказу
                <ui-icon class="vertical-align-middle"
                  >chevron_right</ui-icon
                ></RouterLink
              >
            </div>
          </div></ui-alert
        >
      </div>
    </div>

    <div class="row mt-3">
      <div class="row gy-3">
        <div class="col-12 col-xl-5">
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
        <div class="col-12 col-xl-7">
          <ui-table
            fullwidth
            :data="balanceData"
            :thead="balanceDataHead"
            :tbody="balanceDataBody"
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

  <ui-dialog v-model="isTopUpBalanceOpen" sheet class="topup-dialog">
    <TopUpBalanceDialog />
  </ui-dialog>

  <ui-dialog
    v-model="isWarningOpen"
    maskClosable
    sheet
    class="balance-warning-dialog"
  >
    <BalanceWarnDialog />
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

.topup-dialog .mdc-dialog__surface,
.balance-warning-dialog .mdc-dialog__surface {
  @media (min-width: vars.$desktop) {
    min-width: 480px !important;
    padding-bottom: 40px;
    padding-top: 0;
  }
}
</style>
