<script setup lang="ts">
import { ref } from "vue";
import BalanceBar from "../../components/Profile/BalanceBar.vue";
import GarageDialog from "@/components/Dialogs/GarageDialog.vue";

const isGarageDialogOpen = ref(false);
const onGarageClick = () => {
  isGarageDialogOpen.value = true;
};
</script>

<template>
  <main class="container-fluid pb-5">
    <div class="row">
      <h1 class="col-auto mt-5">
        Избранное <span :class="$tt('body2')" class="hint ms-3">2 товара</span>
      </h1>
      <div class="col-auto ms-auto">
        <BalanceBar class="mt-2 mb-3" />
      </div>
    </div>

    <div class="mt-4 row justify-content-between">
      <div class="col">
        <ui-form-field>
          <ui-checkbox value="all" input-id="select-all" />
          <label class="small" for="select-all">Выбрать все</label>
        </ui-form-field>
      </div>
      <div class="col-auto hint small fw-400 link">
        <ui-icon class="me-2" style="vertical-align: middle"
          >delete_outline</ui-icon
        >
        Удалить выбранное
      </div>
    </div>

    <div class="mt-3 col-12 col-xl-9">
      <div class="mb-4 mb-md-0 row favourite-item row align-items-center">
        <div class="col-auto">
          <ui-checkbox value="all" />
        </div>
        <div class="col-9 col-md-auto">
          <img
            src="@/assets/catalog/wheel.png"
            alt="product image"
            style="height: 104px"
          />
        </div>
        <div class="col">
          <div class="d-md-none bold large">5841 ₽</div>
          <div>
            <span class="hint fw-400">Бренд: </span>NOKIAN
            <span class="ms-4 hint">Артикул: </span>TS32701
          </div>
          <div class="mt-3 x-bold" style="font-size: 18px">
            Шина зимняя 245/60R18 109T XL Hakkapeliitta 10p SUV TL (шип.)
          </div>
          <div class="mt-5">
            <div class="row">
              <div class="col-auto link hint small fw-400">
                <ui-icon style="vertical-align: middle" outlined
                  >shopping_cart</ui-icon
                >
                В корзину
              </div>
              <div
                @click="onGarageClick"
                class="col-auto link hint small fw-400"
              >
                <ui-icon style="vertical-align: middle" outlined
                  >directions_car</ui-icon
                >
                В гараж
              </div>
              <div class="col-auto link hint small fw-400">
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
          <img
            src="@/assets/catalog/wheel.png"
            alt="product image"
            style="height: 104px"
          />
        </div>
        <div class="col">
          <div class="d-md-none bold large">5841 ₽</div>
          <div>
            <span class="hint fw-400">Бренд: </span>NOKIAN
            <span class="ms-4 hint">Артикул: </span>TS32701
          </div>
          <div class="mt-3 x-bold" style="font-size: 18px">
            Шина зимняя 245/60R18 109T XL Hakkapeliitta 10p SUV TL (шип.)
          </div>
          <div class="mt-5">
            <div class="row">
              <div class="col-auto link hint small fw-400">
                <ui-icon style="vertical-align: middle" outlined
                  >shopping_cart</ui-icon
                >
                В корзину
              </div>
              <div
                @click="onGarageClick"
                class="col-auto link hint small fw-400"
              >
                <ui-icon style="vertical-align: middle" outlined
                  >directions_car</ui-icon
                >
                В гараж
              </div>
              <div class="col-auto link hint small fw-400">
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

  <ui-dialog class="add-garage" v-model="isGarageDialogOpen" sheet>
    <GarageDialog />
  </ui-dialog>
</template>

<style lang="scss" scoped>
@use "@/styles/vars";

.add-garage {
  @media (min-width: vars.$desktop) {
    .mdc-dialog__container {
      width: 512px;
    }
  }
}
.favourite-item {
  padding-top: 24px;
  padding-bottom: 24px;

  @media (min-width: vars.$desktop) {
    border-top: 1px solid #d9d9de;
    border-bottom: 1px solid #d9d9de;
  }

  &:last-child {
    border-top: none;
  }
}
</style>
