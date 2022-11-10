<template>
  <main class="container-fluid pb-5">
    <BalanceBar class="ms-auto mt-2 mb-3" />
    <h1>Настройки профиля</h1>

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

<script lang="ts">
import { ref } from "vue";
import { defineComponent } from "vue";
import CustomSelect from "../../components/CustomSelect.vue";
import BalanceBar from "../../components/Profile/BalanceBar.vue";
import LineBreak from "@/components/LineBreak.vue";

export default defineComponent({
  name: "SettingsViev",

  components: {
    CustomSelect: CustomSelect,
    BalanceBar: BalanceBar,
    LineBreak: LineBreak,
  },

  data() {
    return {};
  },
  });

</script>

<style lang="scss">
@use "@/styles/vars";
.add-new-address .mdc-dialog__surface {
  @media (min-width: vars.$desktop) {
    min-width: 500px !important;
  }
}
</style>
