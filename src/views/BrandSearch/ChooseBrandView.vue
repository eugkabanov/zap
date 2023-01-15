<script setup lang="ts">
import BalanceBar from "@/components/Profile/BalanceBar.vue";
import AsideSearch from "../../components/Search/AsideSearch.vue";
</script>

<script lang="ts">

import {defineComponent} from "vue";
import {mapGetters} from "vuex";
import CatalogService from "@/services/CatalogService";
import type ResponseData from "@/types/ResponseData";
import type CatalogObject from "@/types/CatalogObject"

export default defineComponent({
  name: "ChooseBrand",
  data() {

    return {
      brands_row0: new  Array(),
      brands_row1: new Array(),
      brands_row2: new Array(),
      brands_row3: new Array(),

    };
  },

  created: function () {
    CatalogService.listCatalogs()
        .then((response: ResponseData) => {
          console.log(response)
          let map_brands = new Map();
          let letter: String
          let index, len;
          for (index = 0, len = response.data.length; index < len; index++) {
            letter = response.data[index].brand.substring(0,1)
            let brand_list = new Array<CatalogObject>;
            if (map_brands.has(letter)) {
              brand_list = map_brands.get(letter)
              brand_list.push({
                brand: response.data[index].brand, 
                code: response.data[index].code
              })
            } else {
              brand_list.push({
                brand: response.data[index].brand, 
                code: response.data[index].code
              })
              map_brands.set(letter, brand_list)
            }
          }

          let i = 0
          for (let entry of map_brands) {
            if (i < 4) {
              this.brands_row0.push(entry)
            }
            if (i >=4  && i < 11) {
              this.brands_row1.push(entry)
            }
            if (i >=11  && i < 16) {
              this.brands_row2.push(entry)
            }
            if (i >=15) {
              this.brands_row3.push(entry)
            }
            i++
          }
        })

        .catch((e: Error) => {
          console.log(e);
        })
  },

  computed: {
    ...mapGetters(["isAuthenticated"])
  },

  methods: {
  },
});

</script>

<template>
  <main class="pb-5 container-fluid">
    <div class="row">
      <h1 class="mb-4 mt-5 col-auto large">Оригинальный каталог</h1>
      <div class="col-auto ms-auto">
        <BalanceBar class="mt-2 mb-3" />
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-xl-7">
        <h2 class="mb-4 large bold">Марка автомобиля</h2>

        <!-- <div class="col-12 col-md-8 col-xl-6 mb-4">
          <ui-textfield fullwidth>Поиск марки</ui-textfield>
        </div> -->

        <div class="row">
          <div class="col-12 col-md-6 col-xl-3">
            <div class="row" v-for="letter of brands_row0">
              <div class="col-2 color-primary bold">{{ letter[0] }}</div>
              <div class="col-10">
                <template v-for="brand of letter[1]">
                  <RouterLink class="clear"  :to="{ name: 'brandNameSearch', params: { brandName: brand.code}}" >
                    <div class="mb-3">{{ brand.brand }}</div>
                  </RouterLink>
                </template>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-xl-3">
            <div class="row" v-for="letter of brands_row1">
              <div class="col-2 color-primary bold">{{ letter[0] }}</div>
              <div class="col-10">
                <template v-for="brand of letter[1]">
                  <RouterLink class="clear"  :to="{ name: 'brandNameSearch', params: { brandName: brand.code}}" >
                    <div class="mb-3">{{ brand.brand }}</div>
                  </RouterLink>
                </template>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-3">
            <div class="row" v-for="letter of brands_row2">
              <div class="col-2 color-primary bold">{{ letter[0] }}</div>
              <div class="col-10">
                <template v-for="brand of letter[1]">
                  <RouterLink class="clear"  :to="{ name: 'brandNameSearch', params: { brandName: brand.code}}" >
                    <div class="mb-3">{{ brand.brand }}</div>
                  </RouterLink>
                </template>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-3">
            <div class="row" v-for="letter of brands_row3">
              <div class="col-2 color-primary bold">{{ letter[0] }}</div>
              <div class="col-10">
                <template v-for="brand of letter[1]">
                  <RouterLink class="clear"  :to="{ name: 'brandNameSearch', params: { brandName: brand.code}}" >
                    <div class="mb-3">{{ brand.brand }}</div>
                  </RouterLink>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-xl-5 order-xl-last order-first">
        <!-- <AsideSearch /> -->
      </div>
    </div>
  </main>
</template>
