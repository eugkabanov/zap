<script setup lang="ts">
defineProps<{
  title: string;
  image: string;
  brand: string;
  inventoryId: string;
  price: string;
}>();
</script>

<template>
  <div class="product-card">
    <!-- src hardcoded because of build error see more at: https://vitejs.dev/guide/assets.html#new-url-url-import-meta-url -->
    <img
      class="product-card__image mb-3"
      src="@/assets/catalog/wheel.png"
      alt="product image"
    />
    <div :class="$tt('body2')">{{ title }}</div>
    <div :class="$tt('body2')" class="hint">{{ brand }}</div>
    <div :class="$tt('body2')" class="hint">Артикул: {{ inventoryId }}</div>
    <div :class="$tt('body1')" class="large my-1">{{ price }}&nbsp;₽</div>
    <ui-button raised>В корзину</ui-button>
  </div>
</template>

<style scoped lang="scss">
.product-card {
  padding: 20px 25px;
  background-color: white;

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
