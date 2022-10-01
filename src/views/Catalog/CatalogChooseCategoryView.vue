<script setup lang="ts">
import { ref } from "vue";
import CatalogLayout from "../../components/Layout/CatalogLayout.vue";
import CategoryButton from "../../components/Catalog/CategoryButton.vue";
import ProductCard from "../../components/Catalog/ProductCard.vue";
import ViewOptions from "../../components/Catalog/ViewOptions.vue";

const list = Array(30).fill("");

const selectedViewOption = ref(0);
const setSelectedViewOption = (value: number) =>
  (selectedViewOption.value = value);
</script>

<template>
  <CatalogLayout>
    <template #aside>
      <div :class="$tt('headline2')" class="mb-4">Каталог</div>
      <div>
        <CategoryButton href="/catalog/wheels" caption="Шины легковые" />
        <CategoryButton href="/catalog/wheels" caption="Шины грузовые" />
        <CategoryButton href="/catalog/wheels" caption="Шины индустриальные" />
        <CategoryButton
          href="/catalog/wheels"
          caption="Шины сельскохозяйственные"
        />
        <CategoryButton href="/catalog/wheels" caption="Шины квадро" />
        <CategoryButton href="/catalog/wheels" caption="Шины мото" />
        <CategoryButton href="/catalog/wheels" caption="Шины авто" />
        <CategoryButton href="/catalog/wheels" caption="Камеры мото" />
      </div>
    </template>
    <template #main>
      <div class="pb-5">
        <div class="mb-5">
          <span :class="$tt('headline1')">Шины</span>
          <span :class="$tt('body2')" class="ms-2 hint">250 226 товаров</span>
        </div>
        <div class="mb-3">
          <ViewOptions
            :selected-view-option="selectedViewOption"
            :set-selected-view-option="setSelectedViewOption"
          />
        </div>

        <div class="row g-3">
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
