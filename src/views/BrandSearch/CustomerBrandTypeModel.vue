<script setup lang="ts">
import { ref } from "vue";
import BrandGroupsView from "@/components/Search/BrandGroupsView.vue";
import BrandNodesView from "@/components/Search/BrandNodesView.vue";
import BrandProductFilters from "../../components/Search/BrandProductFilters.vue";
import BrandProductNodeFilters from "../../components/Search/BrandProductNodeFilters.vue";

const isFiltersOpen = ref(false);
const searchType = ref(0);
</script>

<template>
  <main class="container-fluid pb-4">
    <h1 class="mb-4 large">
      <ui-icon-button class="d-xl-none" v-model="isFiltersOpen"
        >menu_open</ui-icon-button
      >Оригинальный каталог
    </h1>

    <h2 class="mb-4 large bold">
      <RouterLink to="/search-brand/honda" class="clear">
        <ui-icon class="vertical-align-middle">arrow_back</ui-icon> Honda ACCORD
        IX, Купе 3.5
      </RouterLink>
      <span class="small hint ms-2"
        ><ui-icon outlined class="vertical-align-middle"
          >directions_car</ui-icon
        >
        Добавить в гараж</span
      >
    </h2>

    <div class="row align-items-center mb-4">
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
        <div v-if="searchType === 0">
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
