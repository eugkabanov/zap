<script setup lang="ts">
import { ref } from "vue";
import BrandGroupsView from "@/components/Search/BrandGroupsView.vue";
import BrandNodesView from "@/components/Search/BrandNodesView.vue";
import BrandProductFilters from "../../components/Search/BrandProductFilters.vue";
import BrandProductNodeFilters from "../../components/Search/BrandProductNodeFilters.vue";
import BalanceBar from "@/components/Profile/BalanceBar.vue";

const isFiltersOpen = ref(false);
const searchType = ref(0);
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
      <RouterLink to="/search-brand/honda" class="clear">
        <ui-icon class="vertical-align-middle">arrow_back</ui-icon> Honda ACCORD
        IX, Купе 3.5
      </RouterLink>
      <span
        style="vertical-align: middle; padding-left: 26px"
        class="fw-400 small hint"
        ><ui-icon
          style="padding-bottom: 4px"
          outlined
          class="vertical-align-middle"
          >directions_car</ui-icon
        >
        Добавить в гараж</span
      >
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
          <BrandProductFilters />
        </div>
        <div v-if="searchType === 1">
          <BrandProductNodeFilters />
        </div>
      </div>

      <div class="col-12 offset-xl-1 col-xl-8">
        <!-- Search Type 1 -->
        <div v-if="searchType === 0">
          <BrandGroupsView />
        </div>

        <!-- Search Type 2 -->
        <div v-if="searchType === 1">
          <BrandNodesView />
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
</style>
