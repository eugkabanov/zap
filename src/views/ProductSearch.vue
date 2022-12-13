<script setup lang="ts">
import { ref } from "vue";
import ProductSearchFilters from "../components/Search/ProductSearchFilters.vue";

const similarSearchDataBody = [
  { field: "brand" },
  { field: "dealer" },
  { field: "count" },
  { field: "deadline" },
  { field: "price" },
  { field: "date" },
  { slot: "cart" },
  { slot: "delivery" },
];

const searchDataBody = [
  { field: "make_name"},
  { field: "supplier_name" },
  { field: "count",
    fn: (data: { count: number; }) => {
    if (data.count == 10000){
      return "Под заказ "
    }
      return data.count;
    }
  },
  { field: "time_delivery" },
  { field: "price"},
  // { field: "time_delivery_direction" },
  { slot: "quantity" },
  { slot: "cart" },
  // { slot: "delivery" },
];

const searchDataHead = [
  { value: "Бренд"},
  { value: "Наличие"},
  { value: "Количество"},
  { value: "Срок" },
  { value: "Цена" },
  // { value: "Отправка поставщику" },
  { value: "Количество" },
  { value: "" },
  // { value: "" }
];
const similarSearchDataHead = [
  { value: "Бренд" },
  { value: "Поставщик" },
  { value: "Количество" },
  { value: "Срок" },
  { value: "Цена" },
  { value: "Отправка поставщику" },
  { value: "" },
  { value: "" },
];
const isSearchFiltersOpen = ref(false);
const isSimilarShow = ref(false);

const onFilterClick = () => (isSimilarShow.value = true);

const similarSearchData = [
  {
    brand: "NOKIAN",
    dealer: "Название поставщика ",
    count: "4 шт.",
    deadline: "3 дня",
    price: "5841 ₽",
    date: "Сегодня в 14:30",
  },
  {
    brand: "NOKIAN",
    dealer: "Название поставщика ",
    count: "4 шт.",
    deadline: "3 дня",
    price: "5841 ₽",
    date: "Сегодня в 14:30",
  },
];

</script>

<template>
  <main class="pb-5 container-fluid">
    <h1 class="large mb-5">
      <ui-icon-button class="d-xl-none" v-model="isSearchFiltersOpen"
        >menu_open</ui-icon-button
      >Артикул {{ productId }}
      <span :class="$tt('body1')" class="ms-3 hint">найдено {{ productCount }} товаров</span>
    </h1>
    <div
        class="col-12 col-lg-5"
        style="margin-bottom: 10px"
    >
      <div class="row">
        <div class="col-md-10">
          <SearchFormWithIcon
              placeholder="Поиск по артикулу"
              @updateSearchPage="searchDetailInfoByItemNo"
          />
        </div>
        <div class="col-md-2">
          <ui-spinner
              :active="progress"
          ></ui-spinner>
        </div>
      </div>
    </div>
    <div class="row">
      <div>
        <div style="margin-bottom: 40px">
          <ui-table
            fullwidth
            :data="priceInfo"
            :thead="searchDataHead"
            :tbody="searchDataBody"
          >
<!--            <template #brand="{ data }">-->
<!--              <router-link-->
<!--                  :to="{ name: 'product', params: { categoryId: 'wheel', productId: data.price_id}}"-->
<!--              >{{ data.make_name }}</router-link>-->
<!--            </template>-->
            <template #cart="{ data }">
              <ui-icon-button
                @click="addDetailToCart(data.price_id, data.make_name, data.count)"
              >
                <ui-icon
                  class="hint"
                  outlined>
                  shopping_cart
                </ui-icon>
              </ui-icon-button>
            </template>
<!--            <template #delivery>-->
<!--              <ui-icon class="hint" outlined > directions_car </ui-icon>-->
<!--            </template>-->
            <template #quantity="{ data }">
              <ui-textfield
                @input="event => storeCartsQuantity(event.target.value, data.price_id)"
                :modelValue="map_carts.get(data.price_id)"
                :placeholder="0"
                :min="0"
                :max="data.count"
                inputType="number"
                :id="data.price_id"
                class="small"
                style="width: 70px; height: 50px; padding: 0 8px"
              ></ui-textfield>
            </template>
          </ui-table>
        </div>
