<script setup lang="ts">

defineProps<{
  closeDialog: (payload: MouseEvent) => void;
}>();
</script>

<script lang="ts">
import LineBreak from "../LineBreak.vue";
import {defineComponent} from "vue";
import type UserDataAuth from "@/types/UserDataAuth";
import type ResponseData from "@/types/ResponseData";
import {store} from "@/store";
import {AUTH} from "@/store/actions_type";
import UserDataService from "@/services/UserDataService";
import {mapGetters} from "vuex";
import type UserDataInfo from "@/types/UserDataInfo";


export default defineComponent({
  name: "login-dialog",
  components: {
    LineBreak: LineBreak
  },
  data() {

    return {
      user_data_auth: {} as UserDataAuth,
      user_data_info: {} as UserDataInfo
    };
  },

  created: function () {},

  computed: {
    ...mapGetters(["isAuthenticated"])
  },

  methods: {
    authUser() {
      this.user_data_auth = {
        login: this.user_data_auth.login,
        password: this.user_data_auth.password
      }

      store.dispatch(AUTH, this.user_data_auth)
          .then((data: ResponseData) => {
            this.$emit("isAuthorisedUser")
            this.$emit('isLoginOpen')
            this.$router.push({name: "catalog"})
            UserDataService.userMe()
                .then((response: ResponseData) => {
                  this.user_data_info.login = response.data.username
                })
                .catch((e: Error) => {
                  console.log(e);
                })
          })
          .catch((e: Error) => {
            console.log(e);
          });
    }
  },
});
</script>

<template>
  <!-- leave title for close action -->
  <ui-dialog-title>
    <div :class="$tt('body1')" class="bold large login-dialog__title">
      Личный кабинет
    </div>
  </ui-dialog-title>

  <ui-dialog-content>
    <div class="mt-4">
      <label class="hint" for="login-name">Логин</label>
      <ui-textfield
        v-model="user_data_auth.login"
        input-id="login-name"
        outlined fullwidth
      />
    </div>
    <div class="mt-3">
      <label class="hint" for="login-password">Пароль</label>
      <ui-textfield
        v-model="user_data_auth.password"
        input-id="login-password"
        outlined
        fullwidth
        input-type="password"
      />
    </div>

    <div class="row mt-2 align-items-center">
      <div class="col-auto">
        <ui-form-field>
          <ui-checkbox input-id="login-remember" />
          <label for="login-remember">Запомнить меня</label>
        </ui-form-field>
      </div>
      <div class="col-auto ms-auto">
        <RouterLink to="/recover">
          <div :class="$tt('body1')" class="hint">Забыли пароль?</div>
        </RouterLink>
      </div>
    </div>

    <ui-button v-on:click="authUser()" raised class="col-12 mt-3"
      >Войти</ui-button
    >

    <div class="row mt-3">
      <div :class="$tt('body1')">Войти через сайт или соцсеть</div>

      <div class="mt-2 row g-2 justify-content-xl-between">
        <div class="col-auto">
          <img src="@/assets/social/vk-color.png" alt="vk" />
        </div>
        <div class="col-auto">
          <img src="@/assets/social/ok-color.png" alt="ok" />
        </div>
        <div class="col-auto">
          <img src="@/assets/social/google-color.png" alt="google" />
        </div>
        <div class="col-auto">
          <img src="@/assets/social/ya-color.png" alt="ya" />
        </div>
        <div class="col-auto">
          <img src="@/assets/social/mail-color.png" alt="mail" />
        </div>
        <div class="col-auto">
          <img src="@/assets/social/facebook-color.png" alt="facebook" />
        </div>
        <div class="col-auto">
          <img src="@/assets/social/insta-color.png" alt="insta" />
        </div>
      </div>

      <LineBreak class="my-3" />

      <div class="text-center">
        <RouterLink @click="closeDialog" to="/register">
          <ui-button>ЗАРЕГИСТРИРОВАТЬСЯ</ui-button>
        </RouterLink>
      </div>
    </div>
  </ui-dialog-content>
</template>
