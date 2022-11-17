<script setup lang="ts">
import { ref } from "vue";
import BreadCrumbs from "../../components/Page/BreadCrumbs.vue";
import CartAddDialog from "@/components/Dialogs/CartAddDialog.vue";
import RelatedProducts from "@/components/Sections/RelatedProducts.vue";
import IconOK from "@/components/icons/IconOK.vue";
import IconVK from "@/components/icons/IconVK.vue";
import IconTG from "@/components/icons/IconTG.vue";
import IconWA from "@/components/icons/IconWA.vue";

const isShowAddedProduct = ref(false);
const showAddedProduct = () => (isShowAddedProduct.value = true);
const hideAddedProduct = () => (isShowAddedProduct.value = false);
</script>

<template>
  <main>
    <section class="container-fluid pt-5">
      <BreadCrumbs
        class="mb-4"
        :crumbs="[
          { title: 'Главная', href: '/' },
          { title: 'Каталог', href: '/catalog' },
          {
            title: 'Шины индустриальные',
            href: '/catalog-choose/oil-winter',
          },
          {
            title: 'Артикул NOKIAN TS32701',
            href: '/catalog/wheel/123',
          },
        ]"
      />
      <div class="row gy-4">
        <div class="order-first col-12 col-md-6 col-xxl-3">
          <img
            style="width: 100%; border: 1px solid #d9d9de"
            src="@/assets/catalog/wheel.png"
            alt="product image"
          />
        </div>
        <div class="order-3 order-xxl-2 col-12 col-xxl-6">
          <div :class="$tt('headline2')" class="d-none d-md-block mb-4">
            Шина зимняя 245/60R18 109T XL Hakkapeliitta 10p SUV TL (шип.)
          </div>

          <div class="col-12 col-md-8">
            <div class="hint">
              <div style="font-size: 18px" class="fw-400 mb-2">
                Бренд: <span style="color: black">NOKIAN</span>
              </div>
              <div style="font-size: 18px" class="fw-400">
                Артикул: <span style="color: black">TS32701</span>
              </div>
            </div>

            <div class="mt-5 mb-4 large bold">Характеристики</div>

            <div>
              <div class="row mb-2">
                <div class="col-10 row">
                  <div class="col-auto" :class="$tt('body2')">Ширина</div>
                  <div class="col dotted" />
                </div>
                <div class="col-auto" :class="$tt('body2')">245</div>
              </div>
              <div class="row mb-2">
                <div class="col-10 row">
                  <div class="col-auto" :class="$tt('body2')">Высота</div>
                  <div class="col dotted" />
                </div>
                <div class="col-auto" :class="$tt('body2')">60</div>
              </div>
              <div class="row mb-2">
                <div class="col-10 row">
                  <div class="col-auto" :class="$tt('body2')">Диаметр</div>
                  <div class="col dotted" />
                </div>
                <div class="col-auto" :class="$tt('body2')">18</div>
              </div>
              <div class="row mb-2">
                <div class="col-10 row">
                  <div class="col-auto" :class="$tt('body2')">Сезон</div>
                  <div class="col dotted" />
                </div>
                <div class="col-auto" :class="$tt('body2')">Зимняя</div>
              </div>
              <div class="row mb-2">
                <div class="col-10 row">
                  <div class="col-auto" :class="$tt('body2')">
                    Индекс нагрузки
                  </div>
                  <div class="col dotted" />
                </div>
                <div class="col-auto" :class="$tt('body2')">109</div>
              </div>
              <div class="row mb-2">
                <div class="col-10 row">
                  <div class="col-auto" :class="$tt('body2')">
                    Индекс скорости
                  </div>
                  <div class="col dotted" />
                </div>
                <div class="col-auto" :class="$tt('body2')">T</div>
              </div>
              <div class="row mb-2">
                <div class="col-10 row">
                  <div class="col-auto" :class="$tt('body2')">
                    Тип конструкции
                  </div>
                  <div class="col dotted" />
                </div>
                <div class="col-auto" :class="$tt('body2')">R</div>
              </div>
              <div class="row mb-2">
                <div class="col-10 row">
                  <div class="col-auto" :class="$tt('body2')">
                    Увеличенная грузоподъемность
                  </div>
                  <div class="col dotted" />
                </div>
                <div class="col-auto" :class="$tt('body2')">да</div>
              </div>
            </div>

            <div class="mt-5 mb-4 large bold">Описание</div>

            <div>Шина зимняя</div>
          </div>
        </div>
        <div class="order-2 order-xxl-3 col-12 col-md-6 col-xxl-3">
          <div :class="$tt('headline2')" class="mb-5 d-md-none">
            Шина зимняя 245/60R18 109T XL Hakkapeliitta 10p SUV TL (шип.)
          </div>
          <div class="product-summary mb-4">
            <div>
              <div class="row align-items-baseline">
                <div class="col-auto mb-2">Цена:</div>
                <div class="col-auto bold large ms-auto">5841&nbsp;₽</div>
              </div>
              <div class="small hint mb-4">за 1 шт.</div>

              <div class="mb-3">Количество:</div>
              <ui-form-field>
                <ui-textfield
                  :model-value="4"
                  class="quantity-input"
                  outlined
                  fullwidth
                >
                  <template #after>
                    <ui-textfield-icon>add</ui-textfield-icon>
                  </template>
                  <template #before>
                    <ui-textfield-icon>remove</ui-textfield-icon>
                  </template>
                </ui-textfield>
              </ui-form-field>
              <div>
                <ui-button class="w-100 mt-3" raised @click="showAddedProduct"
                  >Заказать</ui-button
                >
              </div>

              <div :class="$tt('body2')" class="my-4">Остаток: 30 шт.</div>

              <ui-divider />

              <div
                class="row align-items-center justify-content-center g-0 mt-4"
              >
                <ui-icon class="col-auto">star_outline</ui-icon>
                <span class="col-auto ms-2">В избранное</span>
              </div>
            </div>
          </div>

          <div class="row align-items-center gx-0">
            <div style="font-size: 12px; padding-bottom: 8px" class="hint col">
              Поделиться
            </div>
            <div class="col-auto ms-3"><IconOK /></div>
            <div class="col-auto ms-3"><IconVK /></div>
            <div class="col-auto ms-3"><IconTG /></div>
            <div class="col-auto ms-3"><IconWA /></div>
          </div>
        </div>
      </div>
    </section>
    <section class="grayed py-5 mt-5">
      <RelatedProducts />
    </section>
  </main>

  <ui-dialog
    v-model="isShowAddedProduct"
    sheet
    maskClosable
    class="cart-dialog"
  >
    <CartAddDialog :hide-added-product="hideAddedProduct" />
  </ui-dialog>
</template>

<style scoped lang="scss">
@use "@/styles/vars";
.product-summary {
  padding: 35px 25px;
  background-color: #f5f5f7;
}
</style>

<style lang="scss">
@use "@/styles/vars";
.cart-dialog {
  .mdc-dialog__container {
    @media (min-width: vars.$desktop) {
      margin-left: auto;
      margin-right: 1.5rem;

      position: relative;

      .mdc-dialog__surface {
        position: absolute;
        top: 75px;
        right: 0;
        width: 530px;
      }
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

.quantity-input {
  background-color: white;

  .mdc-notched-outline__leading,
  .mdc-notched-outline__trailing {
    border: none;
  }

  .mdc-text-field__input {
    text-align: center;
    font-weight: 700;
  }
}
</style>
