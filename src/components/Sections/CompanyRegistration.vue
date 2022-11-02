<template>
  <div class="col-12 col-xl-3">
    <div class="large bold mb-5">Данные организации</div>
    <div class="mb-3">
      <label for="reg-name" class="d-block mb-2">Логин</label>
      <ui-textfield v-model="user_data.credentials.login" name="login" id="reg-name" outlined fullwidth />
    </div>
    <div class="mb-3">
      <label for="reg-name" class="d-block mb-2">Пароль</label>
      <ui-textfield v-model="user_data.credentials.password" name="password" id="reg-name" outlined fullwidth />
    </div>
    <div class="row gy-3">
      <div class="col-12 col-md-6 col-xl-4">
        <div class="mb-3">
          <label for="reg-name" class="d-block mb-2">ИНН
            <ui-icon v-tooltip="
              'При заполнении ИНН остальные данные добавятся из базы ФНС автоматически '
            " aria-describedby="tooltip" :dark="false">
              contact_support
            </ui-icon>
          </label>
          <ui-textfield v-model="user_data.inn" name="inn" id="reg-name" outlined fullwidth />
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
          <label for="reg-name" class="d-block mb-2">Наименование банка</label>
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
    <div>
      <ui-form-field>
        <ui-checkbox value="agree" input-id="reg-agree" v-model="user_data.allow_data_processed" />
        <label style="font-size: 14px" class="hint" for="reg-agree">Согласие на обработку персональных данных</label>
      </ui-form-field>
      <div class="mb-3">
        <label
          for="reg-phone"
          class="hint mini-heading-color-red"
          v-if="showErrMessage"
          >{{ errMessage }}</label
        >
      </div>
      <ui-button class="mt-3" raised v-on:click="registration()">Зарегистрироваться</ui-button>
    </div>
    <div class="col-12 col-xl-8 ms-auto">
      <div class="large bold mb-5">Офис обслуживания</div>
      <div class="mb-3">Выберите город</div>

      <div class="row gy-4">
        <div class="col-12 col-md-5">
          <CustomSelect outlined fullwidth value :options="service_office_list" v-model="city_office" />

          <div v-for="item in service_office_list[city_office].services" class="mt-2 city-list">
            <div class="row align-items-center city-item">
              <div class="col-auto">
                <ui-radio v-model="office" :value="item.id" />
              </div>
              <div class="col">
                <p class="small fw-400">
                  {{ item.address }}
                  <br />тел. {{ item.phone }}<br />{{ item.work_time }}
                </p>
                <ui-button class="x-small" outlined>Показать на карте</ui-button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-7">
          <img src="@/assets/city-map.jpg" alt="city map" class="city-map w-100" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type CompanyRegistrationData from "@/types/CompanyRegistrationData";
import type ResponseData from "@/types/ResponseData";
import type ServicesData from "@/types/ServicesData";
import UserDataService from "@/services/UserDataService";
import CustomSelect from "../../components/CustomSelect.vue";
import BalanceBar from "../../components/Profile/BalanceBar.vue";
import PersonRegistration from "@/components/Sections/PersonRegistration.vue";
import LineBreak from "@/components/LineBreak.vue";
import router from "@/router";

export default defineComponent({
  name: "CompanyRegistration",

  components: {
    CustomSelect: CustomSelect,
    BalanceBar: BalanceBar,
    // PersonRegistration: PersonRegistration,
    LineBreak: LineBreak,
  },

  data() {
    return {
      user_data: {
        credentials: {
          login: '',
          password: ''
        },
        companyName: '',
        inn: '',
        addressId: 0,
        allow_data_processed: false,
        service_office: 0,
        address: "",
        kpp: "",
        okpo: "",
        bankName: "",
        bankAccount: "",
        bankCorrAccount: "",
        bankBik: "",
        ogrn: "",
        contactPerson: "",
        contactEmail: "",
        contactPhone: "",
      } as CompanyRegistrationData,
      city_office: 0,
      office: 0,
      errMessage: "",
      showErrMessage: false,
      service_office_list: new Array(),
    };
  },

  created: function () {

    let city1: ServicesData = {
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

    let city2: ServicesData = {
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
    registration() {

      let user_data_reg: any
      user_data_reg = {
        credentials: this.user_data.credentials,
        name: this.user_data.companyName,
        inn: this.user_data.inn,
        addressId: this.user_data.addressId,
        officeId: this.office,
        address: this.user_data.address,
        kpp: this.user_data.kpp,
        okpo: this.user_data.okpo,
        bankName: this.user_data.bankName,
        bankAccount: this.user_data.bankAccount,
        bankCorrAccount: this.user_data.bankCorrAccount,
        bankBik: this.user_data.bankBik,
        ogrn: this.user_data.ogrn,
        contactPerson: this.user_data.contactPerson,
        contactEmail: this.user_data.contactEmail,
        contactPhone: this.user_data.contactPhone
      }

      if (this.user_data.credentials.login != '' &&
        this.user_data.credentials.password != '' &&
        this.user_data.allow_data_processed) {
        UserDataService.registrationCompany(user_data_reg)
          .then((response: ResponseData) => {
            console.log(response.data);
            this.showErrMessage = false;
            router.push({ path: "/catalog" });
          })
          .catch((e: Error) => {
            this.showErrMessage = true;
            console.log(e);
          });
      }

      if (this.user_data.credentials.login == '') {
        this.errMessage = ('Поле "Логин" является обязательным');
        this.showErrMessage = true
        return
      }
      if (this.user_data.credentials.password == '') {
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
