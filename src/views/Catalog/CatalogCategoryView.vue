<script setup lang="ts">
import { ref } from "vue";
import CatalogLayout from "../../components/Layout/CatalogLayout.vue";
import ProductCard from "../../components/Catalog/ProductCard.vue";
import ViewOptions from "../../components/Catalog/ViewOptions.vue";
import ProductListCard from "../../components/Catalog/ProductListCard.vue";
import CustomCollapse from "../../components/CustomCollapse.vue";
import BreadCrumbs from "../../components/Page/BreadCrumbs.vue";

const list = Array(30).fill("");

const selectedViewOption = ref(1);
const setSelectedViewOption = (value: number) =>
  (selectedViewOption.value = value);

const expandBrands = ref(false);
</script>

<template>
  <CatalogLayout>
    <template #aside>
      <div class="row align-items-baseline mb-4">
        <div :class="$tt('headline2')" class="col-auto">Фильтры</div>
        <div :class="$tt('body2')" class="col-auto hint ms-auto">Очистить</div>
      </div>

      <div class="row flex-column filters">
        <CustomCollapse default-expanded label="Цена, руб">
          <div class="row">
            <ui-form-field class="col-6">
              <ui-textfield outlined fullwidth />
            </ui-form-field>
            <ui-form-field class="col-6">
              <ui-textfield outlined fullwidth />
            </ui-form-field>
          </div>
        </CustomCollapse>
        <CustomCollapse default-expanded label="Производитель">
          <div class="row flex-column">
            <ui-form-field>
              <ui-checkbox input-id="brand-1" />
              <label for="brand-1">ALTENZO</label>
            </ui-form-field>
            <ui-form-field>
              <ui-checkbox input-id="brand-2" />
              <label for="brand-2">AMTEL</label>
            </ui-form-field>
            <ui-form-field>
              <ui-checkbox input-id="brand-3" />
              <label for="brand-3">APLUS</label>
            </ui-form-field>
            <ui-form-field>
              <ui-checkbox input-id="brand-4" />
              <label for="brand-4">BARUM</label>
            </ui-form-field>

            <ui-collapse v-model="expandBrands">
              <template v-if="!expandBrands" #toggle>
                <div :class="$tt('body1')" class="link">Показать все (2)</div>
              </template>
              <div class="row flex-column">
                <ui-form-field>
                  <ui-checkbox input-id="brand-5" />
                  <label for="brand-5">BELSHINA</label>
                </ui-form-field>
                <ui-form-field>
                  <ui-checkbox input-id="brand-6" />
                  <label for="brand-6">BF GOODRICH</label>
                </ui-form-field>
              </div>
            </ui-collapse>
          </div>
        </CustomCollapse>
        <CustomCollapse default-expanded label="Профиль (%)">
          <div class="row flex-column">
            <ui-form-field>
              <ui-checkbox input-id="profile-1" />
              <label for="profile-1">70</label>
            </ui-form-field>
          </div>
        </CustomCollapse>
      </div>
    </template>
    <template #main>
      <div class="pb-5">
        <BreadCrumbs
          class="mb-4"
          :crumbs="[
            { title: 'Главная', href: '/' },
            { title: 'Каталог', href: '/catalog' },
            {
              title: 'Шины индустриальные',
              href: '/catalog-choose/oil-winter',
            },
          ]"
        />
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
              productId="123"
              productCategory="wheel"
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
              productId="123"
              productCategory="wheel"
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

<style scoped lang="scss">
.filters {
  & > * {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  & > *:not(:last-child) {
    border-bottom: 1px solid #d9d9de;
  }
}
</style>
