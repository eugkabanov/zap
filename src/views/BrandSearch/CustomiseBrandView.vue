<script setup lang="ts">
import AsideSearch from "../../components/Search/AsideSearch.vue";
import CustomSelect from "../../components/CustomSelect.vue";
import BalanceBar from "@/components/Profile/BalanceBar.vue";
</script>

<script lang="ts">
import {defineComponent} from "vue";
import {mapGetters} from "vuex";
import CatalogService from "@/services/CatalogService";
import type ResponseData from "@/types/ResponseData";
import type CatalogWizard2Object from "@/types/CatalogWizard2Object"
import type CatalogObject from "@/types/CatalogObject";

export default defineComponent({
  name: "brandNameSearch",
  data() {
    return {
      catalogWizardList: [] as CatalogWizard2Object[],
      ssd: '',
      brandName: this.$route.params.brandName,
      catalogInfo: {} as CatalogObject
    };
  },

  mounted: function () {
    this.getCatalogInfo()
    this.catalogWizard2()
  },

  created: function () {
    
  },

  computed: {
    ...mapGetters(["isAuthenticated"])
  },

  methods: {
    invertFilterDetermined(value: boolean): boolean {
      if (value)
        return false
      else
        return false
    },

    getCatalogInfo() {
      CatalogService.getCatalogInfo(this.brandName)
        .then((response: ResponseData) => {
          this.catalogInfo = response.data
        })

        .catch((e: Error) => {
          console.log(e);
        })
    },

    catalogWizard2() {
      this.catalogWizardList.length = 0
      CatalogService.catalogWizard2(this.brandName, this.ssd)
        .then((response: ResponseData) => {
          for (let item of response.data.wizardStepObjectList) {
            console.log(item); // 1, "string", false
            this.catalogWizardList.push(item)
          }
        })

        .catch((e: Error) => {
          console.log(e);
        })
    },

    onSelected(selected) {
      this.ssd = selected.value
      this.catalogWizard2()
      console.log(selected)
      // this.selected = selected.value;
    },

    defaultLabel(item: CatalogWizard2Object) {
      if(item.determined) {
        return item.value
      } else {
        return ' '
      }
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

    <div class="row">
      <div class="col-12 col-xl-7">
        <h2 class="mt-0 mb-5 large bold">
          <RouterLink to="/search-brand" class="clear">
            <ui-icon class="vertical-align-middle">arrow_back</ui-icon> {{ catalogInfo.brand }}
          </RouterLink>
        </h2>

        <div class="row gy-4" >
          <div class="col-12 col-xl-4" v-for="catalogWizardItem in catalogWizardList">
            <div class="mb-2">{{ catalogWizardItem.name }}</div>
            <CustomSelect
              class="thin"
              outlined
              fullwidth
              :optionFormat="{ label: 'value', value: 'key' }"
              :options="catalogWizardItem.options"
              :defaultValue="' '"
              :defaultLabel="defaultLabel(catalogWizardItem)"
              :disabled="catalogWizardItem.determined"
              @selected="onSelected($event)"
            ></CustomSelect>
          </div>

          <div class="mt-5" v-if="ssd.length>0">
            <RouterLink v-button.raised :to="{ name: 'brandNameTypeSearch', params: { brandName: brandName, type:  ssd}}"
              >Показать автомобили</RouterLink>
          </div>
        </div>    
      </div>
      <div class="col-12 col-xl-5 order-xl-last order-first">
        <!-- <AsideSearch /> -->
      </div>
    </div>

    <div style="height: 100px" />
  </main>
</template>
