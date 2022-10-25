<script setup lang="ts">
import { ref } from "vue";
import BalanceBar from "../../components/Profile/BalanceBar.vue";
import PersonRegistration from "@/components/Sections/PersonRegistration.vue";
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
    <BalanceBar class="ms-auto mt-2 mb-3" />
    <h1 class="mb-3">Регистрация</h1>

    <ui-chips
      v-model="registrationType"
      type="choice"
      :options="registrationTypes"
    ></ui-chips>

    <section v-if="registrationType === 0" class="mt-3 row gy-4">
      <PersonRegistration />
    </section>
    <section v-if="registrationType === 1" class="mt-5">
      <CompanyRegistration />
    </section>
  </main>
</template>

<style scoped lang="scss">
.city-list {
  max-height: 450px;
  overflow-y: auto;
}
.city-item {
  border-bottom: 1px solid #d9d9de;
}
.city-map {
  display: block;
  height: 100%;
  object-fit: cover;
}
</style>
