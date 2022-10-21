<script setup lang="ts">
import AsideSearch from "../../components/Search/AsideSearch.vue";
</script>

<script lang="ts">

import {defineComponent, ref} from "vue";
import {mapGetters} from "vuex";
import CatalogService from "@/services/CatalogService";
import type ResponseData from "@/types/ResponseData";

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
          let map_brands = new Map();
          let letter: String
          let index, len;
          for (index = 0, len = response.data.length; index < len; index++) {
            letter = response.data[index].brand.substring(0,1)
            let brand_list = new Array<String>;
            if (map_brands.has(letter)) {
              brand_list = map_brands.get(letter)
              brand_list.push(response.data[index].brand)
            } else {
              brand_list.push(response.data[index].brand)
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
  <main class="py-5 container-fluid">
    <h1 class="mb-5">Оригинальный каталог</h1>
    <div class="row">
      <div class="col-12 col-xl-7">
        <h3 class="mb-4">Марка автомобиля</h3>

        <div class="col-12 col-md-8 col-xl-6 mb-4">
          <ui-textfield fullwidth outlined>Поиск марки</ui-textfield>
        </div>

        <div class="row">
          <div class="col-12 col-md-6 col-xl-3">
            <div class="row" v-for="letter of brands_row0">
              <div class="col-2 color-primary bold">{{ letter[0] }}</div>
              <div class="col-10">
                <RouterLink to="/search-brand/honda" class="clear" v-for="brand_name of letter[1]">
                  <div class="mb-3">{{ brand_name }}</div>
                </RouterLink>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-xl-3">
            <div class="row" v-for="letter of brands_row1">
              <div class="col-2 color-primary bold">{{ letter[0] }}</div>
              <div class="col-10">
                <RouterLink to="/search-brand/honda" class="clear" v-for="brand_name of letter[1]">
                  <div class="mb-3">{{ brand_name }}</div>
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-3">
            <div class="row" v-for="letter of brands_row2">
              <div class="col-2 color-primary bold">{{ letter[0] }}</div>
              <div class="col-10">
                <RouterLink to="/search-brand/honda" class="clear" v-for="brand_name of letter[1]">
                  <div class="mb-3">{{ brand_name }}</div>
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-3">
            <div class="row" v-for="letter of brands_row3">
              <div class="col-2 color-primary bold">{{ letter[0] }}</div>
              <div class="col-10">
                <RouterLink to="/search-brand/honda" class="clear" v-for="brand_name of letter[1]">
                  <div class="mb-3">{{ brand_name }}</div>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-xl-5 order-xl-last order-first">
        <AsideSearch />
      </div>
    </div>
  </main>
</template>
