<script setup lang="ts">
import AsideSearch from "../../components/Search/AsideSearch.vue";
import CustomSelect from "../../components/CustomSelect.vue";
import BalanceBar from "@/components/Profile/BalanceBar.vue";
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
            <ui-icon class="vertical-align-middle">arrow_back</ui-icon> Honda
          </RouterLink>
        </h2>

        <div class="row gy-4">
          <div class="col-12 col-xl-4">
            <div class="mb-2">Модель</div>
            <CustomSelect
              class="thin"
              outlined
              fullwidth
              :options="[{ label: 'Hakkapeliitta' }]"
            ></CustomSelect>
          </div>
          <div class="col-12 col-xl-4">
            <div class="mb-2">Год</div>
            <CustomSelect
              class="thin"
              outlined
              fullwidth
              :options="[{ label: '2012' }]"
            ></CustomSelect>
          </div>
          <div class="col-12 col-xl-4">
            <div class="mb-2">Регион</div>
            <CustomSelect
              class="thin"
              outlined
              fullwidth
              :options="[{ label: 'Корея' }]"
            ></CustomSelect>
          </div>
          <div class="col-12 col-xl-4">
            <div class="mb-2">Дверей</div>
            <CustomSelect
              class="thin"
              outlined
              fullwidth
              :options="[{ label: '4' }]"
            ></CustomSelect>
          </div>
          <div class="col-12 col-xl-4">
            <div class="mb-2">Area</div>
            <CustomSelect
              class="thin"
              outlined
              fullwidth
              :options="[{ label: '300' }]"
            ></CustomSelect>
          </div>
          <div class="col-12 col-xl-4">
            <div class="mb-2">Коробка передач</div>
            <CustomSelect
              class="thin"
              outlined
              fullwidth
              :options="[{ label: 'Автомат' }]"
            ></CustomSelect>
          </div>
          <div class="col-12 col-xl-4">
            <div class="mb-2">Тип коробки передач</div>
            <CustomSelect
              class="thin"
              outlined
              fullwidth
              :options="[{ label: 'Автомат' }]"
            ></CustomSelect>
          </div>
          <div class="col-12 col-xl-4">
            <div class="mb-2">Country</div>
            <CustomSelect
              class="thin"
              outlined
              fullwidth
              :options="[{ label: 'Россия' }]"
            ></CustomSelect>
          </div>

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
