<script setup lang="ts">
import { ref } from "vue";
import BalanceBar from "../../components/Profile/BalanceBar.vue";
import CompanyRegistration from "@/components/Sections/CompanyRegistration.vue";

const registrationType = ref(0);

const registrationTypes = [
  {
    label: "Частное лицо",
    value: 0,
  },
  {
    label: "Организация",
    value: 1,
  },
];
</script>

<template>
  <main class="pb-5 container-fluid">
    <div class="row">
      <h1 class="col-auto my-5 large">Регистрация</h1>
      <div class="col-auto ms-auto">
        <BalanceBar class="mt-2 mb-3" />
      </div>
    </div>

<!--    <ui-chips-->
<!--      v-model="registration_type"-->
<!--      type="choice"-->
<!--      :options="registration_types"-->
<!--    ></ui-chips>-->

<!--    <section v-if="registration_type === 0" class="mt-3 row gy-4">-->
<!--      <PersonRegistration />-->
<!--    </section>-->
<!--    <section v-if="registration_type === 1" class="mt-5">-->
    <section class="mt-5">
      <CompanyRegistration />
    </section>
  </main>
</template>

<style scoped lang="scss">
.mini-heading-color-red {
  color: #e50050;
  margin-bottom: 8px;
}
</style>
