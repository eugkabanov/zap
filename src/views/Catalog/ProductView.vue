<script setup lang="ts">
import { ref } from "vue";
import ProductCard from "../../components/Catalog/ProductCard.vue";
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

const isShowAddedProduct = ref(false);
const showAddedProduct = () => (isShowAddedProduct.value = true);
const hideAddedProduct = () => (isShowAddedProduct.value = false);
</script>

<template>
  <main>
    <section class="container-fluid pt-5">
      <div class="row gy-4">
        <div class="order-first col-12 col-md-6 col-xxl-3">
          <img src="@/assets/catalog/wheel.png" alt="product image" />
        </div>
        <div class="order-3 order-xxl-2 col-12 col-xxl-6">
          <div :class="$tt('headline2')" class="d-none d-md-block mb-4">
            Шина зимняя 245/60R18 109T XL Hakkapeliitta 10p SUV TL (шип.)
          </div>

          <div class="col-12 col-md-6">
            <div class="hint">
              <div :class="$tt('body1')" class="large">Бренд: NOKIAN</div>
              <div :class="$tt('body1')" class="large">Артикул: TS32701</div>
            </div>

            <div :class="$tt('headline3')" class="mt-5 mb-4">
              Характеристики
            </div>

            <div class="hint">
              <div class="row mb-2">
                <div class="col-auto" :class="$tt('body2')">Ширина</div>
                <div class="col product-view__dots" />
                <div class="col-auto" :class="$tt('body2')">245</div>
              </div>
              <div class="row mb-2">
                <div class="col-auto" :class="$tt('body2')">Высота</div>
                <div class="col product-view__dots" />
                <div class="col-auto" :class="$tt('body2')">60</div>
              </div>
              <div class="row mb-2">
                <div class="col-auto" :class="$tt('body2')">Диаметр</div>
                <div class="col product-view__dots" />
                <div class="col-auto" :class="$tt('body2')">18</div>
              </div>
              <div class="row mb-2">
                <div class="col-auto" :class="$tt('body2')">Сезон</div>
                <div class="col product-view__dots" />
                <div class="col-auto" :class="$tt('body2')">Зимняя</div>
              </div>
              <div class="row mb-2">
                <div class="col-auto" :class="$tt('body2')">
                  Индекс нагрузки
                </div>
                <div class="col product-view__dots" />
                <div class="col-auto" :class="$tt('body2')">109</div>
              </div>
              <div class="row mb-2">
                <div class="col-auto" :class="$tt('body2')">
                  Индекс скорости
                </div>
                <div class="col product-view__dots" />
                <div class="col-auto" :class="$tt('body2')">T</div>
              </div>
              <div class="row mb-2">
                <div class="col-auto" :class="$tt('body2')">
                  Тип конструкции
                </div>
                <div class="col product-view__dots" />
                <div class="col-auto" :class="$tt('body2')">R</div>
              </div>
              <div class="row mb-2">
                <div class="col-auto" :class="$tt('body2')">
                  Увеличенная грузоподъемность
                </div>
                <div class="col product-view__dots" />
                <div class="col-auto" :class="$tt('body2')">да</div>
              </div>
            </div>

            <div :class="$tt('headline3')" class="mt-5 mb-4">Описание</div>

            <div class="hint" :class="$tt('body1')">Шина зимняя</div>
          </div>
        </div>
        <div class="order-2 order-xxl-3 col-12 col-md-6 col-xxl-3">
          <div :class="$tt('headline2')" class="mb-5 d-md-none">
            Шина зимняя 245/60R18 109T XL Hakkapeliitta 10p SUV TL (шип.)
          </div>
          <div class="product-summary mb-4">
            <div class="row gy-2 gx-0 flex-column">
              <div class="row g-0">
                <div :class="$tt('body1')" class="col-auto">Цена:</div>
                <div :class="$tt('body1')" class="col-auto large ms-auto">
                  5841&nbsp;₽
                </div>
              </div>
              <div :class="$tt('body1')" class="small hint mb-4">за 1 шт.</div>

              <div :class="$tt('body1')">Количество:</div>
              <ui-form-field>
                <ui-textfield outlined fullwidth />
              </ui-form-field>
              <ui-button class="d-block mt-4" raised @click="showAddedProduct"
                >Заказать</ui-button
              >

              <div :class="$tt('body2')" class="hint my-4">Остаток: 30 шт.</div>

              <ui-divider />

              <div
                :class="$tt('body1')"
                class="row align-items-center justify-content-center g-0 mt-4"
              >
                <ui-icon class="col-auto">star_outline</ui-icon>
                <span class="col-auto ms-2">В избранное</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="grayed py-5 mt-5">
      <div class="container-fluid">
        <div class="row g-2">
          <div class="col-6 col-md-auto" :class="$tt('headline2')">
            Аналогичные товары
          </div>
          <div class="col-12 col-md-4 ms-md-4">
            <ui-form-field>
              <label class="me-3">Производитель</label>
              <ui-select outlined fullwidth value :options="sortingOptions" />
            </ui-form-field>
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
    </section>
  </main>

  <ui-dialog
    v-model="isShowAddedProduct"
    sheet
    maskClosable
    class="cart-dialog"
  >
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
  </ui-dialog>
</template>

<style scoped lang="scss">
@use "@/styles/vars";
.product-summary {
  padding: 35px 25px;
  background-color: #f5f5f7;
}

.product-view {
  &__dots {
    border-bottom: 1px dashed #d9d9de;
  }
}
</style>

<style lang="scss">
@use "@/styles/vars";
.cart-dialog {
  .mdc-dialog__container {
    @media (min-width: vars.$desktop) {
      margin-left: auto;
      margin-right: 1.5rem;
    }
  }

  &__content {
    color: black;
  }
  &__title {
    text-transform: uppercase;
    font-weight: 700;
  }
}
</style>
