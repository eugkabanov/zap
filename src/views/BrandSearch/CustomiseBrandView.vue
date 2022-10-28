<script setup lang="ts">
import AsideSearch from "../../components/Search/AsideSearch.vue";
import CustomSelect from "../../components/CustomSelect.vue";
</script>

<script lang="ts">
import {defineComponent} from "vue";
import {mapGetters} from "vuex";
import CatalogService from "@/services/CatalogService";
import type ResponseData from "@/types/ResponseData";
import type CatalogWizard2Object from "@/types/CatalogWizard2Object"
import AxiosResponse from "axios";

export default defineComponent({
  name: "brandNameSearch",
  data() {

    return {
      catalogWizardList: new Array<CatalogWizard2Object>(),

    };
  },

  created: function () {
    CatalogService.catalogWizard2(this.$route.params.brandName)
        .then((response: AxiosResponse<CatalogWizard2Object[]>) => {
          
          for (let entry of response) {
            console.log(entry); // 1, "string", false
            this.catalogWizardList.push(entry)
          }


          // response.data.array.forEach(element => {
            
          // });
          // this.catalogWizardList = response.data
          console.log(this.catalogWizardList)
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
  <main class="container-fluid pb-5">
    <h1 class="mb-4 large">Оригинальный каталог</h1>

    <div class="row">
      <div class="col-12 col-xl-7">
        <h2 class="mt-0 mb-5 large bold">
          <RouterLink to="/search-brand" class="clear">
            <ui-icon class="vertical-align-middle">arrow_back</ui-icon> Honda
          </RouterLink>
        </h2>

        <div class="row gy-5" v-for="catalogWizardItem in catalogWizardList">
          <div class="col-12 col-xl-4">
            <div class="mb-2">{{ catalogWizardItem.name }}</div>
            <CustomSelect
              outlined
              fullwidth
              :options="[{ label: 'Модель' }]"
            ></CustomSelect>
          </div>
          <!-- <div class="col-12 col-xl-4">
            <div class="mb-2">Год</div>
            <CustomSelect
              outlined
              fullwidth
              :options="[{ label: 'Год' }]"
            ></CustomSelect>
          </div>
          <div class="col-12 col-xl-4">
            <div class="mb-2">Регион</div>
            <CustomSelect
              outlined
              fullwidth
              :options="[{ label: 'Регион' }]"
            ></CustomSelect>
          </div>
          <div class="col-12 col-xl-4">
            <div class="mb-2">Дверей</div>
            <CustomSelect
              outlined
              fullwidth
              :options="[{ label: 'Дверей' }]"
            ></CustomSelect>
          </div>
          <div class="col-12 col-xl-4">
            <div class="mb-2">Area</div>
            <CustomSelect
              outlined
              fullwidth
              :options="[{ label: 'Area' }]"
            ></CustomSelect>
          </div>
          <div class="col-12 col-xl-4">
            <div class="mb-2">Коробка передач</div>
            <CustomSelect
              outlined
              fullwidth
              :options="[{ label: 'Коробка передач' }]"
            ></CustomSelect>
          </div>
          <div class="col-12 col-xl-4">
            <div class="mb-2">Тип коробки передач</div>
            <CustomSelect
              outlined
              fullwidth
              :options="[{ label: 'Тип коробки передач' }]"
            ></CustomSelect>
          </div>
          <div class="col-12 col-xl-4">
            <div class="mb-2">Country</div>
            <CustomSelect
              outlined
              fullwidth
              :options="[{ label: 'Country' }]"
            ></CustomSelect>
          </div> -->

          <div class="mt-5">
            <router-link v-button.raised to="/search-brand/honda/accord"
              >Показать автомобили</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-12 col-xl-5 order-xl-last order-first">
        <AsideSearch />
      </div>
    </div>

    <div style="height: 100px" />
  </main>
</template>
