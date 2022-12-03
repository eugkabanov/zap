<script setup lang="ts">
import { ref } from "vue";
import BreadCrumbs from "../../components/Page/BreadCrumbs.vue";
import BalanceBar from "../../components/Profile/BalanceBar.vue";

const productsDataBody = [
  {
    slot: "select", align:"center", width: 80
  },
  { field: "itemName", width: 100},
  { field: "supplierName", width: 100 },
  { field: "supplierMaxPeriod", width: 80, },
  { field: "priceValue", width: 80},
  { slot: "quantity", width: 40, align: "center"},
  { field: "total", width: 80},
  { slot: "comment", align: "left"},
  { slot: "edit", align: "right", width: 10 },
  { slot: "delete",align: "right", width: 10},
];
const productsDataHead = [
  { value: ""},
  { value: "Наименование" },
  { value: "Поставщик" },
  {
    slot: "th-time",
    columnId: "time",
  },
  { value: "Цена", align: "center" },
  { value: "Количество", align: "center" },
  { value: "Сумма", align: "center" },
  { value: "Комментарий к заказу", align: "left" },
  { value: ""},
  { value: "Удалить"}
];
const activeTab = ref(0);
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
      <ui-button
        outlined
        style="margin-bottom: 10px; text-align: left"
        icon="check_box"
        v-if="selectedAllShow"
        v-on:click="selectedAllCarts"
      >Выбрать все заказы</ui-button>
      <ui-button
          outlined
          style="margin-bottom: 10px"
          icon="check_box_outline_blank"
          v-if="!selectedAllShow"
          v-on:click="cancelAllCarts"
      >Убрать все заказы</ui-button>
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

        <template #quantity="{ data }">
          <div class="cell" style="display: flex;">
            <ui-icon
                style="cursor: pointer; margin-right: 16px"
                v-on:click="updateOrderToCart(data.priceId, data.quantity - 1)">
              remove
            </ui-icon>
            <label style="margin-bottom: 10px">{{ data.quantity }}</label>
            <ui-icon
                style="cursor: pointer; margin-left: 16px"
                v-on:click="updateOrderToCart(data.priceId, data.quantity + 1)">
              add
            </ui-icon>
          </div>
        </template>

        <template #select="{ data }">
          <input
            type="checkbox"
            :id="data.vendorCode"
            :value="data.priceId"
            style="padding-bottom: 12px"
            v-model="cartsToConfirm"
          />
        </template>
        <template #comment="{ data }">
          <label>{{ data.comment }}</label>
        </template>
        <template #edit="{ data }">
          <ui-icon-button
              v-on:click="showDialogAddCommentFunc(data.priceId)">
            edit
          </ui-icon-button>
        </template>
        <template #delete="{ data }">
          <ui-icon-button
              v-on:click="deleteCart(data.priceId)"
          >
            delete
          </ui-icon-button>
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
            <ui-button :disabled="selectedAllShow" v-on:click="doConfirm()" raised>Оформить заказ ({{ cartsToConfirm.length }})</ui-button>
        </div>

        <div class="mt-3 large" :class="$tt('body1')">
          Сумма заказа: <b>{{ totalOrderPrice.toFixed(2) }} ₽</b>
        </div>
      </div>
    </div>
  </main>
  <ui-dialog
      v-model="showErrMessage"
      maskClosable
      sheet
      class="balance-warning-dialog"
  >
    <NotificationDialog
      :type_message="'УВЕДОМЛЕНИЕ!'"
      :error_detail_message="errMessage"
      :hide_error_dialog="hideErrorDialog"
    />
  </ui-dialog>

  <ui-dialog
      v-model="showDialogAddComment"
      maskClosable
      sheet
      class="balance-warning-dialog"
  >
    <AddCommentToOrder
        @saveCommentDialog="saveCommentDialog"
    />
  </ui-dialog>

  <ui-dialog v-model="isLoginOpen" sheet maskClosable class="login-dialog">
    <LoginDialog
        @closeDialog="closeLoginDialog"
        @isAuthorisedUser="authorisedUser"
        @isLoginOpen="loginOpen"
    />
  </ui-dialog>

</template>

<script lang="ts">
import {defineComponent} from "vue";
import type ResponseData from "@/types/ResponseData";
import type CartItem from "@/types/CartItem";
import OrderService from "@/services/OrderService";
import NotificationDialog from "@/components/Dialogs/NotificationDialog.vue";
import AddCommentToOrder from "@/components/Dialogs/AddCommentToOrder.vue";
import router from "@/router";
import {store} from "@/store";
import {GET_NUMBER_CONFIRM_ORDERS} from "@/store/actions_type";
import LoginDialog from "@/components/Dialogs/LoginDialog.vue";

