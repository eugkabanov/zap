<script setup lang="ts">
import LineBreak from "../../components/LineBreak.vue";
</script>

<template>
  <main class="container-fluid py-5">
    <h1 :class="$tt('headline1')">Оформление заказа</h1>

    <div class="row flex-column">
      <div class="col-12 col-md-8 col-xl-6">
        <div class="row align-items-center justify-content-between mb-4">
          <div class="col-6 col-lg-auto" :class="$tt('headline3')">
            Данные получателя
          </div>
          <div class="col-6 col-lg-auto">
            <ui-button
              icon="person_outline"
              :class="$tt('body1')"
              class="ms-auto"
              >Заполнить из&nbsp;профиля</ui-button
            >
          </div>
        </div>

        <div class="row align-items-center mb-3">
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

      <div class="col-12 col-xl-10">
        <div :class="$tt('headline3')">Способ получения</div>

        <div class="mt-4">
          <ui-chips
            type="choice"
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
                class="row flex-column justify-content-between"
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

        <div class="mt-1">
          <ui-button icon="storefront" :class="$tt('body1')"
            >Выбрать другой пункт самовывоза</ui-button
          >
        </div>
      </div>

      <div class="col-12 col-xl-10 mt-5">
        <div :class="$tt('headline3')">1 товар на сумму 23 364 ₽</div>

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
                  <div :class="$tt('body1')" class="bold large">
                    Шина зимняя 245/60R18 109T XL Hakkapeliitta 10p SUV TL
                    (шип.)
                  </div>

                  <div class="mt-3 hint">Бренд: NOKIAN</div>
                  <div class="mt-1 hint">Артикул: TS32701</div>
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

      <div class="col-12 col-xl-10 mt-5">
        <div :class="$tt('headline3')">Способ оплаты</div>

        <div class="mt-4">
          <ui-chips
            type="choice"
            :options="[
              { label: 'Банковской картой', value: 0 },
              { label: 'По счету', value: 1 },
            ]"
          ></ui-chips>
        </div>

        <div class="mt-5">
          <label
            for="cart-comments"
            :class="$tt('headline3')"
            class="d-block mb-5"
            >Комментарий к заказу</label
          >
          <ui-textfield
            id="cart-comments"
            outlined
            fullwidth
            input-type="textarea"
            rows="8"
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
          <div class="col-auto bold" :class="$tt('body1')">Итого к оплате</div>
          <div class="col-auto ms-auto bold" :class="$tt('body1')">
            93 456 ₽
          </div>
        </div>

        <div class="my-4">
          <ui-button raised>Подтвердить заказ</ui-button>
        </div>

        <div :class="$tt('body1')" class="hint">
          Подтверждая заказ, вы соглашаетесь с условиями политики
          конфиденциальности и правилами продажи.
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
