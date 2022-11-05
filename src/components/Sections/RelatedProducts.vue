<script setup lang="ts">
import ProductCard from "../../components/Catalog/ProductCard.vue";
import CustomSelect from "../../components/CustomSelect.vue";

const sortingOptions = [
  {
    label: "Все",
    value: "all",
  },
  { label: "ALTENZO", value: "ALTENZO" },
  { label: "AMTEL", value: "AMTEL" },
  { label: "APLUS", value: "APLUS" },
  { label: "BARUM", value: "BARUM" },
  { label: "BELSHINA", value: "BELSHINA" },
  { label: "BF GOODRICH", value: "BF GOODRICH" },
];

const list = [1, 2, 3, 4];
</script>

<template>
  <div class="container-fluid">
    <div class="row g-2">
      <div class="col-6 col-md-auto" :class="$tt('headline2')">
        Аналогичные товары
      </div>
      <div class="col-12 col-md-4 ms-md-4">
        <ui-form-field>
          <label class="me-3">Производитель</label>
          <CustomSelect outlined fullwidth value :options="sortingOptions" />
        </ui-form-field>
      </div>
      <div class="ms-auto col-auto">
        <ui-button style="border-color: #bfbfc3" class="p-0" outlined
          ><ui-icon style="color: #0069c8">chevron_left</ui-icon></ui-button
        >
        <ui-button style="border-color: #bfbfc3" class="p-0 ms-2" outlined
          ><ui-icon style="color: #0069c8">chevron_right</ui-icon></ui-button
        >
      </div>
    </div>
    <div class="row g-3 mt-3">
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
  </div>
</template>
