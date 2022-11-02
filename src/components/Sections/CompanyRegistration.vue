<template>
  <div class="col-12 col-xl-3">
    <div class="large bold mb-5">Данные организации</div>
    <div class="row gy-3">
      <div class="col-12 col-md-6 col-xl-4">
        <div class="mb-3">
          <label for="reg-name" class="d-block mb-2"
          >ИНН</label
          >
          <ui-textfield v-model="org_data.inn" name="inn" id="reg-name" outlined fullwidth />
        </div>
        <div class="mb-3">
          <label for="reg-name" class="d-block mb-2">Наименование</label>
          <ui-textfield v-model="org_data.companyName" id="reg-name" outlined fullwidth />
        </div>
        <div class="mb-3">
          <label for="reg-name" class="d-block mb-2">Юридический адрес</label>
          <ui-textfield v-model="org_data.addressId" id="reg-name" outlined fullwidth />
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
        <ui-checkbox value="agree" input-id="reg-agree" v-model="org_data.allow_data_processed" />
        <label style="font-size: 14px" class="hint" for="reg-agree">Согласие на обработку персональных данных</label>
      </ui-form-field>
      <div class="mb-3">
        <label for="reg-phone" class="hint mini-heading-color-red" v-if="showErrMessage">{{ errMessage }}</label>
      </div>
      <ui-button class="mt-3" raised v-on:click="registrationOrg()">Зарегистрироваться</ui-button>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import type CompanyRegistrationData from "@/types/CompanyRegistrationData";
import CustomSelect from "../../components/CustomSelect.vue";
import BalanceBar from "../../components/Profile/BalanceBar.vue";
import LineBreak from "@/components/LineBreak.vue";
import UserDataService from "@/services/UserDataService";
import type ResponseData from "@/types/ResponseData";
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
      org_data: {
        companyName: '',
        inn: '',
        addressId: 0,
        allow_data_processed: false,
        service_office: 0,
        address: '',
        kpp: '',
        okpo: '',
        bankName: '',
        bankAccount: '',
        bankCorrAccount: '',
        bankBik: '',
        ogrn: '',
        contactPerson: '',
        contactEmail: '',
        contactPhone: ''
      } as CompanyRegistrationData,
      errMessage: "",
      showErrMessage: false,
    };
  },

  methods: {

    registrationOrg() {
      let user_org_reg: any
      user_org_reg = {
        name: this.org_data.companyName,
        inn: this.org_data.inn,
        addressId: this.org_data.addressId,
        address: this.org_data.address,
        kpp: this.org_data.kpp,
        okpo: this.org_data.okpo,
        bankName: this.org_data.bankName,
        bankAccount: this.org_data.bankAccount,
        bankCorrAccount: this.org_data.bankCorrAccount,
        bankBik: this.org_data.bankBik,
        ogrn: this.org_data.ogrn,
        contactPerson: this.org_data.contactPerson,
        contactEmail: this.org_data.contactEmail,
        contactPhone: this.org_data.contactPhone
      }

        UserDataService.registrationCompany(user_org_reg)
          .then((response: ResponseData) => {
            console.log(response.data)
            this.showErrMessage = false
            router.push({ path: "/catalog" })
          })
          .catch((e: Error) => {
            this.showErrMessage = true
            console.log(e);
          });
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