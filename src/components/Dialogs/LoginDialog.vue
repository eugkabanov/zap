<script setup lang="ts">
import LineBreak from "@/components/LineBreak.vue";

defineProps<{
  closeDialog: Function;
  onLoginSubmit: Function;
}>();
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
      <ui-textfield input-id="login-name" outlined fullwidth />
    </div>
    <div class="mt-3">
      <label class="hint" for="login-password">Пароль</label>
      <ui-textfield
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

    <ui-button v-on:click="onLoginSubmit" raised class="col-12 mt-3"
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
