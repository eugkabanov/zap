<template>
  <div class="col-auto ms-auto">
    <BalanceBar class="mt-2 mb-3" />
  </div>

  <section v-if="accountInfo.inn != null" class="mt-3 row gy-4">
    <CompanyProfileInfo :orgAccountInfo="accountInfo" />
  </section>
  <!-- Временно уберем отображение для физика -->
  <section v-else class="mt-5">
    <!-- <PersonProfileInfo :personAccountInfo="accountInfo" /> -->
    <div>Загружаем данные</div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AccountService from "@/services/AccountService";
import PersonProfileInfo from "@/components/Sections/PersonProfileInfo.vue";
import CompanyProfileInfo from "@/components/Sections/CompanyProfileInfo.vue";
import type CompanyRegistrationData from "@/types/CompanyRegistrationData";

export default defineComponent({
  name: "ProfileInfo",

  components: {
    PersonProfileInfo: PersonProfileInfo,
    CompanyProfileInfo: CompanyProfileInfo,
  },

  data() {
    return {
      accountInfo: {} as CompanyRegistrationData,
    };
  },

  mounted() {
    this.loadAccoutInfo();
  },

  methods: {
    loadAccoutInfo() {
      AccountService.accountInfo()
        .then((response: any) => {
          console.log(response.data);
          this.accountInfo = response.data;
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
  },
});
</script>
