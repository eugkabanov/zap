<script setup lang="ts">
import SearchFormWithIcon from "../../components/Search/SearchFormWithIcon.vue";
import ClosedStatus from "../../components/Statuses/ClosedStatus.vue";
import BalanceBar from "../../components/Profile/BalanceBar.vue";

const appealsDataBody = [
  { slot: "link" },
  { field: "date" },
  { field: "category" },
  { field: "detail" },
  { field: "dealer" },
  { field: "comments" },
  { field: "price" },
  { slot: "status" },
  { slot: "result" },
  { slot: "select" },
];
const appealsDataHead = [
  { value: "" },
  { value: "Дата" },
  { value: "Категория" },
  { value: "Деталь" },
  { value: "Поставщик" },
  { value: "Комментарий" },
  { value: "Сумма" },
  { value: "Статус" },
  { value: "" },
  { slot: "th-select", columnId: "select" },
];
const appealsData = [
  {
    date: "25 июля 10:22",
    category: "Прочие вопросы",
    detail: "DENCO DCN32032\nКонденсор",
    dealer: "SVT (1)",
    comments: "1020101000122012293",
    price: "9743 ₽",
    status: "отказ (0/1)",
  },
  {
    date: "27 июля 10:22",
    category: "Прочие вопросы",
    detail: "DENCO DCN32032\nКонденсор",
    dealer: "SVT (1)",
    comments: "1020101000122012293",
    price: "45 968 ₽",
    status: "Возврат просроченного",
  },
  {
    date: "25 июля 10:22",
    category: "Прочие вопросы",
    detail: "DENCO DCN32032\nКонденсор",
    dealer: "SVT (1)",
    comments: "1020101000122012293",
    price: "9743 ₽",
    status: "отказ (0/1)",
  },
  {
    date: "27 июля 10:22",
    category: "Прочие вопросы",
    detail: "DENCO DCN32032\nКонденсор",
    dealer: "SVT (1)",
    comments: "1020101000122012293",
    price: "45 968 ₽",
    status: "Возврат просроченного",
  },
];
</script>

<template>
  <main class="container-fluid pb-5">
    <BalanceBar class="ms-auto mt-2 mb-3" />
    <h1 class="mb-5 mt-0 large">Вопросы по заказам</h1>

    <div class="row align-items-center mb-4">
      <div class="col-12 col-xl-auto">
        <ui-tab-bar>
          <ui-tab min-width content-indicator> Непрочитанные </ui-tab>
          <ui-tab min-width content-indicator> Открытые </ui-tab>
          <ui-tab min-width content-indicator> Закрытые </ui-tab>
        </ui-tab-bar>
      </div>

      <div class="col-12 col-lg-4">
        <SearchFormWithIcon :submit-handler="() => {}" placeholder="Поиск" />
      </div>
    </div>

    <ui-table
      id="appeals"
      class="dark"
      fullwidth
      :data="appealsData"
      :thead="appealsDataHead"
      :tbody="appealsDataBody"
    >
      <template #link>
        <div class="table-link">
          <RouterLink to="/appeals/123" />
        </div>
      </template>
      <template #th-select> <ui-checkbox /> </template>
      <template #select>
        <ui-icon-button>more_vert</ui-icon-button>
      </template>

      <template #status="{ data }">
        <span class="text-underline">{{ data.status }}</span>
        <ui-icon
          v-if="data.status === 'Возврат просроченного'"
          class="ms-2"
          style="vertical-align: middle"
          >undo</ui-icon
        >
      </template>

      <template #result> <ClosedStatus /> </template>
    </ui-table>
  </main>
</template>

<style lang="scss" scoped>
#appeals {
  .mdc-data-table__cell:first-child {
    position: absolute;
  }
}
</style>
