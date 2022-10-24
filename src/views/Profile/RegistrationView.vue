<script setup lang="ts">
import CustomSelect from "../../components/CustomSelect.vue";
</script>

<template>
  <main class="pb-5 container-fluid">
    <BalanceBar class="ms-auto mt-2 mb-3" />
    <h1 class="mb-3">Регистрация</h1>

    <ui-chips
      v-model="registration_type"
      type="choice"
      :options="registration_types"
    ></ui-chips>

    <div v-if="registration_type === 0" class="mt-3 row gy-4">
      <div class="col-12 col-xl-3">
        <div class="large bold mb-5">Личные данные</div>

        <div class="mb-3">
          <label for="reg-name" class="d-block mb-2">Логин</label>
          <ui-textfield
            v-model="user_data.fio"
            name="full name"
            id="reg-name"
            outlined
            fullwidth
          />
        </div>
        <div class="mb-3">
          <label for="reg-phone" class="d-block mb-2">Пароль</label>
          <ui-textfield
            required
            v-model="user_data.phone"
            name="phone number"
            id="reg-phone"
            outlined
            fullwidth
          />
        </div>
<!--        <div class="mb-3">-->
<!--          <label for="reg-email" class="d-block mb-2">E-mail</label>-->
<!--          <ui-textfield-->
<!--            required-->
<!--            v-model="user_data.email"-->
<!--            name="E-Mail"-->
<!--            id="reg-email"-->
<!--            outlined-->
<!--            fullwidth />-->
<!--        </div>-->

        <ui-form-field>
          <ui-checkbox
              value="agree"
              input-id="reg-agree"
              required
              v-model="user_data.allow_data_processed"
          />
          <label class="hint" for="reg-agree">
            Согласие на обработку персональных данных</label>
        </ui-form-field>
        <div class="mb-3">
          <label for="reg-phone" class="hint mini-heading-color-red" v-if="showErrMessage">{{ errMessage }}</label>
        </div>


        <ui-button class="mt-3" raised v-on:click="registrationUser()"
          >Зарегистрироваться</ui-button
        >
      </div>
      <div class="col-12 col-xl-8 ms-auto">
        <div class="large bold mb-5">Офис обслуживания</div>
        <div>Выберите город</div>

        <div class="row gy-4 mt-1">
          <div class="col-12 col-md-5">
            <!--            <ui-select-->
            <!--              outlined fullwidth value-->
            <!--              :options="service_office_list"-->
            <!--              v-model="city_office"-->
            <!--            />-->
            <CustomSelect outlined fullwidth value
                          :options="service_office_list"
                          v-model="city_office"
            />
            <div v-for="item in service_office_list[city_office].services" class="mt-2 city-list">
              <div class="row align-items-center city-item py-4">
                <div class="col-auto">
                  <ui-radio v-model="office" :value="item.id"/>
                </div>
                <div class="col">
                  <p>{{ item.address }}
                    <br />{{ item.phone }} <br />{{ item.work_time }}
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
    <div v-if="registration_type === 1" class="mt-5">
      <div class="large bold mb-5">Данные организации</div>

      <div class="row gy-3">
        <div class="col-12 col-md-6 col-xl-4">
          <div class="mb-3">
            <label for="reg-name" class="d-block mb-2"
            >ИНН
              <ui-icon
                  v-tooltip="
                  'При заполнении ИНН остальные данные добавятся из базы ФНС автоматически '
                "
                  aria-describedby="tooltip"
                  :dark="false"
              >
                contact_support
              </ui-icon></label
            >
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

<script lang="ts">
import { ref } from "vue";
import { defineComponent } from "vue";
import type UserDataRegPerson from "@/types/UserDataRegPerson";
import type ResponseData from "@/types/ResponseData";
import type ServiceData from "@/types/ServiceData";
import UserDataService from "@/services/UserDataService";

export default defineComponent({
  name: "register-user",
  data() {

    return {
      user_data: {
        allow_data_processed: false,
        login: '',
        password: '',
        fio: '',
        phone: '',
        email: '',
      } as UserDataRegPerson,
      city_office: 0,
      office: 0,
      errMessage: "",
      showErrMessage: false,
      service_office_list: [],
      registration_types: [
        {
          label: "Частное лицо",
          value: 0,
        },
        {
          label: "Организация",
          value: 1,
        },
      ],
      registration_type: ref(0),
    };
  },

  created: function () {

    let city1: ServiceData = {
      value: 0,
      label: "г. Москва",
      services: [
        {
          id: 0,
          address: "ул. Пушкина, дом 6",
          phone: "8(499) 577-45-32",
          work_time: "пн-пт 12:00 - 18:00",
        },
        {
          id: 1,
          address: "ул. Глушкова, дом 16",
          phone: "8(495) 677-15-42",
          work_time: "пн-пт 12:00 - 19:00",
        },
      ],
    };

    let city2: ServiceData = {
      value: 1,
      label: "г. Санкт-Петербург",
      services: [
        {
          id: 0,
          address: "ул. Рощина, дом 6",
          phone: "8(357) 876-23-12",
          work_time: "пн-пт 12:00 - 18:00",
        },
      ],
    };

    this.service_office_list.push(city1);
    this.service_office_list.push(city2);
  },

  methods: {
    registrationUser() {
      this.user_data = {
        login: this.user_data.fio,
        password: this.user_data.phone,
        fio: this.user_data.fio,
        phone: this.user_data.phone,
        email: this.user_data.email,
        allow_data_processed: this.user_data.allow_data_processed,
        service_office: this.office
      };

      if (this.user_data.login != '' && this.user_data.password != '' && this.user_data.allow_data_processed) {
        UserDataService.registration(this.user_data)
            .then((response: ResponseData) => {
              console.log(response.data)
              this.showErrMessage = false
              this.$router.push({name: "catalog"})
            })
            .catch((e: Error) => {
              this.showErrMessage = true
              console.log(e);
            });
      }

      if (this.user_data.login == '') {
        this.errMessage = ('Поле "Логин" является обязательным');
        this.showErrMessage = true
        return
      }
      if (this.user_data.password == '') {
        this.errMessage = ('Поле "Пароль" является обязательным');
        this.showErrMessage = true
        return
      }
      if (!this.user_data.allow_data_processed) {
        this.errMessage = ('Необходимо подтвердить согласие на обработку персональных двнных');
        this.showErrMessage = true
        return
      }
    },
  },
});
</script>

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

.mini-heading-color-red {
  color: #e50050;
  margin-bottom: 8px;
}
</style>
