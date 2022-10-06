<script setup lang="ts">
import { ref } from "vue";

const activeTab = ref(0);
</script>

<template>
  <main class="container-fluid py-5">
    <h1 :class="$tt('headline1')">Корзина</h1>
    <div class="mt-5">
      <ui-tab-bar v-model="activeTab">
        <ui-tab min-width content-indicator>Корзина</ui-tab>
        <ui-tab min-width content-indicator>Отложенные</ui-tab>
        <ui-tab min-width content-indicator>Удаленные</ui-tab>
      </ui-tab-bar>
    </div>

    <div class="row mt-4">
      <div class="col-12 col-md-8 col-xl-6">
        <div>
          <label for="cart-comments" class="d-block mb-2"
            >Комментарий к заказу</label
          >
          <ui-textfield
            id="cart-comments"
            outlined
            fullwidth
            input-type="textarea"
            rows="8"
            cols="40"
          />
        </div>

        <div class="mt-3">
          <ui-form-field>
            <ui-checkbox value="agree" input-id="cart-agree" />
            <label class="hint" for="cart-agree"
              >С условиями и договором ознакомлен</label
            >
          </ui-form-field>
        </div>

        <div class="mt-4">
          <ui-button raised>Оформить заказ (0)</ui-button>
        </div>

        <div class="mt-3 large" :class="$tt('body1')">
          Сумма заказа: <b>0,00 ₽</b>
        </div>
      </div>
    </div>
  </main>
</template>
