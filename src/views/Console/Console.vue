<template>
  <main class="container-fluid pb-5">
    <BalanceBar class="ms-auto mt-2 mb-3" />
    <h1 class="mb-5 mt-0 large">Консоль администрирования</h1>

    <div class="col-12 col-xl-8">
      <ui-tab-bar v-model="selectedTab">
        <ui-tab min-width content-indicator>Настройки авторизации</ui-tab>
        <ui-tab min-width content-indicator>Настройки...</ui-tab>
      </ui-tab-bar>
    </div>

    <div class="mt-5">
      <section v-if="selectedTab === 0">
        <AuthOrgList :oitems="organizations" />
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import CustomSelect from "@/components/CustomSelect.vue";
import LineBreak from "@/components/LineBreak.vue";
import BalanceBar from "@/components/Profile/BalanceBar.vue";
import AuthOrgList from "@/components/Sections/AuthOrgList.vue";
import AccountService from "@/services/AccountService";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ConsoleView",

  components: {
    CustomSelect: CustomSelect,
    BalanceBar: BalanceBar,
    LineBreak: LineBreak,
    AuthOrgList: AuthOrgList,
  },

  data() {
    return {
      selectedTab: 0,
      organizations: [],
    };
  },

  mounted() {
    this.loadAccoutInfo();
  },

  methods: {
    loadAccoutInfo() {
      AccountService.getDisableAccountList()
        .then((response: any) => {
          console.log(response.data);
          this.organizations = response.data;
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
  },
});
</script>
