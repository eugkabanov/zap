<script setup lang="ts">
import AsideSearch from "../../components/Search/AsideSearch.vue";
import CustomSelect from "../../components/CustomSelect.vue";
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
            <CustomSelect
              outlined
              fullwidth
              :options="[{ label: 'Модель' }]"
            ></CustomSelect>
          </div>
          <div class="col-12 col-xl-4">
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
