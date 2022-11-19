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
  { field: "count"},
  { field: "time_delivery" },
  { field: "price"},
  { field: "time_delivery_direction" },
  { slot: "quantity" },
  { slot: "cart" },
  // { slot: "delivery" },
];

const searchDataHead = [
  { value: "Бренд"},
  { value: "Поставщик"},
  { value: "Количество"},
  { value: "Срок" },
  { value: "Цена" },
  { value: "Отправка поставщику" },
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
                @click="addDetailToCart(data.price_id, quantity, data.make_name, data.count)"
              >
                <ui-icon class="hint" outlined>
                  shopping_cart
                </ui-icon>
              </ui-icon-button>
            </template>
<!--            <template #delivery>-->
<!--              <ui-icon class="hint" outlined > directions_car </ui-icon>-->
<!--            </template>-->
            <template #quantity="{ data }">
              <ui-textfield
                @input="event => this.quantity = event.target.value"
                :min="0"
                :max="data.count"
                :placeholder="0"
                inputType="number"
                :id="data.price_id"
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
</template>

<script lang="ts">
import {defineComponent} from "vue";
import SearchService from "@/services/SearchService";
import type ResponseData from "@/types/ResponseData";
import type ArticleDetailData from "@/types/ArticleDetailData";
import type ArticlePriceData from "@/types/ArticlePriceData";
import OrderService from "@/services/OrderService";
import CartAddDialog from "@/components/Dialogs/CartAddDialog.vue";

export default defineComponent({
  name: "ProductSearch",
  components: {
    CartAddDialog: CartAddDialog
  },

  data() {
    return {
      detailsPriceInfo: [] as ArticleDetailData[],
      priceInfo: [] as ArticlePriceData[],
      productId: this.$route.params.productId,
      productCount: 0,
      isShowAddedProduct: false,
      maxQuantity: 3,
      quantity: 0,
      quantity_cart: 0,
      detail_name_cart: "",
      make_name_cart: "",
      itm_no_cart: "",
      price_cart: 0,
    };
  },

  created: function () {

    SearchService.prices(this.productId)
      .then((response: ResponseData) => {

        for (let index = 0, len = response.data.length; index < len; index++) {
          const article_details: ArticleDetailData = {};

          article_details.id = response.data[index].id
          article_details.detail_name = response.data[index].detail_name

          article_details.prices = response.data[index].prices

          for (let index_price = 0, len_price = response.data[index].prices.length; index_price < len_price; index_price++) {
            this.priceInfo.push(response.data[index].prices[index_price])
            this.productCount++
          }

          this.detailsPriceInfo.push(article_details)

        }

      })
      .catch((e: Error) => {
        console.log(e);
      });
  },

  computed: {},

  methods: {
    addDetailToCart(priceId : number, quantity: number, make_name : string, count: number) {

      if (quantity <= count) {
        OrderService.addDetailToCart(priceId, quantity)
            .then((response: ResponseData) => {

              this.quantity_cart = response.data.quantity
              this.detail_name_cart = response.data.itemName
              this.make_name_cart = make_name
              this.itm_no_cart = this.productId
              this.price_cart = response.data.priceValue

              this.isShowAddedProduct = true

            })
            .catch((e: Error) => {
              console.log(e);
            })
        return;
      }

      alert("Количество заказанных деталей превышает наличие")

    },

    hideAddedProduct() {
      this.isShowAddedProduct = false
    }
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
