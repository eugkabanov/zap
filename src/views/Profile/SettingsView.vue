<script setup lang="ts">
import ProfilePersonalData from "@/components/Sections/ProfilePersonalData.vue";
import ProfilePaymentDetails from "@/components/Sections/ProfilePaymentDetails.vue";
import ProfileDeliveryDetails from "@/components/Sections/ProfileDeliveryDetails.vue";
import ProfilePasswordChange from "@/components/Sections/ProfilePasswordChange.vue";
import { ref } from "vue";
import BalanceBar from "../../components/Profile/BalanceBar.vue";

const selectedTab = ref(0);
</script>

<template>
  <main class="container-fluid pb-5">
    <div class="row">
      <h1 class="col-auto mt-5">Настройки профиля</h1>
      <div class="col-auto ms-auto">
        <BalanceBar class="mt-2 mb-3" />
      </div>
    </div>

    <div class="col-12 col-xl-8">
      <ui-tab-bar v-model="selectedTab">
        <ui-tab min-width content-indicator>Личные данные</ui-tab>
        <ui-tab min-width content-indicator>Ваши реквизиты</ui-tab>
        <ui-tab min-width content-indicator>Доставка</ui-tab>
        <ui-tab min-width content-indicator>Изменить пароль</ui-tab>
        <ui-tab min-width content-indicator>Уведомления</ui-tab>
      </ui-tab-bar>
    </div>

    <div class="mt-5">
      <!-- Personal data -->
      <section v-if="selectedTab === 0" class="col-12 col-sm-6 col-md-4">
        <ProfilePersonalData />
      </section>
      <!-- Payment details -->
      <section v-if="selectedTab === 1" class="col-12 col-md-10 col-xl-6">
        <ProfilePaymentDetails />
      </section>
      <!-- Delivery details -->
      <section v-if="selectedTab === 2">
        <ProfileDeliveryDetails />
      </section>
      <!-- Password change -->
      <section v-if="selectedTab === 3">
        <ProfilePasswordChange />
      </section>
    </div>
  </main>
</template>

<style lang="scss">
@use "@/styles/vars";
.add-new-address .mdc-dialog__surface {
  @media (min-width: vars.$desktop) {
    min-width: 500px !important;
  }
}
</style>
