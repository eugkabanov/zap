<script setup lang="ts">
import IconStore from "@/components/icons/IconStore.vue";
import LineBreak from "../../components/LineBreak.vue";
import BreadCrumbs from "../../components/Page/BreadCrumbs.vue";
</script>

<template>
  <main class="container-fluid pt-4 pb-5">
    <BreadCrumbs
      class="mb-4"
      :crumbs="[
        { title: 'Главная', href: '/' },
        { title: 'Корзина', href: '/cart' },
        { title: 'Оформление заказа', href: '/order' },
      ]"
    />

    <h1 class="my-5" :class="$tt('headline1')">Оформление заказа</h1>

    <div class="row flex-column">
      <div class="col-12 col-md-8 col-xl-5">
        <div
          class="row align-items-center justify-content-between mb-4"
          style="margin-bottom: 33px"
        >
          <div class="col-6 col-lg-auto large bold">Данные получателя</div>
          <div class="col-6 col-lg-auto">
            <ui-icon style="vertical-align: middle">person_outline</ui-icon>
            <span class="ms-1 fw-400 link">Заполнить из&nbsp;профиля</span>
          </div>
        </div>

        <div class="row align-items-center mb-4">
          <label class="col-2">Ф.И.О.</label>
          <div class="col ms-3">
            <ui-textfield outlined fullwidth></ui-textfield>
          </div>
        </div>
        <div class="row align-items-center mb-3">
          <label class="col-2">Телефон</label>
          <div class="col ms-3">
            <ui-textfield outlined fullwidth></ui-textfield>
          </div>
        </div>
      </div>

      <div class="col-12 col-xl-8 mt-5">
        <div class="large bold">Способ получения</div>

        <div class="mt-4">
          <ui-chips
            type="choice"
            :model-value="0"
            :options="[
              { label: 'Самовывоз', value: 0 },
              { label: 'Курьер', value: 1 },
            ]"
          ></ui-chips>
        </div>

        <div class="delivery mt-4">
          <div class="row g-2">
            <div class="col-12 col-md-6">
              <div
                class="row flex-column justify-content-between py-3"
                style="min-height: 300px"
              >
                <div class="col-auto" :class="$tt('body1')">
                  <div class="bold">Адрес выдачи:</div>

                  <div class="hint mt-2">
                    г. Москва. ул. Лениа, д. 24Б
                    <br />
                    тел. +7 (495) 550-55-55 <br />
                    будни с 09:00–19:00
                  </div>
                </div>
                <div class="col-auto" :class="$tt('body1')">
                  Готово к выдаче завтра после 12:00
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <img class="w-100" height="300" src="@/assets/map.jpg" alt="" />
            </div>
          </div>
        </div>

        <div class="mt-3">
          <div class="link fw-400">
            <IconStore style="vertical-align: middle" />
            Выбрать другой пункт самовывоза
          </div>
        </div>
      </div>

      <div class="col-12 col-xl-8 mt-5">
        <div class="large bold">1 товар на сумму 23 364 ₽</div>

        <div class="mt-4 product">
          <div class="row">
            <div class="col-12 col-md-4 col-xl-2">
              <img
                class="w-100"
                height="120"
                src="@/assets/catalog/wheel.png"
                alt="product"
              />
            </div>

            <div class="col-12 col-md-8 col-xl-10">
              <div class="row">
                <div class="col">
                  <div
                    :class="$tt('body1')"
                    style="font-size: 18px"
                    class="x-bold"
                  >
                    Шина зимняя 245/60R18 109T XL Hakkapeliitta 10p SUV TL
                    (шип.)
                  </div>

                  <div class="mt-3 fw-400">
                    <span class="hint">Бренд:</span> NOKIAN
                  </div>
                  <div class="mt-1 fw-400">
                    <span class="hint">Артикул:</span> TS32701
                  </div>
                </div>

                <div class="col-auto">
                  <div class="large bold">23 364 ₽</div>
                  <div class="mt-3">4 шт.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-xl-8 mt-5">
        <div class="large bold">Способ оплаты</div>

        <div class="mt-4">
          <ui-chips
            type="choice"
            :model-value="0"
            :options="[
              { label: 'Банковской картой', value: 0 },
              { label: 'По счету', value: 1 },
            ]"
          ></ui-chips>
        </div>

        <div class="mt-5">
          <label for="cart-comments" class="d-block mb-4 large bold"
            >Комментарий к заказу</label
          >
          <ui-textfield
            id="cart-comments"
            outlined
            fullwidth
            input-type="textarea"
            rows="4"
            cols="40"
          />
        </div>
      </div>

      <div class="mt-5 col-12 col-md-7 col-xl-4">
        <div class="row hint large mb-2">
          <div class="col-auto" :class="$tt('body1')">Стоимость товаров:</div>
          <div class="col-auto ms-auto" :class="$tt('body1')">23 364 ₽</div>
        </div>
        <div class="row hint large mb-3">
          <div class="col-auto" :class="$tt('body1')">Стоимость доставки:</div>
          <div class="col-auto ms-auto" :class="$tt('body1')">0 ₽</div>
        </div>

        <LineBreak class="my-4" />

        <div class="row large mb-3">
          <div class="col-auto bold large" :class="$tt('body1')">
            Итого к оплате
          </div>
          <div class="col-auto ms-auto bold" :class="$tt('headline3')">
            93 456 ₽
          </div>
        </div>

        <div class="my-4">
          <ui-button raised>Подтвердить заказ</ui-button>
        </div>

        <div :class="$tt('body1')" class="hint">
          Подтверждая заказ, вы соглашаетесь с условиями
          <span style="text-decoration: underline">
            политики конфиденциальности
          </span>
          и правилами продажи.
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.delivery {
  padding: 10px;
  padding-left: 30px;

  border: 1px solid #d9d9de;
}

.product {
  padding: 25px;
  border: 1px solid #d9d9de;
}
</style>
