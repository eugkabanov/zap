<script setup lang="ts">
import { ref } from "vue";
import BrandGroupsView from "@/components/Search/BrandGroupsView.vue";
import BrandNodesView from "@/components/Search/BrandNodesView.vue";
import BrandProductFilters from "../../components/Search/BrandProductFilters.vue";
import BrandProductNodeFilters from "../../components/Search/BrandProductNodeFilters.vue";
import BalanceBar from "@/components/Profile/BalanceBar.vue";
import CustomCollapse from "@/components/CustomControls/CustomCollapse.vue";
</script>

<script lang="ts">
import {defineComponent} from "vue";
import {mapGetters} from "vuex";
import CatalogService from "@/services/CatalogService";
import type ResponseData from "@/types/ResponseData";
import type UnitObject from "@/types/UnitObject"
import type GroupObject from "@/types/GroupObject"
import type CategoryObject from "@/types/CategoryObject"
import type VehicleObject from "@/types/VehicleObject"

export default defineComponent({
  name: "brandNameTypeModelSearch",
  data() {
    return {
      searchType: 1,
      isFiltersOpen: false,
      ssd: this.$route.params.type,
      brandName: this.$route.params.brandName,
      model: this.$route.params.model,
      categoryId: -1,
      categories: [] as CategoryObject[],
      units: [] as UnitObject[],
      groups: [] as GroupObject[],
      dataFormat: { label: 'name', value: 'quickgroupid', isLeaf: 'searchable', children: 'childGroups' },
      selectedGroup: '',
      vehicleInfo: {} as VehicleObject,
      listQuickDetails: [] as CategoryObject[]
    };
  },

  mounted: function () {
    this.getVehicleInfo()
    this.listUnits()
    this.listCategories()
    this.listQuikGroups()
  },

  created: function () {
    
  },

  methods: {

    loadListQuickDetail(event: string) {
      console.log(event)
      this.listQuickDetails.length = 0
      CatalogService.listQuickDetail(this.brandName, this.ssd, this.model, event)
        .then((response: ResponseData) => {
          for (let item of response.data.categories) {
            // console.log(item)
            this.listQuickDetails.push(item)
          }
        })

        .catch((e: Error) => {
          console.log(e);
        })
    },

    getVehicleInfo() {

      CatalogService.getVehicleInfo(this.brandName, this.ssd, this.model)
        .then((response: ResponseData) => {
          this.vehicleInfo = response.data
        })

        .catch((e: Error) => {
          console.log(e);
        })
    },

    listQuikGroups() {
      CatalogService.listQuickGroup(this.brandName, this.ssd, this.model)
        .then((response: ResponseData) => {
          for (let item of response.data.childGroups) {
            this.groups.push(item)           
          }
        })

        .catch((e: Error) => {
          console.log(e);
        })
    },

    listUnits(categoryId: string) {
      this.units.length = 0
      CatalogService.listUnits(this.brandName, this.ssd, this.model, categoryId)
        .then((response: ResponseData) => {
          for (let item of response.data) {
            this.units.push(item)
          }
        })

        .catch((e: Error) => {
          console.log(e);
        })
    },
    

    listCategories() {
      CatalogService.listCategories(this.brandName, this.ssd, this.model, this.categoryId)
        .then((response: ResponseData) => {
          
          console.log(response.data)

          for (let item of response.data) {
            this.categories.push(item)
          }
        })

        .catch((e: Error) => {
          console.log(e);
        })
    }    
  },
});
</script>


