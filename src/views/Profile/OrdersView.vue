<script setup lang="ts">
import { ref } from "vue";
import BalanceBar from "../../components/Profile/BalanceBar.vue";
import CustomSelect from "../../components/CustomSelect.vue";

const isStatsOpen = ref(false);
const onStatsClick = () => (isStatsOpen.value = true);

const ordersData = [
  {
    date: "25 июля 10:22",
    info: "101001914507",
    comments: "101001914507",
    catalog: "Filtron",
    articul: "OE6486",
    title: "Фильтр масл. OPEL ASTR...",
    ordered: "48",
    work: "12",
    rejected: "1",
    completed: "4",
    returned: "148",
    progress: "29",
    arrived: "75",
    sold: "22",
    status: "В обработке",
    dealer: "AUM\n0 дней",
    price: "355 ₽",
    total: "16 080 ₽",
  },
  {
    date: "25 июля 10:22",
    info: "101001914507",
    comments: "101001914507",
    catalog: "Filtron",
    articul: "OE6486",
    title: "Фильтр масл. OPEL ASTR...",
    ordered: "48",
    work: "12",
    rejected: "123",
    completed: "4",
    returned: "85",
    progress: "29",
    arrived: "75",
    sold: "22",
    status: "Заказано",
    dealer: "AUM\n0 дней",
    price: "355 ₽",
    total: "16 080 ₽",
  },
  {
    date: "25 июля 10:22",
    info: "101001914507",
    comments: "101001914507",
    catalog: "Filtron",
    articul: "OE6486",
    title: "Фильтр масл. OPEL ASTR...",
    ordered: "48",
    work: "12",
    rejected: "1",
    completed: "4",
    returned: "148",
    progress: "29",
    arrived: "75",
    sold: "22",
    status: "В обработке",
    dealer: "AUM\n0 дней",
    price: "355 ₽",
    total: "16 080 ₽",
  },
  {
    date: "25 июля 10:22",
    info: "101001914507",
    comments: "101001914507",
    catalog: "Filtron",
    articul: "OE6486",
    title: "Фильтр масл. OPEL ASTR...",
    ordered: "48",
    work: "12",
    rejected: "1",
    completed: "4",
    returned: "148",
    progress: "29",
    arrived: "75",
    sold: "22",
    status: "В обработке",
    dealer: "AUM\n0 дней",
    price: "355 ₽",
    total: "16 080 ₽",
  },
  {
    date: "25 июля 10:22",
    info: "101001914507",
    comments: "101001914507",
    catalog: "Filtron",
    articul: "OE6486",
    title: "Фильтр масл. OPEL ASTR...",
    ordered: "48",
    work: "12",
    rejected: "1",
    completed: "4",
    returned: "148",
    progress: "29",
    arrived: "75",
    sold: "22",
    status: "Пришло",
    dealer: "AUM\n0 дней",
    price: "355 ₽",
    total: "16 080 ₽",
  },
  {
    date: "25 июля 10:22",
    info: "101001914507",
    comments: "101001914507",
    catalog: "Filtron",
    articul: "OE6486",
    title: "Фильтр масл. OPEL ASTR...",
    ordered: "48",
    work: "12",
    rejected: "1",
    completed: "4",
    returned: "148",
    progress: "29",
    arrived: "75",
    sold: "22",
    status: "В обработке",
    dealer: "AUM\n0 дней",
    price: "355 ₽",
    total: "16 080 ₽",
  },
];
</script>

