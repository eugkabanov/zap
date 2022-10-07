<script setup lang="ts">
import { ref } from "vue";

const registrationType = ref(0);
const selectedCity = ref("city1");

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
  <main class="py-5 container-fluid">
    <h1 class="mb-3">Регистрация</h1>

    <ui-chips
      v-model="registrationType"
      type="choice"
      :options="registrationTypes"
    ></ui-chips>

    <div v-if="registrationType === 0" class="mt-3 row gy-4">
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
          <label class="hint" for="reg-agree"
            >Согласие на обработку персональных данных</label
          >
        </ui-form-field>

        <ui-button class="mt-3" raised>Зарегистрироваться</ui-button>
      </div>
      <div class="col-12 col-xl-8 ms-auto">
        <div class="large bold mb-5">Офис обслуживания</div>
        <div>Выберите город</div>

        <div class="row gy-4 mt-1">
          <div class="col-12 col-md-5">
            <ui-select outlined fullwidth value :options="citiesList" />

            <div class="mt-2 city-list">
              <div class="row align-items-center city-item py-4">
                <div class="col-auto">
                  <ui-radio v-model="selectedCity" value="city1" />
                </div>
                <div class="col">
                  <p>
                    г. Москва, ул. Комарова, дом 6, корпус 1
                    <br />тел. 8-900-300-80-60 <br />Пн-Вс с 10:00 до 21:00
                  </p>
                  <ui-button outlined>Показать на карте</ui-button>
                </div>
              </div>
              <div class="row align-items-center city-item py-4">
                <div class="col-auto">
                  <ui-radio v-model="selectedCity" value="city2" />
                </div>
                <div class="col">
                  <p>
                    г. Москва, ул. Комарова, дом 6, корпус 1
                    <br />тел. 8-900-300-80-60 <br />Пн-Вс с 10:00 до 21:00
                  </p>
                  <ui-button outlined>Показать на карте</ui-button>
                </div>
              </div>
              <div class="row align-items-center city-item py-4">
                <div class="col-auto">
                  <ui-radio v-model="selectedCity" value="city3" />
                </div>
                <div class="col">
                  <p>
                    г. Москва, ул. Комарова, дом 6, корпус 1
                    <br />тел. 8-900-300-80-60 <br />Пн-Вс с 10:00 до 21:00
                  </p>
                  <ui-button outlined>Показать на карте</ui-button>
                </div>
              </div>
              <div class="row align-items-center city-item py-4">
                <div class="col-auto">
                  <ui-radio v-model="selectedCity" value="city4" />
                </div>
                <div class="col">
                  <p>
                    г. Москва, ул. Комарова, дом 6, корпус 1
                    <br />тел. 8-900-300-80-60 <br />Пн-Вс с 10:00 до 21:00
                  </p>
                  <ui-button outlined>Показать на карте</ui-button>
                </div>
              </div>
              <div class="row align-items-center city-item py-4">
                <div class="col-auto">
                  <ui-radio v-model="selectedCity" value="city5" />
                </div>
                <div class="col">
                  <p>
                    г. Москва, ул. Комарова, дом 6, корпус 1
                    <br />тел. 8-900-300-80-60 <br />Пн-Вс с 10:00 до 21:00
                  </p>
                  <ui-button outlined>Показать на карте</ui-button>
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
    </div>
    <div v-if="registrationType === 1" class="mt-5">
      <div class="large bold mb-5">Данные организации</div>

      <div class="row gy-3">
        <div class="col-12 col-md-6 col-xl-4">
          <div class="mb-3">
            <label for="reg-name" class="d-block mb-2">ИНН</label>
            <ui-textfield id="reg-name" outlined fullwidth />
          </div>
          <div class="mb-3">
            <label for="reg-name" class="d-block mb-2">Наименование</label>
            <ui-textfield id="reg-name" outlined fullwidth />
          </div>
          <div class="mb-3">
            <label for="reg-name" class="d-block mb-2">Юридический адрес</label>
            <ui-textfield id="reg-name" outlined fullwidth />
          </div>
          <div class="mb-3">
            <label for="reg-name" class="d-block mb-2">Фактический адрес</label>
            <ui-textfield id="reg-name" outlined fullwidth />
          </div>
          <div class="mb-3">
            <label for="reg-name" class="d-block mb-2"
              >Наименование банка</label
            >
            <ui-textfield id="reg-name" outlined fullwidth />
          </div>
        </div>
        <div class="col-12 col-md-6 col-xl-4">
          <div class="mb-3">
            <label for="reg-name" class="d-block mb-2">КПП</label>
            <ui-textfield id="reg-name" outlined fullwidth />
          </div>
          <div class="mb-3">
            <label for="reg-name" class="d-block mb-2">Р/С</label>
            <ui-textfield id="reg-name" outlined fullwidth />
          </div>
          <div class="mb-3">
            <label for="reg-name" class="d-block mb-2">К/С</label>
            <ui-textfield id="reg-name" outlined fullwidth />
          </div>
          <div class="mb-3">
            <label for="reg-name" class="d-block mb-2">БИК</label>
            <ui-textfield id="reg-name" outlined fullwidth />
          </div>
          <div class="mb-3">
            <label for="reg-name" class="d-block mb-2">ОГРН</label>
            <ui-textfield id="reg-name" outlined fullwidth />
          </div>
        </div>
        <div class="col-12 col-md-6 col-xl-4">
          <div class="mb-3">
            <label for="reg-name" class="d-block mb-2">ОКПО</label>
            <ui-textfield id="reg-name" outlined fullwidth />
          </div>
          <div class="mb-3">
            <label for="reg-name" class="d-block mb-2">Контактное лицо</label>
            <ui-textfield id="reg-name" outlined fullwidth />
          </div>
          <div class="mb-3">
            <label for="reg-name" class="d-block mb-2">E-mail</label>
            <ui-textfield id="reg-name" outlined fullwidth />
          </div>
          <div class="mb-3">
            <label for="reg-name" class="d-block mb-2">Телефон</label>
            <ui-textfield id="reg-name" outlined fullwidth />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.city-list {
  max-height: 450px;
  overflow-y: auto;
}
.city-item {
  border-bottom: 1px solid #d9d9de;
}
.city-map {
  display: block;
  height: 100%;
  object-fit: cover;
}
</style>
