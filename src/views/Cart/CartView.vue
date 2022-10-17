<script setup lang="ts">
import { ref } from "vue";
import BreadCrumbs from "../../components/Page/BreadCrumbs.vue";

const activeTab = ref(0);

const productsData = [
  {
    title: "Шина зимняя 245/60R18 109T XL Hakkapeliitta 10p SUV TL (шип.)",
    delivery: "NOKIAN",
    time: "2 дня",
    price: "1460",
    quantity: 4,
    total: "5841",
  },
  {
    title: "Шина зимняя 245/60R18 109T XL Hakkapeliitta 10p SUV TL (шип.)",
    delivery: "NOKIAN",
    time: "2 дня",
    price: "1460",
    quantity: 4,
    total: "5841",
  },
  {
    title: "Шина зимняя 245/60R18 109T XL Hakkapeliitta 10p SUV TL (шип.)",
    delivery: "NOKIAN",
    time: "2 дня",
    price: "1460",
    quantity: 4,
    total: "5841",
  },
  {
    title: "Шина зимняя 245/60R18 109T XL Hakkapeliitta 10p SUV TL (шип.)",
    delivery: "NOKIAN",
    time: "2 дня",
    price: "1460",
    quantity: 4,
    total: "5841",
  },
];
</script>

<template>
  <main class="container-fluid py-5">
    <BreadCrumbs
      class="mb-4"
      :crumbs="[
        { title: 'Главная', href: '/' },
        { title: 'Корзина', href: '/cart' },
      ]"
    />
    <h1 :class="$tt('headline1')">Корзина</h1>
    <div class="mt-5">
      <ui-tab-bar v-model="activeTab">
        <ui-tab min-width content-indicator>Корзина</ui-tab>
        <ui-tab min-width content-indicator>Отложенные</ui-tab>
        <ui-tab min-width content-indicator>Удаленные</ui-tab>
      </ui-tab-bar>
    </div>

    <div class="mt-3 dark">
      <ui-table
        fullwidth
        :data="productsData"
        :thead="[
          { value: 'Наименование' },
          { value: 'Поставщик' },
          {
            slot: 'th-time',
            columnId: 'time',
          },
          { value: 'Цена', align: 'center' },
          { value: 'Количество', align: 'center' },
          { value: 'Сумма', align: 'center' },
          {
            slot: 'th-select',
            columnId: 'select',
          },
          'Комментарии',
        ]"
        :tbody="[
          { field: 'title', align: 'center' },
          { field: 'delivery', align: 'center' },
          { field: 'time' },
          { field: 'price', align: 'center' },
          { field: 'quantity', align: 'center' },
          { field: 'total', align: 'center' },
          {
            slot: 'select',
          },
          { field: 'comments' },
        ]"
      >
        <template #th-time>
          <ui-icon
            style="text-align: center"
            v-tooltip="'Время'"
            aria-describedby="th-cell-1"
          >
            schedule
          </ui-icon>
        </template>

        <template #th-select> <ui-checkbox /> Выбрать </template>
        <template #select>
          <ui-checkbox />
        </template>
      </ui-table>

      <div class="mt-4 row justify-content-between justify-content-md-end">
        <div class="col-auto">
          <ui-button outlined>Экспорт&nbsp;(0)</ui-button>
        </div>
        <div class="col-auto ml-2">
          <ui-button raised>Импорт</ui-button>
        </div>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-12 col-md-8 col-xl-6">
        <div>
          <label for="cart-comments" class="d-block mb-2"
            >Комментарий к заказу</label
          >
          <ui-textfield
            id="cart-comments"
            outlined
            fullwidth
            input-type="textarea"
            rows="8"
            cols="40"
          />
        </div>

        <div class="mt-3">
          <ui-form-field>
            <ui-checkbox value="agree" input-id="cart-agree" />
            <label class="hint" for="cart-agree"
              >С условиями и договором ознакомлен</label
            >
          </ui-form-field>
        </div>

        <div class="mt-4">
          <RouterLink to="/order">
            <ui-button raised>Оформить заказ (0)</ui-button>
          </RouterLink>
        </div>

        <div class="mt-3 large" :class="$tt('body1')">
          Сумма заказа: <b>0,00 ₽</b>
        </div>
      </div>
    </div>
  </main>
</template>
