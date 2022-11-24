<script setup lang="ts">
import NewsSide from "@/components/News/NewsSide.vue";
import NewsCover from "@/components/News/NewsCover.vue";
import BrandsSlider from "../components/BrandsSlider/BrandsSlider.vue";
import IconOil from "../components/icons/IconOil.vue";
import IconWheel from "../components/icons/IconWheel.vue";
import IconDisk from "../components/icons/IconDisk.vue";
import IconBreaks from "../components/icons/IconBreaks.vue";
import IconStrap from "../components/icons/IconStrap.vue";
import IconBattery from "../components/icons/IconBattery.vue";
import IconFilter from "../components/icons/IconFilter.vue";
import IconLamp from "../components/icons/IconLamp.vue";
import IconWasher from "../components/icons/IconWasher.vue";
import router from "@/router";
import SearchFormWithIcon from "../components/Search/SearchFormWithIcon.vue";

const submitSearch = () => {
  router.push("/search/TS32701");
};
</script>

<template>
  <main>
    <section id="banner" class="py-5">
      <div class="container light">
        <div
          style="height: 62vh"
          class="row g-0 justify-content-center align-items-center"
        >
          <div class="row g-0">
            <div class="col-12 col-lg-8 mx-auto">
              <SearchFormWithIcon
                :submit-handler="submitSearch"
                placeholder="Поиск по артикулу"
              />
            </div>
            <div class="col-12 col-lg-6 mx-auto mt-4">
              <div class="row">
                <div class="col-10 col-lg-auto">
                  <RouterLink to="/search-brand">
                    <ui-button
                      raised
                      style="
                        margin-left: 160px;
                        background-color: white;
                        color: #0069c8;
                        height: 66px;
                        text-transform: uppercase;
                      "
                      >Подбор по марке</ui-button
                    >
                  </RouterLink>
                </div>
<!--                <div class="col-6 col-lg-auto">-->
                  <!-- <RouterLink to="/catalog">
                    <ui-button
                      style="height: 66px; text-transform: uppercase"
                      raised
                      >Каталог товаров</ui-button
                    >
                  </RouterLink> -->