<!--        <div v-if="isSimilarShow">-->
<!--          <h2 style="font-size: 30px" class="large mb-5">-->
<!--            Аналоги других производителей-->
<!--          </h2>-->
<!--          <ui-tab-bar class="mb-4">-->
<!--            <ui-tab min-width content-indicator>По цене</ui-tab>-->
<!--            <ui-tab min-width content-indicator>По производителю</ui-tab>-->
<!--          </ui-tab-bar>-->
<!--          <ui-table-->
<!--            fullwidth-->
<!--            :data="similarSearchData"-->
<!--            :thead="similarSearchDataHead"-->
<!--            :tbody="similarSearchDataBody"-->
<!--          >-->
<!--            <template #cart>-->
<!--              <ui-icon class="hint" outlined> shopping_cart </ui-icon>-->
<!--            </template>-->
<!--            <template #delivery>-->
<!--              <ui-icon class="hint" outlined > directions_car </ui-icon>-->
<!--            </template>-->
<!--          </ui-table>-->
<!--        </div>-->
      </div>

<!--      <div class="d-none d-xl-block offset-1 col-3">-->
<!--        <ProductSearchFilters :onFilterClick="onFilterClick" />-->
<!--      </div>-->
    </div>
  </main>

<!--  <ui-drawer type="modal" v-model="isSearchFiltersOpen">-->
<!--    <ui-drawer-content class="p-4">-->
<!--      &lt;!&ndash; drawer needs at lease one focusable element &ndash;&gt;-->
<!--      <div tabindex="1" />-->
<!--      <ProductSearchFilters :onFilterClick="onFilterClick" />-->
<!--    </ui-drawer-content>-->
<!--  </ui-drawer>-->
  <ui-dialog
      v-model="isShowAddedProduct"
      sheet
      maskClosable
      class="cart-dialog"
  >
    <CartAddDialog
      :hide-added-product="hideAddedProduct"
      :detail_name="detail_name_cart"
      :make_name="make_name_cart"
      :itm_no="itm_no_cart"
      :price="price_cart"
      :quantity="quantity_cart"
    />
  </ui-dialog>

  <ui-dialog
      @keyup.enter.native="authorisedUserKeyEnter"
      v-model="isLoginOpen"
      :sheet="false"
      :maskClosable="true"
      class="login-dialog"
  >
    <LoginDialog
      v-model:authKeyEnter=authKeyEnterShow
      @isLoginOpen="loginOpen"
      @updatePage="updatePage"
    />
  </ui-dialog>

  <ui-dialog
      v-model="showNotification"
      maskClosable
      sheet
      class="balance-warning-dialog"
  >
    <NotificationDialog
        :type_message="'ВНИМАНИЕ!'"
        :error_detail_message="notificationDesc"
        :hide_error_dialog="hideErrorDialog"
    />
  </ui-dialog>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import SearchService from "@/services/SearchService";
import type ResponseData from "@/types/ResponseData";
import type ArticleDetailData from "@/types/ArticleDetailData";
import type ArticlePriceData from "@/types/ArticlePriceData";
import OrderService from "@/services/OrderService";
import CartAddDialog from "@/components/Dialogs/CartAddDialog.vue";
import {store} from "@/store";
import {GET_NUMBER_CONFIRM_ORDERS} from "@/store/actions_type";
import {mapGetters} from "vuex";
import LoginDialog from "@/components/Dialogs/LoginDialog.vue";
import NotificationDialog from "@/components/Dialogs/NotificationDialog.vue";
import ProfileDialog from "@/components/Dialogs/ProfileDialog.vue";
import router from "@/router";
import SearchFormWithIcon from "@/components/Search/SearchFormWithIcon.vue";

