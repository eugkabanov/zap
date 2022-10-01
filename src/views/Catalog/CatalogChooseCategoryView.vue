<script setup lang="ts">
import CatalogLayout from "../../components/Layout/CatalogLayout.vue";
import CategoryButton from "../../components/Catalog/CategoryButton.vue";
import ProductCard from "../../components/Catalog/ProductCard.vue";
import { ref } from "vue";

const list = Array(30).fill("");

const sortingOptions = [
  {
    label: "По цене, сначала дешевые",
    value: "price",
  },
  {
    label: "По цене, сначала дорогие",
    value: "price",
  },
];
const viewOptions = [
  {
    icon: "view_list",
  },
  { icon: "view_module" },
];
const selectedViewOption = ref(0);
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
        <div class="mb-3 row g-3">
          <ui-form-field class="col-12 col-md-5"
            ><ui-textfield outlined fullwidth
              >Поиск
              <template #after>
                <ui-textfield-icon trailing>search</ui-textfield-icon>
              </template>
            </ui-textfield>
          </ui-form-field>
          <ui-form-field class="col-8 col-md-5 ms-md-auto">
            <label class="me-3 d-none d-md-inline">Сортировка:</label>
            <ui-select outlined fullwidth :options="sortingOptions" />
          </ui-form-field>
          <div class="col-auto ms-auto ms-md-3">
            <ui-segmented-buttons
              v-model="selectedViewOption"
              :items="viewOptions"
              single-select
            ></ui-segmented-buttons>
          </div>
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
