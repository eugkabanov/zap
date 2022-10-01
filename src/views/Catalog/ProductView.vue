<template>
  <main class="py-5">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-xxl-3">
          <img src="@/assets/catalog/wheel.png" alt="product image" />
        </div>
        <div class="col-12 col-xxl-6">
          <div :class="$tt('headline2')">
            Шина зимняя 245/60R18 109T XL Hakkapeliitta 10p SUV TL (шип.)
          </div>
        </div>
        <div class="col-12 col-xxl-2 ms-xxl-auto">
          <div class="product-summary">
            <div class="mb-4">
              <div class="row">
                <div :class="$tt('body1')" class="col-auto">Цена:</div>
                <div :class="$tt('body1')" class="col-auto large ms-auto">
                  5841&nbsp;₽
                </div>
              </div>
              <div :class="$tt('body1')" class="small hint">за 1 шт.</div>
            </div>

            <div class="mb-4">
              <div :class="$tt('body1')">Количество::</div>
              <ui-form-field>
                <ui-textfield outlined fullwidth />
              </ui-form-field>
              <ui-button class="d-block" raised>Заказать</ui-button>

              <div class="row">
                <div :class="$tt('body1')" class="col-auto large ms-auto">
                  5841&nbsp;₽
                </div>
              </div>
              <div :class="$tt('body1')" class="small hint">за 1 шт.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss"></style>
