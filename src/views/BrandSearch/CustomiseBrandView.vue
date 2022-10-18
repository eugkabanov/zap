<script setup lang="ts">
import AsideSearch from "../../components/Search/AsideSearch.vue";
</script>

<template>
  <main class="container-fluid py-5">
    <h1 class="mb-5">Оригинальный каталог</h1>

    <div class="row">
      <div class="col-12 col-xl-7">
        <h2 class="mb-4">
          <RouterLink to="/search-brand" class="clear">
            <ui-icon class="vertical-align-middle">arrow_back</ui-icon> Honda
          </RouterLink>
        </h2>

        <div class="row gy-4">
          <div class="col-12 col-xl-4">
            <div class="mb-2">Модель</div>
            <ui-select
              outlined
              fullwidth
              :options="[{ label: 'Модель' }]"
            ></ui-select>
          </div>
          <div class="col-12 col-xl-4">
            <div class="mb-2">Год</div>
            <ui-select
              outlined
              fullwidth
              :options="[{ label: 'Год' }]"
            ></ui-select>
          </div>
          <div class="col-12 col-xl-4">
            <div class="mb-2">Регион</div>
            <ui-select
              outlined
              fullwidth
              :options="[{ label: 'Регион' }]"
            ></ui-select>
          </div>
          <div class="col-12 col-xl-4">
            <div class="mb-2">Дверей</div>
            <ui-select
              outlined
              fullwidth
              :options="[{ label: 'Дверей' }]"
            ></ui-select>
          </div>
          <div class="col-12 col-xl-4">
            <div class="mb-2">Area</div>
            <ui-select
              outlined
              fullwidth
              :options="[{ label: 'Area' }]"
            ></ui-select>
          </div>
          <div class="col-12 col-xl-4">
            <div class="mb-2">Коробка передач</div>
            <ui-select
              outlined
              fullwidth
              :options="[{ label: 'Коробка передач' }]"
            ></ui-select>
          </div>
          <div class="col-12 col-xl-4">
            <div class="mb-2">Тип коробки передач</div>
            <ui-select
              outlined
              fullwidth
              :options="[{ label: 'Тип коробки передач' }]"
            ></ui-select>
          </div>
          <div class="col-12 col-xl-4">
            <div class="mb-2">Country</div>
            <ui-select
              outlined
              fullwidth
              :options="[{ label: 'Country' }]"
            ></ui-select>
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
  </main>
</template>
