<script setup lang="ts">
import { ref } from "vue";
import BreadCrumbs from "../../components/Page/BreadCrumbs.vue";
import BalanceBar from "../../components/Profile/BalanceBar.vue";

const productsDataBody = [
  { field: "itemName", align: "center" },
  { field: "supplierName", align: "center" },
  { field: "supplierMaxPeriod" },
  { field: "priceValue", align: "center" },
  { field: "quantity", align: "center" },
  { field: "total", align: "center" },
  {
    slot: "select",
  },
  { field: "comments" },
];
const productsDataHead = [
  { value: "Наименование" },
  { value: "Поставщик" },
  {
    slot: "th-time",
    columnId: "time",
  },
  { value: "Цена", align: "center" },
  { value: "Количество", align: "center" },
  { value: "Сумма", align: "center" },
  { value: "Выбрать" },
  "Комментарии",
];
const activeTab = ref(0);
</script>

<script lang="ts">
import {defineComponent} from "vue";
import type ResponseData from "@/types/ResponseData";
import type CartItem from "@/types/CartItem";
import OrderService from "@/services/OrderService";

export default defineComponent({
  name: "cart",
  data() {
    return {
      items: [] as CartItem[]
    };
  },

  mounted: function () {
    this.listCart()
  },

  created: function () {
    
  },

  methods: {
    listCart() {
      this.items.length = 0
      OrderService.getCart()
        .then((response: ResponseData) => {
          for (let item of response.data.cart) {
            item.total = (item.priceValue * item.quantity).toFixed(2);
            item.supplierMaxPeriod += " дней";
            this.items.push(item);
          }
        })

        .catch((e: Error) => {
          console.log(e);
        })
    },
    
  },
});
</script>


<template>
  <main class="container-fluid pb-5">
    <BreadCrumbs
      class="mt-3"
      :crumbs="[
        { title: 'Главная', href: '/' },
        { title: 'Корзина', href: '/cart' },
      ]"
    />
    <div class="row">
      <h1 :class="$tt('headline1')" class="mt-5 col-auto">Корзина</h1>
      <div class="col-auto ms-auto">
        <BalanceBar class="mt-2 mb-3" />
      </div>
    </div>
    <!-- <div class="mt-5">
      <ui-tab-bar v-model="activeTab">
        <ui-tab min-width content-indicator>Корзина</ui-tab>
        <ui-tab min-width content-indicator>Отложенные</ui-tab>
        <ui-tab min-width content-indicator>Удаленные</ui-tab>
      </ui-tab-bar>
    </div> -->

    <div class="mt-3 dark">
      <ui-table
        fullwidth
        :data="items"
        :thead="productsDataHead"
        :tbody="productsDataBody"
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

        <template #select>
          <ui-checkbox disabled="true" modelValue="true" />
        </template>
      </ui-table>

      <!-- <div class="mt-4 row justify-content-between justify-content-md-end">
        <div class="col-auto">
          <ui-button disabled outlined>Экспорт&nbsp;(0)</ui-button>
        </div>
        <div class="col-auto ml-2">
          <ui-button raised>Импорт</ui-button>
        </div>
      </div> -->
    </div>

    <div class="row mt-4">
      <div class="col-12 col-md-8 col-xl-6">
        <!-- <div>
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
        </div> -->

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
