<template>
  <div class="large bold mb-4">Изменить пароль</div>

  <div class="col-12 col-xl-5">
    <div class="mb-3 row align-items-center">
      <label class="col-4">Новый пароль</label>
      <div class="col-7 offset-1">
        <ui-textfield input-type="password" v-model="pwd1" outlined fullwidth />
      </div>
    </div>
    <div class="mb-3 row align-items-center">
      <label class="col-4">Повторите пароль</label>
      <div class="col-7 offset-1">
        <ui-textfield input-type="password" v-model="pwd2" outlined fullwidth />
      </div>
    </div>
  </div>
  <div class="mb-3">
    <label class="hint mini-heading-color-red" v-if="showErrMessage">{{
      errMessage
    }}</label>
  </div>
  <div class="mt-5">
    <ui-button raised v-on:click="change_password()">Сохранить</ui-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AccountService from "@/services/AccountService";
import router from "@/router";

export default defineComponent({
  name: "ProfilePasswordChange",

  components: {},

  data() {
    return {
      pwd1: "",
      pwd2: "",
      errMessage: "",
      showErrMessage: false,
    };
  },

  methods: {
    change_password() {
      if (this.pwd1 == "") {
        this.errMessage = 'Поле "Новый пароль" не должно быть пустым';
        this.showErrMessage = true;
        return;
      }
      if (this.pwd2 == "") {
        this.errMessage = 'Поле "Повторите пароль" не должно быть пустым';
        this.showErrMessage = true;
        return;
      }
      if (this.pwd1 != this.pwd2) {
        this.errMessage = "Пароли не совпадают";
        this.showErrMessage = true;
        return;
      } else {
        let request: any = {
          password: this.pwd1,
        };
        AccountService.changePassword(request)
          .then((response: any) => {
            console.log(response.data);
            this.showErrMessage = false;
            router.push({ path: "/settings" });
          })
          .catch((e: Error) => {
            this.showErrMessage = true;
            console.log(e);
          });
      }
    },
  },
});
</script>
