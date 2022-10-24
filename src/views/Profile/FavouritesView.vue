<script setup lang="ts">
import { ref } from "vue";
import BalanceBar from "../../components/Profile/BalanceBar.vue";
import CustomSelect from "../../components/CustomSelect.vue";

const isGarageDialogOpen = ref(false);
const onGarageClick = () => {
  isGarageDialogOpen.value = true;
};
</script>

<template>
  <main class="container-fluid pb-5">
    <BalanceBar class="ms-auto mt-2 mb-3" />
    <h1>Избранное <span :class="$tt('body2')" class="hint">2 товара</span></h1>

    <div class="mt-4 row justify-content-between">
      <div class="col">
        <ui-form-field>
          <ui-checkbox value="all" input-id="select-all" />
          <label class="hint" for="select-all">Выбрать все</label>
        </ui-form-field>
      </div>
      <div class="col-auto hint link">
        <ui-icon type="outlined" class="me-2" style="vertical-align: middle"
          >delete</ui-icon
        >
        Удалить выбранное
      </div>
    </div>

    <div class="mt-3">
      <div class="mb-4 mb-md-0 row favourite-item row align-items-center">
        <div class="col-auto">
          <ui-checkbox value="all" />
        </div>
        <div class="col-9 col-md-auto">
          <img src="@/assets/catalog/wheel.png" alt="product image" />
        </div>
        <div class="col">
          <div class="d-md-none bold large">5841 ₽</div>
          <div>
            <span class="hint">Бренд: </span>NOKIAN
            <span class="ms-4 hint">Артикул: </span>TS32701
          </div>
          <div class="mt-3 bold">
            Шина зимняя 245/60R18 109T XL Hakkapeliitta 10p SUV TL (шип.)
          </div>
          <div class="mt-5">
            <div class="row">
              <div class="col-auto link hint">
                <ui-icon style="vertical-align: middle" outlined
                  >shopping_cart</ui-icon
                >
                В корзину
              </div>
              <div @click="onGarageClick" class="col-auto link hint">
                <ui-icon style="vertical-align: middle" outlined
                  >directions_car</ui-icon
                >
                В гараж
              </div>
              <div class="col-auto link hint">
                <ui-icon style="vertical-align: middle" outlined
                  >delete</ui-icon
                >
                Удалить
              </div>
            </div>
          </div>
        </div>
        <div class="d-none d-md-block col-auto bold large">5841 ₽</div>
      </div>
      <div class="mb-4 mb-md-0 row favourite-item row align-items-center">
        <div class="col-auto">
          <ui-checkbox value="all" />
        </div>
        <div class="col-9 col-md-auto">
          <img src="@/assets/catalog/wheel.png" alt="product image" />
        </div>
        <div class="col">
          <div class="d-md-none bold large">5841 ₽</div>
          <div>
            <span class="hint">Бренд: </span>NOKIAN
            <span class="ms-4 hint">Артикул: </span>TS32701
          </div>
          <div class="mt-3 bold">
            Шина зимняя 245/60R18 109T XL Hakkapeliitta 10p SUV TL (шип.)
          </div>
          <div class="mt-5">
            <div class="row">
              <div class="col-auto link hint">
                <ui-icon style="vertical-align: middle" outlined
                  >shopping_cart</ui-icon
                >
                В корзину
              </div>
              <div @click="onGarageClick" class="col-auto link hint">
                <ui-icon style="vertical-align: middle" outlined
                  >directions_car</ui-icon
                >
                В гараж
              </div>
              <div class="col-auto link hint">
                <ui-icon style="vertical-align: middle" outlined
                  >delete</ui-icon
                >
                Удалить
              </div>
            </div>
          </div>
        </div>
        <div class="d-none d-md-block col-auto bold large">5841 ₽</div>
      </div>
    </div>
  </main>

  <ui-dialog v-model="isGarageDialogOpen" sheet>
    <ui-dialog-title></ui-dialog-title>
    <ui-dialog-content class="py-4">
      <div class="row align-items-center">
        <div class="col-3">Товар</div>
        <div class="col offset-1">
          <div class="bold">
            Шина зимняя 245/60R18 109T XL Hakkapeliitta 10p SUV TL (шип.)
          </div>
        </div>
      </div>
      <div class="row align-items-center mt-3">
        <div class="col-3">Автомобиль</div>
        <div class="col offset-1">
          <CustomSelect
            outlined
            fullwidth
            value
            :options="[{ value: 1, label: 'AUDI' }]"
          />
        </div>
      </div>

      <div class="mt-4 text-center">
        <ui-button raised>Добавить</ui-button>
      </div>
    </ui-dialog-content>
  </ui-dialog>
</template>

<style lang="scss" scoped>
@use "@/styles/vars";
.favourite-item {
  padding-top: 24px;
  padding-bottom: 24px;

  @media (min-width: vars.$desktop) {
    border-top: 1px solid #d9d9de;
    border-bottom: 1px solid #d9d9de;
  }
}
</style>
