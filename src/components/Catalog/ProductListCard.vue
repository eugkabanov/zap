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
    <div class="row gy-4">
      <div class="col-12 col-md-6 col-xxl-2">
        <!-- src hardcoded because of build error see more at: https://vitejs.dev/guide/assets.html#new-url-url-import-meta-url -->
        <img
          class="product-card__image mb-3"
          src="@/assets/catalog/wheel.png"
          alt="product image"
        />
      </div>
      <div class="col-12 col-md-6 col-xxl-3">
        <div :class="$tt('body2')" class="mb-4">{{ title }}</div>
        <div :class="$tt('body2')" class="hint">{{ brand }}</div>
        <div :class="$tt('body2')" class="hint">Артикул: {{ inventoryId }}</div>
        <div :class="$tt('body1')" class="large d-md-none my-2">
          {{ price }}&nbsp;₽
        </div>
      </div>
      <div class="col-12 col-md-6 col-xxl-5 pe-5">
        <div class="hint">
          <div class="row mb-2">
            <div class="col-auto" :class="$tt('body2')">Ширина</div>
            <div class="col product-card__dots" />
            <div class="col-auto" :class="$tt('body2')">245</div>
          </div>
          <div class="row mb-2">
            <div class="col-auto" :class="$tt('body2')">Высота</div>
            <div class="col product-card__dots" />
            <div class="col-auto" :class="$tt('body2')">60</div>
          </div>
          <div class="row mb-2">
            <div class="col-auto" :class="$tt('body2')">Диаметр</div>
            <div class="col product-card__dots" />
            <div class="col-auto" :class="$tt('body2')">18</div>
          </div>
          <div class="row mb-2">
            <div class="col-auto" :class="$tt('body2')">Сезон</div>
            <div class="col product-card__dots" />
            <div class="col-auto" :class="$tt('body2')">Зимняя</div>
          </div>
          <div class="row mb-2">
            <div class="col-auto" :class="$tt('body2')">Индекс нагрузки</div>
            <div class="col product-card__dots" />
            <div class="col-auto" :class="$tt('body2')">109</div>
          </div>
          <div class="row mb-2">
            <div class="col-auto" :class="$tt('body2')">Индекс скорости</div>
            <div class="col product-card__dots" />
            <div class="col-auto" :class="$tt('body2')">T</div>
          </div>
          <div class="row mb-2">
            <div class="col-auto" :class="$tt('body2')">Тип конструкции</div>
            <div class="col product-card__dots" />
            <div class="col-auto" :class="$tt('body2')">R</div>
          </div>
          <div class="row mb-2">
            <div class="col-auto" :class="$tt('body2')">
              Увеличенная грузоподъемность
            </div>
            <div class="col product-card__dots" />
            <div class="col-auto" :class="$tt('body2')">да</div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-xxl-2">
        <div class="row g-0 flex-column" style="height: 100%">
          <div :class="$tt('body1')" class="large col-auto d-none d-md-block">
            {{ price }}&nbsp;₽
          </div>
          <ui-button raised class="mt-auto col-auto">В&nbsp;корзину</ui-button>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">
@use "@/styles/vars";
.product-card {
  display: block;
  padding: 15px;
  background-color: white;

  &,
  &:hover {
    color: inherit;
  }

  @media (min-width: vars.$desktop) {
    padding: 30px;
  }

  &__image {
    width: 100%;
    height: auto;
    max-height: 200px;
    object-fit: contain;
  }

  &__dots {
    border-bottom: 1px dashed #d9d9de;
  }
}
</style>
