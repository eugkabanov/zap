<script setup lang="ts">
import { ref } from "vue";
import CatalogLayout from "../../components/Layout/CatalogLayout.vue";
import CategoryButton from "../../components/Catalog/CategoryButton.vue";
import ProductCard from "../../components/Catalog/ProductCard.vue";
import ViewOptions from "../../components/Catalog/ViewOptions.vue";
import ProductListCard from "../../components/Catalog/ProductListCard.vue";

const list = Array(30).fill("");

const selectedViewOption = ref(1);
const setSelectedViewOption = (value: number) =>
  (selectedViewOption.value = value);
</script>

<template>
  <CatalogLayout>
    <template #aside>
      <div class="row align-items-baseline mb-4">
        <div :class="$tt('headline2')" class="col-auto">Фильтры</div>
        <div :class="$tt('body2')" class="col-auto hint ms-auto">Очистить</div>
      </div>
    </template>
    <template #main>
      <div class="pb-5">
        <div class="mb-5">
          <span :class="$tt('headline1')">Шины индустриальные</span>
          <span :class="$tt('body2')" class="ms-2 hint">56 товаров</span>
        </div>
        <div class="mb-3">
          <ViewOptions
            :selected-view-option="selectedViewOption"
            :set-selected-view-option="setSelectedViewOption"
          />
        </div>

        <div v-if="selectedViewOption === 1" class="row g-3">
          <article
            v-for="item of list"
            v-bind:key="item"
            class="col-12 col-sm-6 col-md-4 col-xxl-3"
          >
            <ProductCard
              title="Название товара"
              image="@/assets/catalog/oil.png"
              brand="BREND"
              inventoryId="L03412960404"
              price="5841"
            />
          </article>
        </div>
        <div v-else class="row g-3">
          <article v-for="item of list" v-bind:key="item" class="col-12">
            <ProductListCard
              title="Название товара"
              image="@/assets/catalog/oil.png"
              brand="BREND"
              inventoryId="L03412960404"
              price="5841"
            />
          </article>
        </div>

        <div class="mt-5 row justify-content-center">
          <div class="col-auto">
            <ui-button outlined style="color: #76767a" :class="$tt('body1')"
              >Загрузить еще</ui-button
            >
          </div>
        </div>
      </div>
    </template>
  </CatalogLayout>
</template>
