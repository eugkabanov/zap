<script setup lang="ts">
defineProps<{
  productId: string;
  productCategory: string;
  title: string;
  image: string;
  brand: string;
  inventoryId: string;
  price: string;
}>();
</script>

<template>
  <RouterLink
    :to="`/catalog/${productCategory}/${productId}`"
    class="product-card"
  >
    <!-- src hardcoded because of build error see more at: https://vitejs.dev/guide/assets.html#new-url-url-import-meta-url -->
    <img
      class="product-card__image mb-3"
      src="@/assets/catalog/wheel.png"
      alt="product image"
    />
    <div class="small bold">{{ title }}</div>
    <div class="small hint">{{ brand }}</div>
    <div class="small hint">Артикул: {{ inventoryId }}</div>
    <div :class="$tt('body1')" class="large my-2">{{ price }}&nbsp;₽</div>
    <ui-button raised>В&nbsp;корзину</ui-button>
  </RouterLink>
</template>

<style scoped lang="scss">
.product-card {
  display: block;

  padding: 20px 25px;
  background-color: white;

  &,
  &:hover {
    color: inherit;
  }

  &__image {
    width: 100%;
    height: 180px;
    object-fit: contain;
  }

  button {
    width: 100%;
  }
}
</style>
