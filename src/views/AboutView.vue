<script setup lang="ts">
import IconBox from "../components/icons/IconBox.vue";
import IconDelivery from "../components/icons/IconDelivery.vue";
import IconDocs from "../components/icons/IconDocs.vue";
import IconSearch from "../components/icons/IconSearch.vue";
import IconSettings from "../components/icons/IconSettings.vue";
import IconWeb from "../components/icons/IconWeb.vue";
import IconUser from "../components/icons/IconUser.vue";
import IconOffice from "../components/icons/IconOffice.vue";
import BrandsSlider from "../components/BrandsSlider/BrandsSlider.vue";
</script>

<template>
  <main>
    <section id="about-banner" class="py-5">
      <div class="container light">
        <div
          style="min-height: 85vh"
          class="row g-0 justify-content-center align-items-center"
        >
          <div class="row gx-0 gy-4">
            <div class="col-12 col-lg-6">
              <img class="logo" src="@/assets/logo-white.svg" alt="Logo" />
              <div
                :class="$tt('body1')"
                class="mt-1 text-center"
                style="font-size: 25px"
              >
                ZAP&nbsp;—&nbsp;это запчасти
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <div class="lead-message">
                <div :class="$tt('body1')">
                  <p>
                    ZAP&nbsp;—&nbsp;интернет-магазин автозапчастей www.zap.ru
                  </p>
                  <p>
                    Основным направлением деятельности компании является
                    оптово-розничная торговля автозапчастями и автотоварами.
                  </p>
                  <p>
                    Мы предоставляем возможность клиентам приобретать широкий
                    ассортимент качественных товаров по лучшим ценам на рынке.
                    Постоянно работаем над повышением уровня сервиса и качества
                    обслуживания наших клиентов.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="about" class="py-5">
      <div class="container light">
        <div class="row g-4">
          <div class="col-12 col-lg-6">
            <div :class="$tt('body1')" class="large">
              Высокий профессионализм наших сотрудников и индивидуальный подход
              к каждому покупателю, позволяют предоставлять клиентам только
              качественные запчасти и строго соблюдать обязательства по
              логистике!
            </div>
            <div class="mt-4">
              <img
                class="parking-image"
                src="@/assets/about-parking.jpg"
                alt="parking"
              />
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="row align-items-center">
              <div class="col-auto"><IconBox style="height: 60px" /></div>
              <div :class="$tt('body1')" class="large col">
                48 000 категорий товаров
              </div>
            </div>
            <div class="mt-2 row align-items-center">
              <div class="col-auto"><IconDelivery style="height: 60px" /></div>
              <div :class="$tt('body1')" class="large col">
                500 поставщиков, доступные цены
              </div>
            </div>
            <div class="mt-2 row align-items-center">
              <div class="col-auto"><IconDocs style="height: 60px" /></div>
              <div :class="$tt('body1')" class="large col">
                220 000 карточек товара, шины, масла, автохимия
              </div>
            </div>
            <div class="mt-2 row align-items-center">
              <div class="col-auto"><IconSearch style="height: 60px" /></div>
              <div :class="$tt('body1')" class="large col">
                43 ОЕМ производителей, поиск по VIN и FRAME
              </div>
            </div>
            <div class="mt-2 row align-items-center">
              <div class="col-auto"><IconSettings style="height: 60px" /></div>
              <div :class="$tt('body1')" class="large col">
                69 000 000 оригинальных и неоригинальных автозапчастей
              </div>
            </div>
            <div class="mt-2 row align-items-center">
              <div class="col-auto"><IconWeb style="height: 60px" /></div>
              <div :class="$tt('body1')" class="large col">
                5300 брендов aftermarket
              </div>
            </div>
            <div class="mt-2 row align-items-center">
              <div class="col-auto"><IconUser style="height: 60px" /></div>
              <div :class="$tt('body1')" class="large col">
                1000 + активных пользователей
              </div>
            </div>
            <div class="mt-2 row align-items-center">
              <div class="col-auto"><IconOffice style="height: 60px" /></div>
              <div :class="$tt('body1')" class="large col">
                6000 пунктов СДЕК, самовывоз, доставка по Москве
              </div>
            </div>
          </div>
        </div>

        <div id="brands" class="mt-5">
          <BrandsSlider />
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
@use "@/styles/_vars.scss";

section#about-banner {
  background-image: url("@/assets/about-banner.jpg");
  background-size: cover;
  background-position-y: center;

  .logo {
    height: 18rem;
    width: 100%;
  }

  .lead-message {
    background-color: rgba($color: black, $alpha: 0.6);
    border: 1px solid white;
    padding: 25px;

    @media (min-width: vars.$desktop) {
      padding: 50px;
    }
  }
}

section#about {
  background-color: #242424;

  .parking-image {
    width: 100%;
    height: auto;
  }
}
</style>