export default defineComponent({
  name: "CartView",
  data() {
    return {
      items: [] as CartItem[],
      cartsToConfirm: [] as number [],
      cartsToConfirmTech: [] as number [],
      totalOrderPrice: 0.00,
      showErrMessage: false,
      errMessage: "",
      showDialogAddComment: false,
      priceIdEditComment: 0,
      isLoginOpen: false,
      isAuthorisedUser: false,
      selectedAllShow: false,
    };
  },

  components: {
    NotificationDialog: NotificationDialog,
    AddCommentToOrder: AddCommentToOrder,
    LoginDialog: LoginDialog
  },

  watch: {

    cartsToConfirm() {
      this.totalOrderPrice = 0.00
      this.calculatingTotalPrice()
      this.selectedAllShow = this.cartsToConfirm.length == 0;
    },
  },

  mounted: function () {
    if (!store.getters.isAuthenticated) {
      this.isLoginOpen = true
    } else {
      this.listCart()
    }
  },

  created: function () {

  },

  methods: {

    selectedAllCarts() {
      for (let priceId of this.cartsToConfirmTech) {
        this.cartsToConfirm.push(priceId)
      }
      this.selectedAllShow = false
      this.calculatingTotalPrice()
    },

    cancelAllCarts() {
      this.cartsToConfirm.splice(0)
      this.selectedAllShow = true
      this.calculatingTotalPrice()
    },

    closeLoginDialog() {
      this.isLoginOpen = false;
    },

    authorisedUser() {
      this.isAuthorisedUser = true;
    },

    loginOpen() {
      this.isLoginOpen = false;
    },

    calculatingTotalPrice() {
      this.totalOrderPrice = 0.00

      if (this.cartsToConfirm.length > 0) {
        for (let cart of this.cartsToConfirm) {
          for (let index = 0, len = this.items.length; index < len; index++) {
            if (this.items[index].priceId == cart) {
              this.totalOrderPrice += this.items[index].total
            }
          }
        }
      }
    },

    updateOrderToCart(priceId: number, quantity: number) {

      if (quantity >= 0) {
        OrderService.addDetailToCart(priceId, quantity)
            .then((response: ResponseData) => {
              for (let item of this.items) {
                if (item.priceId == priceId) {
                  item.quantity = quantity
                  item.total = Number((item.priceValue * item.quantity).toFixed(2));
                }
              }
              this.calculatingTotalPrice()
              store.dispatch(GET_NUMBER_CONFIRM_ORDERS)
            })
            .catch((e: Error) => {
              console.log(e);
            })
      }
    },

    showDialogAddCommentFunc(priceId: number) {
      this.showDialogAddComment = true
      this.priceIdEditComment = priceId
    },

    saveCommentDialog(comment: string) {
      OrderService.editCommentToOrderCart(comment, this.priceIdEditComment)
          .then((response: ResponseData) => {
            for (let item of this.items) {
              if (item.priceId == response.data) {
                item.comment = comment
              }
            }
          })
          .catch((e: Error) => {
            console.log(e);
          })

      this.showDialogAddComment = false
    },

    doConfirm() {
      if (this.cartsToConfirm.length != 0) {
        OrderService.confirmOrder(this.cartsToConfirm)
            .then((response: ResponseData) => {
              router.push({path: "/confirm/orders"})
              store.dispatch(GET_NUMBER_CONFIRM_ORDERS)
                  .then((data: ResponseData) => {
                  })
                  .catch((e: Error) => {
                    console.log(e);
                  });
            })

            .catch((e: Error) => {
              this.errMessage = 'Произошла ошибка оформления заказа. Попробуйте позже.'
              this.showErrMessage = true
              console.log(e);
            })
      }
    },

    hideErrorDialog() {
      this.errMessage = ""
      this.showErrMessage = false
    },

    deleteCart(priceId: number) {

      OrderService.deleteOrderForCart(priceId)
          .then((response: ResponseData) => {
            for (let index = 0, len = this.items.length; index < len; index++) {
              if (this.items[index].priceId == response.data) {
                this.items.splice(this.items.indexOf(this.items[index]), 1)
                this.cartsToConfirmTech.splice(this.cartsToConfirmTech.indexOf(priceId), 1)
                break
              }
            }
            this.cartsToConfirm.splice(0)
            for (let priceId of this.cartsToConfirmTech) {
              this.cartsToConfirm.push(priceId)
            }

            this.calculatingTotalPrice()
            store.dispatch(GET_NUMBER_CONFIRM_ORDERS)


            this.errMessage = "Заказ удалён из корзины"
            this.showErrMessage = true
          })

          .catch((e: Error) => {
            console.log(e)
            this.errMessage = "Не удалось удалить."
            this.showErrMessage = true
          })
    },

    listCart() {
      this.items.length = 0
      this.cartsToConfirm.length = 0
      this.cartsToConfirmTech.length = 0

      OrderService.getCart()
          .then((response: ResponseData) => {
            for (let item of response.data.cart) {
              this.cartsToConfirm.push(item.priceId)
              this.cartsToConfirmTech.push(item.priceId)

              item.total = Number((item.priceValue * item.quantity).toFixed(2));
              item.supplierMaxPeriod += " дней";

              this.items.push(item);
            }
            this.calculatingTotalPrice()
          })
          .catch((e: Error) => {
            console.log(e);
          })
    },

  },
});
</script>