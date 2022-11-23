<template>
  <div class="mb-3">
    <label for="reg-name" class="d-block mb-2">Фамилия</label>
    <ui-textfield
      v-model="personAccountInfo.firstName"
      name="full name"
      id="reg-name"
      outlined
      fullwidth
    />
  </div>
  <div class="mb-3">
    <label for="reg-name" class="d-block mb-2">Имя</label>
    <ui-textfield
      v-model="personAccountInfo.secondName"
      name="full name"
      id="reg-name"
      outlined
      fullwidth
    />
  </div>
  <div class="mb-3">
    <label for="reg-name" class="d-block mb-2">Отчество</label>
    <ui-textfield
      v-model="personAccountInfo.patronymic"
      name="full name"
      id="reg-name"
      outlined
      fullwidth
    />
  </div>
  <div class="mb-3">
    <label for="reg-phone" class="d-block mb-2">Телефон</label>
    <ui-textfield
      v-model="personAccountInfo.phone"
      name="Phone number"
      id="reg-phone"
      outlined
      fullwidth
    />
  </div>
  <div class="mb-3">
    <label for="reg-email" class="d-block mb-2">E-mail</label>
    <ui-textfield
      v-model="personAccountInfo.email"
      name="E-mail"
      id="reg-email"
      outlined
      fullwidth
    />
  </div>

  <ui-button class="mt-3" raised @click="update()">Обновить данные</ui-button>
</template>

<script lang="ts">
import AccountService from "@/services/AccountService";
import router from "@/router";

export default {
  name: "PersonProfileInfo",

  props: {
    personAccountInfo: {
      type: Object,
    },
  },

  data() {
    return {
      errMessage: "",
      showErrMessage: false,
    };
  },

  methods: {
    update() {
      AccountService.updatePersonInfo(this.personAccountInfo)
        .then((response: any) => {
          console.log(response.data);
          this.showErrMessage = false;
          router.push({ path: "/settings" });
        })
        .catch((e: Error) => {
          this.showErrMessage = true;
          console.log(e);
        });
    },
  },
};
</script>