<template>
  <main class="container-fluid pb-4">
    <div class="row">
      <h1 class="mb-4 mt-5 col-auto large">
        <ui-icon-button class="d-xl-none" v-model="isFiltersOpen"
          >menu_open</ui-icon-button
        >Оригинальный каталог
      </h1>
      <div class="col-auto ms-auto">
        <BalanceBar class="mt-2 mb-3" />
      </div>
    </div>

    <h2 style="margin-bottom: 40px" class="large bold">
      <!-- <RouterLink :to="{ name: 'brandNameTypeSearch', params: { brandName: brandName, type: ssd}}" class="clear"> -->
      <a @click="$router.go(-1)" class="clear">
        <ui-icon class="vertical-align-middle">arrow_back</ui-icon> {{vehicleInfo.brand }} {{vehicleInfo.name }}
      </a>
      <!-- <span
        style="vertical-align: middle; padding-left: 26px"
        class="fw-400 small hint"
        ><ui-icon
          style="padding-bottom: 4px"
          outlined
          class="vertical-align-middle"
          >directions_car</ui-icon
        >
        Добавить в гараж</span 
      > -->
    </h2>

    <div style="margin-bottom: 40px" class="row align-items-center">
      <div class="col-auto">
        <ui-chips
          v-model="searchType"
          type="choice"
          :options="[
            { label: 'Поиск по группам', value: 0 },
            { label: 'Список узлов', value: 1 },
          ]"
        ></ui-chips>
      </div>

      <div class="col-auto">
        <RouterLink to="/search-brand">Выбрать другой автомобиль</RouterLink>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-3 d-none d-xl-block">
        <div class="pt-2" v-if="searchType === 0">
          <!-- <div class="mb-3">
            <div class="mb-2">Название узла, детали</div>
            <ui-textfield fullwidth outlined></ui-textfield>
          </div> -->

          <ui-tree 
            :data="groups" 
            :dataFormat="dataFormat"
            @update:model-value="loadListQuickDetail($event)"
          >


          </ui-tree>
          <!-- <CustomCollapse>
            <template #title>Детали для ТО</template>
            <div class="ps-4">
              <RouterLink
                to="/search-brand/honda/accord/cupe"
                class="fw-400 d-block clear mb-3"
                >Фильтр масляный</RouterLink
              >
            </div>
          </CustomCollapse> -->
          <!-- <BrandProductFilters /> -->
        </div>
        <div v-if="searchType === 1">
          <!-- <BrandProductNodeFilters /> -->
          <div class="node-filter-item" v-for="category in categories">
            <a @click="listUnits(category.categoryid)" class="clear">{{ category.name }}</a>
          </div>

          
        </div>
      </div>

      <div class="col-12 offset-xl-1 col-xl-8">
        <!-- Search Type 1 -->
        <div v-if="searchType === 0">
          <!-- <BrandGroupsView /> -->
          <template v-for="quickCategory of listQuickDetails">
            <div class="large bold mb-2">{{ quickCategory.name}}</div>

            <template v-for="unit of quickCategory.units">
              <div style="background-color: #f5f5f7" class="p-3 mb-3">
                {{unit.name}}
              </div>

              <div class="row gx-0 gy-2">
                <div class="col-12 col-lg-4 col-xl-3">
                  <img class="w-100" :src="unit.imageurl.replace('%size%', '250')" alt="" />
                </div>
                <div class="offset-xl-1 col-12 col-lg-8">
                  <!-- <CustomCollapse>
                    <template #title> -->
                      <div class="row gx-0 align-items-center">
                        <div class="col-6">OEM</div>
                        <div class="col-6">Наименование</div>
                      </div>
                    <!-- </template>
                  </CustomCollapse> -->
                  <CustomCollapse v-for="detail of unit.details">
                    <template #title>
                      <div class="row gx-0 align-items-center">
                        <div class="col-6">
                          <RouterLink v-if="detail.oem.length>0"  :to="{ name: 'productSearch', params: { productId: detail.oem}}">
                            {{detail.oem}}
                          </RouterLink>
                        </div>
                        <div class="col-6">{{detail.name}}</div>
                      </div>
                    </template>

                    <div class="ps-5" v-for="attribute of detail.attributes">
                      <div class="row gx-0 mb-2 fw-400">
                        <div class="col-4">
                          <div class="row gx-0 align-items-end">
                            <div class="col-auto">{{attribute.name}}</div>
                            <div class="col">
                              <div class="dotted" />
                            </div>
                          </div>
                        </div>
                        <div class="col-auto ms-1">{{attribute.value}}</div>
                      </div>
                    </div>
                  </CustomCollapse>
                </div>
              </div>
            </template>
          </template>

        </div>

        <!-- Search Type 2 -->
        <div v-if="searchType === 1">
          <div class="row gy-3">
            <div class="col-12 col-md-6 col-xl-3" v-for="unit in units">
              <RouterLink :to="{name: 'brandSearchProduct', params: { brandName: brandName, type: unit.ssd, model: model, productId: unit.unitid}}" class="clear">
                <div style="border: 1px solid #d9d9de" class="mb-2">
                  <img
                    class="w-100"
                    style="height: 200px; object-fit: contain"
                    :src="unit.imageurl.replace('%size%', 200)"
                    alt=""
                  />
                </div>
                <div>{{ unit.name }}</div>
              </RouterLink>
            </div>
          </div>
          <!-- <BrandNodesView /> -->
        </div>
      </div>
    </div>
  </main>

  <ui-drawer type="modal" v-model="isFiltersOpen">
    <ui-drawer-content class="p-4">
      <!-- drawer needs at lease one focusable element -->
      <div tabindex="1" />
      <div v-if="searchType === 0">
        <BrandProductFilters />
      </div>
      <div v-if="searchType === 1">
        <BrandProductNodeFilters />
      </div>
    </ui-drawer-content>
  </ui-drawer>
</template>

<style scoped lang="scss">
@use "@/styles/vars";

.mdc-drawer--modal {
  position: fixed;
  left: 0;
  top: 0;
}

.node-filter-item {
  padding: 15px 0;
  &:not(:last-child) {
    border-bottom: 1px solid #d9d9de;
  }
}
</style>