export default defineComponent({
  name: "ProductSearch",

  components: {
    LoginDialog: LoginDialog,
    ProfileDialog: ProfileDialog,
    CartAddDialog: CartAddDialog,
    SearchFormWithIcon: SearchFormWithIcon,
    NotificationDialog: NotificationDialog,
  },

  computed: {
    ...mapGetters(["currentStateCart", "isAuthenticated", "currentUser"])
  },

  data() {
    return {
      map_carts: new Map<number, number>(),
      priceInfo: [] as ArticlePriceData[],
      productId: '',
      productCount: 0,
      isShowAddedProduct: false,
      quantity_cart: 0,
      detail_name_cart: "",
      make_name_cart: "",
      itm_no_cart: "",
      price_cart: 0,
      isLoginOpen: false,
      showNotification: false,
      notificationDesc: "",
      progress: false,
      authKeyEnterShow: false
    };


  },

  created: async function () {
    if (store.getters.isAuthenticated) {
      await this.listCart();
    }
    await this.getDetailInfoByItemNo();
  },

  methods: {

    authorisedUserKeyEnter() {
      if (this.authKeyEnterShow){
        this.authKeyEnterShow = false
      } else {
        this.authKeyEnterShow = true
      }
    },



    storeCartsQuantity(value : number, priceId : number) {
      this.map_carts.set(priceId, value)
    },

    hideErrorDialog() {
      this.showNotification = false
      this.notificationDesc = ""
    },

    async serviceGetProductInfo(productId : string) {
      this.progress = true
      this.priceInfo.length = 0
      await SearchService.prices(productId)
          .then((response: ResponseData) => {

            for (let index = 0, len = response.data.length; index < len; index++) {
              const article_details: ArticleDetailData = {};

              article_details.id = response.data[index].id
              article_details.detail_name = response.data[index].detail_name

              article_details.prices = response.data[index].prices

              for (let index_price = 0, len_price = response.data[index].prices.length; index_price < len_price; index_price++) {
                if (response.data[index].prices[index_price].count == 0) {
                  response.data[index].prices[index_price].count = 10000
                }
                this.priceInfo.push(response.data[index].prices[index_price])
                this.productCount++
              }
            }
          })
          .catch((e: Error) => {
            console.log(e);
            this.progress = false
          });
      this.progress = false
    },

    searchDetailInfoByItemNo(article: string) {
      this.priceInfo.length = 0
      this.productCount = 0
      this.productId = article
      this.serviceGetProductInfo(article)
      if (store.getters.isAuthenticated) {
        this.listCart();
      }
    },

    getDetailInfoByItemNo() {
      this.priceInfo.length = 0
      this.productCount = 0
      this.productId = this.$route.params.productId
      this.serviceGetProductInfo(this.productId)
    },

    updatePage() {
      router.go(0)
    },

    async addDetailToCart(priceId : number, make_name : string, quantityMax: number) {

      if (store.getters.isAuthenticated) {
        let quantityItem: number
        quantityItem = this.map_carts.get(priceId)

        if (quantityItem > 0) {
          if (!(quantityItem > quantityMax)) {
            this.progress = true
            await OrderService.addDetailToCart(priceId, quantityItem)
                .then((response: ResponseData) => {

                  this.quantity_cart = response.data.quantity
                  this.make_name_cart = make_name
                  this.itm_no_cart = this.productId
                  this.price_cart = response.data.priceValue

                  this.isShowAddedProduct = true

                  store.dispatch(GET_NUMBER_CONFIRM_ORDERS)
                })
                .catch((e: Error) => {
                  console.log(e);
                })
            this.progress = false
          } else {
            this.showNotification = true
            this.notificationDesc = "Количество товара больше, чем есть в наличии у поставщика"
          }

        } else {
          this.showNotification = true
          this.notificationDesc = "Введите как минимум 1 единицу товара"
        }
      } else {
        this.isLoginOpen = true
      }
    },

    async listCart() {
      this.progress = true
      this.map_carts.clear()
      await OrderService.getCart()
          .then((response: ResponseData) => {
            for (let item of response.data.cart) {
              this.map_carts.set(item.priceId, item.quantity);
            }
          })
          .catch((e: Error) => {
            this.progress = false
            console.log(e);
          })
      this.progress = false
    },

    hideAddedProduct() {
      this.isShowAddedProduct = false
    },

    loginOpen() {
      this.isLoginOpen = false
    },
  },

});
</script>

<style scoped lang="scss">
.mdc-drawer--modal {
  position: fixed;
  left: 0;
  top: 0;
}
aspect-container  {
  cursor: pointer;
}
</style>