<!--                </div>-->
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="row g-4 text-center">
          <RouterLink class="col-4 col-lg" to="/catalog-choose/oil">
            <IconOil style="height: 50px" />
            <div :class="$tt('body1')" class="mt-2 large">Масла</div>
          </RouterLink>
          <RouterLink class="col-4 col-lg" to="/catalog-choose/wheels">
            <IconWheel style="height: 50px" />
            <div :class="$tt('body1')" class="mt-2 large">Шины</div>
          </RouterLink>
          <RouterLink class="col-4 col-lg" to="/catalog/rums">
            <IconDisk style="height: 50px" />
            <div :class="$tt('body1')" class="mt-2 large">Диски</div>
          </RouterLink>
          <RouterLink class="col-4 col-lg" to="/catalog/breaks">
            <IconBreaks style="height: 50px" />
            <div :class="$tt('body1')" class="mt-2 large">Колодки</div>
          </RouterLink>
          <RouterLink class="col-4 col-lg" to="/catalog/straps">
            <IconStrap style="height: 50px" />
            <div :class="$tt('body1')" class="mt-2 large">Ремни</div>
          </RouterLink>
          <RouterLink class="col-4 col-lg" to="/catalog/battery">
            <IconBattery style="height: 50px" />
            <div :class="$tt('body1')" class="mt-2 large">Аккумуляторы</div>
          </RouterLink>
          <RouterLink class="col-4 col-lg" to="/catalog/filters">
            <IconFilter style="height: 50px" />
            <div :class="$tt('body1')" class="mt-2 large">Фильтры</div>
          </RouterLink>
          <RouterLink class="col-4 col-lg" to="/catalog/lamps">
            <IconLamp style="height: 50px" />
            <div :class="$tt('body1')" class="mt-2 large">Лампы</div>
          </RouterLink>
          <RouterLink class="col-4 col-lg" to="/catalog/washers">
            <IconWasher style="height: 50px" />
            <div :class="$tt('body1')" class="mt-2 large">Промывки</div>
          </RouterLink>
        </div> -->
      </div>
    </section>
    <!-- <section id="news" class="py-5">
      <div class="container light">
        <div class="row g-3 mb-5">
          <div class="col-12 col-lg-6">
            <NewsSide link="/news" image="../../assets/news/preview-side.jpg">
              <template #caption>
                <div>Скидки для&nbsp;новых клиентов!</div>
              </template>
            </NewsSide>
          </div>
          <div class="col-12 col-lg-6">
            <NewsCover link="/news" image="./assets/news/preview-full.jpg">
              <template #caption>
                <div>Otto&nbsp;Zimermann</div>
                <div style="font-size: 60px; line-height: 140%">-20%</div>
              </template>
            </NewsCover>
          </div>
        </div>
        <div id="lead-message" class="mb-5">
          <div :class="$tt('body1')">
            При оплате заказа банковской картой, обработка платежа (включая ввод
            номера карты) происходит на защищенной странице процессинговой
            системы, которая прошла международную сертификацию. Это значит, что
            Ваши конфиденциальные данные (реквизиты карты, регистрационные
            данные и др.) не поступают в интернет-магазин, их обработка
            полностью защищена и никто, в том числе наш интернет-магазин, не
            может получить персональные и банковские данные клиента.
          </div>
        </div>
        <div id="stats" class="mb-5">
          <div class="row gy-2">
            <div class="col-12 col-lg">
              <div :class="$tt('body1')">
                Сейчас на&nbsp;сайте: 83&nbsp;клиента
              </div>
            </div>
            <div class="col-12 col-lg">
              <div :class="$tt('body1')">
                Оформленно заказов за&nbsp;сутки: 571&nbsp;заказа
              </div>
            </div>
            <div class="col-12 col-lg">
              <div :class="$tt('body1')">
                Всего заказов на&nbsp;сумму: 381&nbsp;094&nbsp;руб.
              </div>
            </div>
            <div class="col-12 col-lg">
              <div :class="$tt('body1')">
                Новых регистраций за&nbsp;сутки:&nbsp;72
              </div>
            </div>
            <div class="col-12 col-lg">
              <div :class="$tt('body1')">
                Выполено заказов за&nbsp;сутки:&nbsp;104
              </div>
            </div>
          </div>
        </div>
        <div id="brands">
          <BrandsSlider />
        </div>
      </div>
    </section> -->
  </main>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "HomeView",
  data() {

    return {
      
    };
  },
});

</script>

<style lang="scss">
section#banner {
  background-image: url("@/assets/home-banner.jpg");
  background-size: cover;
  background-position-y: center;

  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input {
    color: white;
    caret-color: white;
    z-index: 2;
  }

  .mdc-text-field {
    height: 80px;
  }
  .mdc-text-field__input {
    font-size: 20px;
  }

  button.mdc-fab {
    width: 80px;
    height: 80px;
  }
  .mdc-fab__icon {
    font-size: 34px;
  }
  .mdc-button__label {
    font-weight: 700 !important;
  }

  .mdc-text-field--outlined:not(.mdc-text-field--disabled)
    .mdc-notched-outline__leading,
  .mdc-text-field--outlined:not(.mdc-text-field--disabled)
    .mdc-notched-outline__notch,
  .mdc-text-field--outlined:not(.mdc-text-field--disabled)
    .mdc-notched-outline__trailing {
    border-color: rgba($color: #fff, $alpha: 0.3);
    background-color: rgba($color: black, $alpha: 0.5);
  }
  .mdc-text-field__input::placeholder {
    color: white !important;
  }
}

section#news {
  background: linear-gradient(0deg, #000000 19.27%, #012b51 100%);
}

#lead-message {
  background-color: rgba($color: white, $alpha: 0.1);
  padding: 1.75rem;
}

#stats {
  padding: 2rem;
  border: 1px solid rgba($color: white, $alpha: 0.4);
}
</style>
