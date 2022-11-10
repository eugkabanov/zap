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
      <div class="col-12 col-xl-8">
        <div style="margin-bottom: 40px">
          <ui-table
            fullwidth
            :data="priceInfo"
            :thead="searchDataHead"
            :tbody="searchDataBody"
          >
            <template #cart>
              <ui-icon class="hint" outlined> shopping_cart </ui-icon>
            </template>
            <template #delivery>
              <ui-icon class="hint" outlined> directions_car </ui-icon>
            </template>
          </ui-table>
        </div>
        <div v-if="isSimilarShow">
          <h2 style="font-size: 30px" class="large mb-5">
            Аналоги других производителей
          </h2>
          <ui-tab-bar class="mb-4">
            <ui-tab min-width content-indicator>По цене</ui-tab>
            <ui-tab min-width content-indicator>По производителю</ui-tab>
          </ui-tab-bar>
          <ui-table
            fullwidth
            :data="similarSearchData"
            :thead="similarSearchDataHead"
            :tbody="similarSearchDataBody"
          >
            <template #cart>
              <ui-icon class="hint" outlined> shopping_cart </ui-icon>
            </template>
            <template #delivery>
              <ui-icon class="hint" outlined> directions_car </ui-icon>
            </template>
          </ui-table>
        </div>
      </div>

      <div class="d-none d-xl-block offset-1 col-3">
        <ProductSearchFilters :onFilterClick="onFilterClick" />
      </div>
    </div>
  </main>

  <ui-drawer type="modal" v-model="isSearchFiltersOpen">
    <ui-drawer-content class="p-4">
      <!-- drawer needs at lease one focusable element -->
      <div tabindex="1" />
      <ProductSearchFilters :onFilterClick="onFilterClick" />
    </ui-drawer-content>
  </ui-drawer>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import SearchService from "@/services/SearchService";
import type ResponseData from "@/types/ResponseData";
import type ArticleDetailData from "@/types/ArticleDetailData";
import type ArticlePriceData from "@/types/ArticlePriceData";

export default defineComponent({
  name: "ProductSearch",
  components: {},

  data() {
    return {
      searchDataHead: [
        { value: "Бренд" },
        { value: "Поставщик" },
        { value: "Количество" },
        { value: "Срок" },
        { value: "Цена" },
        { value: "Отправка поставщику" },
        { value: "" },
        { value: "" },
      ],
      searchDataBody: [
        { field: "make_name" },
        { field: "supplier_name" },
        { field: "count" },
        { field: "time_delivery" },
        { field: "price" },
        { field: "time_delivery_direction" },
        { slot: "cart" },
        { slot: "delivery" },
      ],
      detailsPriceInfo: Array<ArticleDetailData>(),
      priceInfo: Array<ArticlePriceData>(),
      productId: this.$router.currentRoute.value.params.productId,
      productCount: 0
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
            this.productCount = index_price + 1
          }

          this.detailsPriceInfo.push(article_details)

        }

      })
      .catch((e: Error) => {
        console.log(e);
      });
  },

  computed: {},

  methods: {},

});
</script>

<style scoped lang="scss">
.mdc-drawer--modal {
  position: fixed;
  left: 0;
  top: 0;
}
</style>
