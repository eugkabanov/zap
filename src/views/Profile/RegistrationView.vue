<script setup lang="ts">
import { ref } from "vue";

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
  <main class="py-5 container-fluid">
    <h1 class="mb-3">Регистрация</h1>

    <ui-chips
      v-model="registrationType"
      type="choice"
      :options="registrationTypes"
    ></ui-chips>

    <div class="mt-3 row gy-4">
      <div class="col-12 col-xl-4">
        <div class="large bold mb-5">Личные данные</div>

        <div class="mb-3">
          <label for="reg-name" class="d-block mb-2">Ф.И.О.</label>
          <ui-textfield id="reg-name" outlined fullwidth />
        </div>
        <div class="mb-3">
          <label for="reg-phone" class="d-block mb-2">Телефон</label>
          <ui-textfield id="reg-phone" outlined fullwidth />
        </div>
        <div class="mb-3">
          <label for="reg-email" class="d-block mb-2">E-mail</label>
          <ui-textfield id="reg-email" outlined fullwidth />
        </div>

        <ui-form-field>
          <ui-checkbox value="agree" input-id="reg-agree" />
          <label class="hint" for="reg-agree"
            >Согласие на обработку персональных данных</label
          >
        </ui-form-field>

        <ui-button class="mt-3" raised>Зарегистрироваться</ui-button>
      </div>
      <div class="col-12 col-xl-8">
        <div class="large bold">Офис обслуживания</div>
      </div>
    </div>
  </main>
</template>
