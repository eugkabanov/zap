<script setup lang="ts">
defineProps<{
  hideAddedProduct: Function;
  detail_name: string;
  itm_no: string;
  make_name: string;
  quantity: number;
  price: number;
}>();
</script>

<template>
  <!-- leave title for close action -->
  <ui-dialog-title>
    <div :class="$tt('body2')" class="cart-dialog__title large x-bold mb-3">
      Добавлено в корзину
    </div>
  </ui-dialog-title>
  <ui-dialog-content
    style="padding-left: 30px; padding-right: 30px; padding-bottom: 30px"
  >
    <div class="row cart-dialog__content">
      <div class="col-auto">
<!--        <img-->
<!--          style="border: 1px solid #d9d9de"-->
<!--          src="@/assets/catalog/wheel.png"-->
<!--          alt=""-->
<!--          width="104"-->
<!--        />-->
      </div>
      <div class="col">
        <div :class="$tt('body1')" class="bold mb-2">
          {{ detail_name }}
        </div>
        <div :class="$tt('body1')" class="small">
          <span class="hint">Бренд:</span> {{ make_name }} <br /><span class="hint"
            >Артикул:</span
          >
          {{ itm_no }}
        </div>
        <div class="row align-items-end mt-3">
          <div class="col-auto" :class="$tt('body1')">В корзине {{ quantity }} шт</div>
          <div class="col-auto ms-auto" :class="$tt('headline3')">{{ price }} ₽</div>
        </div>
      </div>
    </div>

    <div class="row g-3 mt-4">
      <div class="col-12 col-md-6">
        <ui-button
          id="continue-shopping"
          style="color: #0069c8"
          class="w-100"
          outlined
          @click="hideAddedProduct"
          >Продолжить&nbsp;покупки</ui-button
        >
      </div>
      <div class="col-12 col-md-6">
        <RouterLink to="/cart">
          <ui-button 
            id="go-to-cart"
            class="w-100"
            raised
            >Перейти&nbsp;в&nbsp;корзину</ui-button
          >
        </RouterLink>
      </div>
    </div>
  </ui-dialog-content>
</template>