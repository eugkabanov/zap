<template>
  <main class="py-5">
    <div class="container-fluid">
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
              <ui-button class="d-block mt-4" raised>Заказать</ui-button>

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
    </div>
  </main>
</template>

<style scoped lang="scss">
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
