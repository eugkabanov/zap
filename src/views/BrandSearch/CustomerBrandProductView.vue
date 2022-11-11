<script setup lang="ts">
import BalanceBar from "@/components/Profile/BalanceBar.vue";

const productsDataBody = [
  { field: "brand" },
  { field: "articul" },
  { field: "details" },
  { slot: "actions" },
];
const productsDataHead = [
  { value: "Производитель" },
  { value: "Артикул" },
  { value: "Данные" },
  { value: "" },
];
const brandsData2 = [
  {
    brand: "GENUINE PART",
    articul: "15110RAAA01",
    details: "HOLDERSETPUMP",
  },
  {
    brand: "GENUINE PART",
    articul: "15110RAAA01",
    details: "HOLDERSETPUMP",
  },
];
</script>


<script lang="ts">
import {defineComponent} from "vue";
import {mapGetters} from "vuex";
import CatalogService from "@/services/CatalogService";
import type ResponseData from "@/types/ResponseData";
import type PartObject from "@/types/PartObject"

interface ProductTableRow {
  brand: string;
  articul: string;
  details: string;
}

export default defineComponent({
  name: "brandNameTypeModelSearch",
  data() {
    return {
      ssd: this.$route.params.type,
      brandName: this.$route.params.brandName,
      model: this.$route.params.model,
      productId: this.$route.params.productId,
      brandsData: [] as ProductTableRow[]
    };
  },

  mounted: function () {
    this.listDetailByUnit()
  },

  created: function () {
    
  },

  methods: {
    listDetailByUnit() {
      // this.productTypesData.length = 0
      CatalogService.listDetailByUnit(this.brandName, this.ssd, this.productId)
        .then((response: ResponseData) => {
          for (let item of response.data) {
            let o : PartObject = item
            let row: ProductTableRow = {
              brand: 'brand',
              articul: o.oem,
              details: o.name,
            }
            this.brandsData.push(row)
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
    <div class="row">
      <h1 class="mb-4 mt-5 col-auto large">Оригинальный каталог</h1>
      <div class="col-auto ms-auto">
        <BalanceBar class="mt-2 mb-3" />
      </div>
    </div>

    <h2 class="mb-5 large bold">
      <RouterLink to="/search-brand/honda" class="clear">
        <ui-icon class="vertical-align-middle">arrow_back</ui-icon> Honda ACCORD
        IX, Купе 3.5
      </RouterLink>
      <span style="vertical-align: middle" class="fw-400 small hint ms-2"
        ><ui-icon
          style="padding-bottom: 4px"
          outlined
          class="vertical-align-middle"
          >directions_car</ui-icon
        >
        Добавить в гараж</span
      >
    </h2>

    <h3 class="mb-4">Выбрать производителя</h3>

    <div class="col-12 col-xl-9">
      <ui-table
        class="mdc-data-table--last-select"
        fullwidth
        :data="brandsData"
        :thead="productsDataHead"
        :tbody="productsDataBody"
      >
        <template #actions>
          <ui-icon class="hint">camera_alt</ui-icon>
          <ui-icon class="hint ms-2">link</ui-icon>
        </template>
      </ui-table>
    </div>
  </main>
</template>
