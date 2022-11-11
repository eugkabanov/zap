<script setup lang="ts">
import LineBreak from "@/components/LineBreak.vue";
</script>

<template>
  <footer id="app-footer" class="container-fluid">
    <div class="row gy-4 gy-lg-0 align-items-top justify-content-center">
      <div class="col-auto">
        <img class="logo" alt="Logo" src="@/assets/logo-white.svg" />
      </div>
      <div class="col-12 col-lg">
        <nav class="row gy-4 gy-lg-0">
          <div class="col-12 col-lg-auto footer-item">
            <RouterLink to="/balance">Оплата</RouterLink>
          </div>
          <div class="col-12 col-lg-auto footer-item">
            <RouterLink to="/dealers">Поставщики</RouterLink>
          </div>
          <div class="col-12 col-lg-auto footer-item">
            <RouterLink to="/orders">Доставка</RouterLink>
          </div>
          <div class="col-12 col-lg-auto footer-item">
            <RouterLink to="/appeals">Возврат</RouterLink>
          </div>
        </nav>

        <LineBreak style="opacity: 0.4" class="my-4" />

        <div class="row">
          <div class="col-12 col-lg-3 footer-item">
            <p :class="$tt('body1')">ZAP&nbsp;–&nbsp;это&nbsp;запчасти</p>
          </div>
          <div class="col-12 col-lg-3 footer-item">
            <p :class="$tt('body1')">
              тел. <a href="tel:74955505555">+7&nbsp;(495)&nbsp;550-55-55</a>
            </p>
            <p :class="$tt('body1')">будни&nbsp;с&nbsp;09:00–19:00</p>
          </div>
          <div class="col-12 col-lg-auto ms-auto footer-item">
            <p :class="$tt('body1')">
              Все&nbsp;права&nbsp;защищены&nbsp;@&nbsp;ZAP.ru&nbsp;2022
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "@/styles/vars";

footer#app-footer {
  background-color: black;
  padding-top: 64px;
  padding-bottom: 64px;

  &,
  & a {
    color: white;
  }

  .footer-item {
    text-align: center;

    @media (min-width: vars.$desktop) {
      text-align: start;
    }
  }

  .mdc-divider--horizontal.mdc-divider--no-text {
    background-color: rgba($color: white, $alpha: 0.4);
  }
}
</style>
