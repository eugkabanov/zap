<template>
  <div class="row">
    <div class="col col-md-5 col-xl-4">
      <div class="mb-3">
        <label for="reg-name" class="d-block mb-2">ИНН</label>
        <ui-textfield
          v-model="orgAccountInfo.inn"
          name="inn"
          id="reg-name"
          outlined
          fullwidth
        />
      </div>
      <div class="mb-3">
        <label for="companyName" class="d-block mb-2">Наименование</label>
        <ui-textfield
          v-model="orgAccountInfo.companyName"
          name="companyName"
          id="reg-name"
          outlined
          fullwidth
        />
      </div>
      <div class="mb-3">
        <label for="addressId" class="d-block mb-2">Юридический адрес</label>
        <ui-textfield
          v-model="orgAccountInfo.legalAddress"
          name="addressId"
          id="reg-name"
          outlined
          fullwidth
        />
      </div>
      <div class="mb-3">
        <label for="address" class="d-block mb-2">Фактический адрес</label>
        <ui-textfield
          v-model="orgAccountInfo.actualAddress"
          name="address"
          id="reg-name"
          outlined
          fullwidth
        />
      </div>
      <div class="mb-3">
        <label for="bankName" class="d-block mb-2">Наименование банка</label>
        <ui-textfield
          v-model="orgAccountInfo.bankName"
          name="bankName"
          id="reg-name"
          outlined
          fullwidth
        />
      </div>
    </div>
    <div class="col col-md-5 col-xl-4">
      <div class="mb-3">
        <label for="reg-name" class="d-block mb-2">КПП</label>
        <ui-textfield
          v-model="orgAccountInfo.kpp"
          name="kpp"
          id="reg-name"
          outlined
          fullwidth
        />
      </div>
      <div class="mb-3">
        <label for="reg-name" class="d-block mb-2">Р/С</label>
        <ui-textfield
          v-model="orgAccountInfo.bankAccount"
          name="bankAccount"
          id="reg-name"
          outlined
          fullwidth
        />
      </div>
      <div class="mb-3">
        <label for="reg-name" class="d-block mb-2">К/С</label>
        <ui-textfield
          v-model="orgAccountInfo.bankCorrAccount"
          name="bankCorrAccount"
          id="reg-name"
          outlined
          fullwidth
        />
      </div>
      <div class="mb-3">
        <label for="reg-name" class="d-block mb-2">БИК</label>
        <ui-textfield
          v-model="orgAccountInfo.bankBik"
          name="bankBik"
          id="reg-name"
          outlined
          fullwidth
        />
      </div>
      <div class="mb-3">
        <label for="reg-name" class="d-block mb-2">ОГРН</label>
        <ui-textfield
          v-model="orgAccountInfo.ogrn"
          name="ogrn"
          id="reg-name"
          outlined
          fullwidth
        />
      </div>
    </div>
    <div class="col col-md-5 col-xl-4">
      <div class="mb-3">
        <label for="reg-name" class="d-block mb-2">ОКПО</label>
        <ui-textfield
          v-model="orgAccountInfo.okpo"
          name="okpo"
          id="reg-name"
          outlined
          fullwidth
        />
      </div>
      <div class="mb-3">
        <label for="reg-name" class="d-block mb-2">Контактное лицо</label>
        <ui-textfield
          v-model="orgAccountInfo.contactPerson"
          name="contactPerson"
          id="reg-name"
          outlined
          fullwidth
        />
      </div>
      <div class="mb-3">
        <label for="reg-name" class="d-block mb-2">E-mail</label>
        <ui-textfield
          v-model="orgAccountInfo.contactEmail"
          name="contactEmail"
          id="reg-name"
          outlined
          fullwidth
        />
      </div>
      <div class="mb-3">
        <label for="reg-name" class="d-block mb-2">Телефон</label>
        <ui-textfield
          v-model="orgAccountInfo.contactPhone"
          name="contactPhone"
          id="reg-name"
          outlined
          fullwidth
        />
      </div>
    </div>
  </div>

  <div>
    <div class="mb-3" v-if="errMessage != ''">
      <label class="hint mini-heading-color-red">{{ errMessage }}</label>
    </div>
    <div class="mb-3" v-else-if="okMessage != ''">
      <label class="hint mini-heading-color-green">{{ okMessage }}</label>
    </div>
  </div>
  <div class="row gy-4">
    <ui-button class="mt-3" raised v-on:click="update()">Обновить</ui-button>
  </div>
</template>

<script lang="ts">
import AccountService from "@/services/AccountService";

export default {
  name: "CompanyProfileInfo",

  props: {
    orgAccountInfo: {
      type: Object,
    },
  },

  data() {
    return {
      errMessage: "",
      okMessage: "",
    };
  },

  methods: {
    update() {
      AccountService.updateOrganizationInfo(this.orgAccountInfo)
        .then((response: any) => {
          console.log(response.data);
          this.okMessage = "Данные успешно обновлены";
          this.errMessage = "";
        })
        .catch((e: Error) => {
          this.errMessage = "Ошибка при попытке обновить данные!";
          console.log(e);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.mini-heading-color-red {
  background-color: rgb(170, 48, 48);
}

.mini-heading-color-green {
  background-color: rgb(98, 212, 98);
}
</style>
