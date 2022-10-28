<script setup lang="ts">
import { ref } from "vue";
import CustomSelect from "../../components/CustomSelect.vue";

const selectedCity = ref("city1");
const citiesList = [
  {
    label: "г. Москва",
    value: "MSC",
  },
  {
    label: "г. Санкт-Петербург",
    value: "SPB",
  },
];
</script>

<template>
  <div class="col-12 col-xl-3">
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
      <label style="font-size: 14px" class="hint" for="reg-agree"
        >Согласие на обработку персональных данных</label
      >
    </ui-form-field>

    <ui-button class="mt-3" raised>Зарегистрироваться</ui-button>
  </div>
  <div class="col-12 col-xl-8 ms-auto">
    <div class="large bold mb-5">Офис обслуживания</div>
    <div class="mb-3">Выберите город</div>

    <div class="row gy-4">
      <div class="col-12 col-md-5">
        <CustomSelect outlined fullwidth value :options="citiesList" />

        <div class="mt-2 city-list">
          <div class="row align-items-center city-item">
            <div class="col-auto">
              <ui-radio v-model="selectedCity" value="city1" />
            </div>
            <div class="col">
              <p class="small fw-400">
                г. Москва, ул. Комарова, дом 6, корпус 1
                <br />тел. 8-900-300-80-60 <br />Пн-Вс с 10:00 до 21:00
              </p>
              <ui-button class="x-small" outlined>Показать на карте</ui-button>
            </div>
          </div>
          <div class="row align-items-center city-item">
            <div class="col-auto">
              <ui-radio v-model="selectedCity" value="city2" />
            </div>
            <div class="col">
              <p class="small fw-400">
                г. Москва, ул. Комарова, дом 6, корпус 1
                <br />тел. 8-900-300-80-60 <br />Пн-Вс с 10:00 до 21:00
              </p>
              <ui-button class="x-small" outlined>Показать на карте</ui-button>
            </div>
          </div>
          <div class="row align-items-center city-item">
            <div class="col-auto">
              <ui-radio v-model="selectedCity" value="city3" />
            </div>
            <div class="col">
              <p class="small fw-400">
                г. Москва, ул. Комарова, дом 6, корпус 1
                <br />тел. 8-900-300-80-60 <br />Пн-Вс с 10:00 до 21:00
              </p>
              <ui-button class="x-small" outlined>Показать на карте</ui-button>
            </div>
          </div>
          <div class="row align-items-center city-item">
            <div class="col-auto">
              <ui-radio v-model="selectedCity" value="city4" />
            </div>
            <div class="col">
              <p class="small fw-400">
                г. Москва, ул. Комарова, дом 6, корпус 1
                <br />тел. 8-900-300-80-60 <br />Пн-Вс с 10:00 до 21:00
              </p>
              <ui-button class="x-small" outlined>Показать на карте</ui-button>
            </div>
          </div>
          <div class="row align-items-center city-item">
            <div class="col-auto">
              <ui-radio v-model="selectedCity" value="city5" />
            </div>
            <div class="col">
              <p class="small fw-400">
                г. Москва, ул. Комарова, дом 6, корпус 1
                <br />тел. 8-900-300-80-60 <br />Пн-Вс с 10:00 до 21:00
              </p>
              <ui-button class="x-small" outlined>Показать на карте</ui-button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-7">
        <img
          src="@/assets/city-map.jpg"
          alt="city map"
          class="city-map w-100"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.city-list {
  .city-item {
    border-bottom: 1px solid #d9d9de;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  max-height: 450px;
  overflow-y: auto;
}
</style>
