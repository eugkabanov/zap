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
</style>
