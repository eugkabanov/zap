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
  <div>
    <div class="mb-3" v-if="errMessage != ''">
      <label class="hint mini-heading-color-red">{{ errMessage }}</label>
    </div>
    <div class="mb-3" v-else-if="okMessage != ''">
      <label class="hint mini-heading-color-green">{{ okMessage }}</label>
    </div>
  </div>
  <div class="mt-5">
    <ui-button raised v-on:click="change_password()">Сохранить</ui-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AccountService from "@/services/AccountService";

export default defineComponent({
  name: "ProfilePasswordChange",

  components: {},

  data() {
    return {
      pwd1: "",
      pwd2: "",
      errMessage: "",
      okMessage: "",
    };
  },

  methods: {
    change_password() {
      if (this.pwd1 == "") {
        this.errMessage = 'Поле "Новый пароль" не должно быть пустым';
        return;
      }
      if (this.pwd2 == "") {
        this.errMessage = 'Поле "Повторите пароль" не должно быть пустым';
        return;
      }
      if (this.pwd1 != this.pwd2) {
        this.errMessage = "Пароли не совпадают";
        return;
      } else {
        let request: any = {
          password: this.pwd1,
        };
        AccountService.changePassword(request)
          .then((response: any) => {
            console.log(response.data);
            this.okMessage = "Пароль успешно обновлен";
            this.errMessage = "";
          })
          .catch((e: Error) => {
            this.errMessage = "Произошла ошибка при попытке изменить данные!";
            console.log(e);
          });
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.mini-heading-color-red {
  background-color: rgb(170, 48, 48);
}

.mini-heading-color-green {
  background-color: rgb(98, 212, 98);
}
</style>
