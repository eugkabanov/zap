<template>
  <main class="pb-5 container-fluid">
    <BalanceBar class="ms-auto mt-2 mb-3" />
    <h1 class="mb-5 mt-0 large">Регистрация</h1>

    <ui-chips
      v-model="registration_type"
      type="choice"
      :options="registration_types"
    ></ui-chips>

    <section v-if="registration_type === 0" class="mt-3 row gy-4">
      <PersonRegistration />
    </section>
    <section v-if="registration_type === 1" class="mt-5">
      <CompanyRegistration />
    </section>
  </main>
</template>

<script lang="ts">
import { ref } from "vue";
import { defineComponent } from "vue";
import CustomSelect from "../../components/CustomSelect.vue";
import BalanceBar from "../../components/Profile/BalanceBar.vue";
import PersonRegistration from "@/components/Sections/PersonRegistration.vue";
import CompanyRegistration from "@/components/Sections/CompanyRegistration.vue";
import LineBreak from "@/components/LineBreak.vue";

export default defineComponent({
  name: "RegistrationView",

  components: {
    CustomSelect: CustomSelect,
    BalanceBar: BalanceBar,
    PersonRegistration: PersonRegistration,
    CompanyRegistration: CompanyRegistration,
    LineBreak: LineBreak,
  },

  data() {
    return {
      registration_types: [
        {
          label: "Частное лицо",
          value: 0,
        },
        {
          label: "Организация",
          value: 1,
        },
      ],
      registration_type: ref(0),
    };
  },
  });
</script>

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

.mini-heading-color-red {
  color: #e50050;
  margin-bottom: 8px;
}
</style>
