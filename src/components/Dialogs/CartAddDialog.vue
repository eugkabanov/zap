<script setup lang="ts">
defineProps<{
  hideAddedProduct: Function;
}>();
</script>

<template>
  <!-- leave title for close action -->
  <ui-dialog-title>
    <div :class="$tt('body2')" class="cart-dialog__title large">
      Добавлено в корзину
    </div>
  </ui-dialog-title>
  <ui-dialog-content>
    <div class="row cart-dialog__content">
      <div class="col-auto">
        <img src="@/assets/catalog/wheel.png" alt="" width="104" />
      </div>
      <div class="col">
        <div :class="$tt('body1')" class="bold mb-1">
          Шина зимняя 245/60R18 109T XL Hakkapeliitta 10p SUV TL (шип.)
        </div>
        <div :class="$tt('body1')" class="small">
          Бренд: <span class="hint">NOKIAN</span> <br />Артикул:
          <span class="hint">TS32701</span>
        </div>
        <div class="row align-items-end mt-3">
          <div class="col-auto" :class="$tt('body1')">4 шт</div>
          <div class="col-auto ms-auto" :class="$tt('headline3')">5841 ₽</div>
        </div>
      </div>
    </div>

    <div class="row g-3 mt-4">
      <div class="col-12 col-md-6">
        <ui-button class="w-100" outlined @click="hideAddedProduct"
          >Продолжить покупки</ui-button
        >
      </div>
      <div class="col-12 col-md-6">
        <RouterLink to="/cart">
          <ui-button class="w-100" raised>Перейти в корзину</ui-button>
        </RouterLink>
      </div>
    </div>
  </ui-dialog-content>
</template>