<template>
  <main class="container-fluid pb-5">
    <BalanceBar class="ms-auto mt-2 mb-3" />
    <h1 class="mb-5">Заказы</h1>

    <div class="row align-items-center gy-4 mb-4">
      <div class="col-auto">
        <ui-tab-bar>
          <ui-tab min-width content-indicator> Актуальные </ui-tab>
          <ui-tab min-width content-indicator> Архив </ui-tab>
        </ui-tab-bar>
      </div>

      <div class="col-auto ms-1">
        <ui-button @click="onStatsClick" outlined
          >Статистика по заказам</ui-button
        >
      </div>

      <div class="col-auto ms-md-auto">
        <ui-icon style="vertical-align: middle">compress</ui-icon>
        Свернуть
      </div>

      <div class="col-auto ms-md-1">
        <CustomSelect outlined :options="[{ value: 1, label: '30' }]" />
      </div>
    </div>

    <div class="row gy-3 mb-3">
      <div class="col-6 col-xl-auto">
        <CustomSelect>Дата заказа</CustomSelect>
      </div>
      <div class="col-6 col-xl-auto">
        <CustomSelect>Прим. к заказу</CustomSelect>
      </div>
      <div class="col-6 col-xl-auto">
        <CustomSelect>Комментарий</CustomSelect>
      </div>
      <div class="col-6 col-xl-auto">
        <CustomSelect>Каталог</CustomSelect>
      </div>
      <div class="col-6 col-xl-auto">
        <CustomSelect>Артикул</CustomSelect>
      </div>
      <div class="col-6 col-xl-auto">
        <CustomSelect>Номер счета</CustomSelect>
      </div>
      <div class="col-6 col-xl-auto">
        <CustomSelect>Статус</CustomSelect>
      </div>
      <div class="col-6 col-xl-auto">
        <CustomSelect>Поставщик</CustomSelect>
      </div>
    </div>

    <ui-table
      class="dark orders-table"
      fullwidth
      :data="ordersData"
      :thead="[
        { value: 'Дата' },
        { value: 'Прим. к заказу' },
        { value: 'Комментарий' },
        { value: 'Каталог' },
        { value: 'Артикул' },
        {
          slot: 'th-cart',
          columnId: 'cart',
        },
        {
          slot: 'th-time',
          columnId: 'time',
        },
        { value: 'Наименование' },
        {
          slot: 'th-ordered',
          columnId: 'ordered',
        },
        {
          slot: 'th-work',
          columnId: 'work',
        },
        {
          slot: 'th-rejected',
          columnId: 'rejected',
        },
        {
          slot: 'th-completed',
          columnId: 'completed',
        },
        {
          slot: 'th-returned',
          columnId: 'returned',
        },
        {
          slot: 'th-progress',
          columnId: 'progress',
        },
        {
          slot: 'th-arrived',
          columnId: 'arrived',
        },
        {
          slot: 'th-sold',
          columnId: 'sold',
        },
        { value: 'Статус' },
        { value: 'Поставщик' },
        { value: 'Цена' },
        { value: 'Сумма' },
        {
          slot: 'th-select',
          columnId: 'select',
        },
      ]"
      :tbody="[
        { field: 'date' },
        { field: 'info' },
        { field: 'comments' },
        { field: 'catalog' },
        {
          slot: 'articul',
        },
        {
          slot: 'cart',
        },
        {
          slot: 'time',
        },
        { field: 'title' },
        {
          field: 'ordered',
          align: 'center',
        },
        {
          field: 'work',
          align: 'center',
        },
        {
          field: 'rejected',
          align: 'center',
        },
        {
          field: 'completed',
          align: 'center',
        },
        {
          field: 'returned',
          align: 'center',
        },
        {
          field: 'progress',
          align: 'center',
        },
        {
          field: 'arrived',
          align: 'center',
        },
        {
          field: 'sold',
          align: 'center',
        },
        { slot: 'status' },
        { field: 'dealer' },
        { field: 'price' },
        { field: 'total' },
        {
          slot: 'select',
        },
      ]"
    >
      <template #th-cart>
        <ui-icon outlined v-tooltip="'Корзина'" aria-describedby="th-cell-0">
          shopping_cart
        </ui-icon>
      </template>
      <template #th-time>
        <ui-icon v-tooltip="'Время'" aria-describedby="th-cell-1">
          schedule
        </ui-icon>
      </template>
      <template #articul="{ data }">
        <span>{{ data.articul }}</span
        ><ui-icon style="vertical-align: middle" class="hint ms-2">
          lock
        </ui-icon>
      </template>
      <template #cart>
        <ui-icon class="hint" outlined> shopping_cart </ui-icon>
      </template>
      <template #time>
        <ui-icon class="hint"> schedule </ui-icon>
      </template>
      <template #status="{ data }">
        <span :class="data.status" class="status">{{ data.status }}</span>
      </template>
      <template #th-ordered>
        <ui-icon v-tooltip="'Заказано'" aria-describedby="th-cell-2">
          assignment_turned_in
        </ui-icon>
      </template>
      <template #th-work>
        <ui-icon v-tooltip="'В работе'" aria-describedby="th-cell-3">
          all_inbox
        </ui-icon>
      </template>
      <template #th-rejected>
        <ui-icon v-tooltip="'Отказ'" aria-describedby="th-cell-4">
          dangerous
        </ui-icon>
      </template>
      <template #th-completed>
        <ui-icon v-tooltip="'Выдано'" aria-describedby="th-cell-5">
          assignment_returned
        </ui-icon>
      </template>
      <template #th-returned>
        <ui-icon v-tooltip="'Возврат'" aria-describedby="th-cell-6">
          assignment_return
        </ui-icon>
      </template>
      <template #th-progress>
        <ui-icon v-tooltip="'В пути'" aria-describedby="th-cell-7">
          local_shipping
        </ui-icon>
      </template>
      <template #th-arrived>
        <ui-icon v-tooltip="'Пришло'" aria-describedby="th-cell-8">
          store
        </ui-icon>
      </template>
      <template #th-sold>
        <ui-icon v-tooltip="'Выкуплено'" aria-describedby="th-cell-9">
          account_balance_wallet
        </ui-icon>
      </template>

      <template #th-select> <ui-checkbox /> </template>
      <template #select>
        <ui-icon-button>more_vert</ui-icon-button>
      </template>
    </ui-table>

    <div class="mt-4 row justify-content-end">
      <div class="col-6 col-md-auto">
        <ui-button outlined disabled>Архивировать (0)</ui-button>
      </div>
      <div class="col-6 col-md-auto">
        <ui-button raised>Экспорт (0)</ui-button>
      </div>
    </div>
  </main>

  <ui-dialog type="modal" sheet v-model="isStatsOpen">
    <ui-dialog-content class="p-5 stats-dialog">
      <div class="large bold text-center mb-4">Стастистика по заказам</div>

      <div class="stats-view">
        <article class="all row p-4">
          <div class="col-5">Все заказы</div>
          <div class="col-1 text-center">8</div>
          <div class="ms-auto col-auto">8000 ₽</div>
        </article>
        <article class="ordered row p-4">
          <div class="col-5">Заказано</div>
          <div class="col-1 text-center">1</div>
          <div class="ms-auto col-auto">1000 ₽</div>
        </article>
        <article class="in-work row p-4">
          <div class="col-5">В работе</div>
          <div class="col-1 text-center">1</div>
          <div class="ms-auto col-auto">1000 ₽</div>
        </article>
        <article class="sold row p-4">
          <div class="col-5">Выкуплено</div>
          <div class="col-1 text-center">1</div>
          <div class="ms-auto col-auto">1000 ₽</div>
        </article>
        <article class="progress row p-4">
          <div class="col-5">В пути</div>
          <div class="col-1 text-center">1</div>
          <div class="ms-auto col-auto">1000 ₽</div>
        </article>
        <article class="arrived row p-4">
          <div class="col-5">Пришло</div>
          <div class="col-1 text-center">1</div>
          <div class="ms-auto col-auto">1000 ₽</div>
        </article>
        <article class="reject row p-4">
          <div class="col-5">Отказ</div>
          <div class="col-1 text-center">1</div>
          <div class="ms-auto col-auto">1000 ₽</div>
        </article>
        <article class="completed row p-4">
          <div class="col-5">Выдано</div>
          <div class="col-1 text-center">1</div>
          <div class="ms-auto col-auto">1000 ₽</div>
        </article>
        <article class="returned row p-4">
          <div class="col-5">Возврат</div>
          <div class="col-1 text-center">1</div>
          <div class="ms-auto col-auto">1000 ₽</div>
        </article>
      </div>
    </ui-dialog-content>
  </ui-dialog>
</template>

<style scoped lang="scss">
@use "@/styles/vars";
.stats-view {
  .all {
    background-color: white;
  }
  .ordered {
    background-color: vars.$statusOrdered;
  }
  .in-work {
    background-color: vars.$statusInWork;
  }
  .sold {
    background-color: vars.$statusSold;
  }
  .progress {
    background-color: vars.$statusProgress;
  }
  .arrived {
    background-color: vars.$statusArrived;
  }
  .reject {
    background-color: vars.$statusReject;
  }
  .completed {
    background-color: vars.$statusCompleted;
  }
  .returned {
    background-color: vars.$statusReturned;
  }
}

.stats-dialog {
  @media (min-width: vars.$desktop) {
    min-width: 500px !important;
  }
}
</style>

<style lang="scss">
@use "@/styles/vars";

.orders-table {
  .mdc-data-table__cell {
    font-size: 12px;
  }
  .status {
    border-bottom: 1px dashed vars.$grayed;
  }

  .mdc-data-table__row {
    &:has(.Заказано) {
      background-color: vars.$statusOrdered;
    }
    &:has(.Пришло) {
      background-color: vars.$statusArrived;
    }
  }
}
</style>
