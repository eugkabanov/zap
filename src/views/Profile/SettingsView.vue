<script setup lang="ts">
import { ref } from "vue";

const selectedTab = ref(0);
</script>

<template>
  <main class="container-fluid py-5">
    <h1>Настройки профиля</h1>

    <div class="col-12 col-xl-8">
      <ui-tab-bar v-model="selectedTab">
        <ui-tab content-indicator>Личные данные</ui-tab>
        <ui-tab content-indicator>Ваши реквизиты</ui-tab>
        <ui-tab content-indicator>Доставка</ui-tab>
        <ui-tab content-indicator>Изменить пароль</ui-tab>
        <ui-tab content-indicator>Уведомления</ui-tab>
      </ui-tab-bar>
    </div>

    <div class="mt-5">
      <div v-if="selectedTab === 0" class="col-12 col-sm-6 col-md-4 col-xl-3">
        <div class="large bold mb-4">Личные данные</div>

        <div class="row mb-2">
          <div class="col-auto">Ф.И.О.</div>
          <div class="col dotted" />
          <div class="col-auto">Иванов Сергей Петрович</div>
        </div>
        <div class="row mb-2">
          <div class="col-auto">Телефон</div>
          <div class="col dotted" />
          <div class="col-auto">8-923-675-85-69</div>
        </div>
        <div class="row mb-2">
          <div class="col-auto">Город</div>
          <div class="col dotted" />
          <div class="col-auto">Нижний Новгород</div>
        </div>
        <div class="row mb-2">
          <div class="col-auto">E-mail</div>
          <div class="col dotted" />
          <div class="col-auto">isn-04@mail.ru</div>
        </div>

        <div class="mt-4">
          <ui-button raised>Редактировать</ui-button>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
@use "@/styles//vars";
.park-add-car .mdc-dialog__surface {
  @media (min-width: vars.$desktop) {
    min-width: 530px !important;
  }
}
</style>
