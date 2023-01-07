<template>
  <div class="large bold ">Изменить данные организации</div>

  <div class="row gy-3 organisation-signup">
    <div class="col-12 col-md-6 col-xl-4" style="margin-top: 7px!important;">
      <div class="mb-3">
        <label for="reg-inn" class="mb-2"
        >ИНН
          <IconQuestionBlue id="reg-inn-icon" data-tooltip-id="tlp-1" />
          <ui-tooltip-anchor>
            <ui-tooltip id="tlp-1">
              При заполнении ИНН остальные данные добавятся из базы ФНС
              автоматически
            </ui-tooltip>
          </ui-tooltip-anchor>
        </label>
        <ui-textfield
            id="reg-inn"
            v-model="orgAccountInfo.inn"
            required
            outlined
            fullwidth />
      </div>
      <div class="mb-3">
        <label for="reg-companyName" class="mb-2">Наименование</label>
        <ui-textfield
            id="reg-companyName"
            v-model="orgAccountInfo.companyName"
            required
            outlined
            fullwidth />
      </div>
      <div class="mb-3">
        <label for="reg-legalAddress" class="mb-2">Юридический адрес</label>
        <ui-textfield
            id="reg-legalAddress"
            v-model="orgAccountInfo.legalAddress"
            required
            outlined
            fullwidth />
      </div>
      <div class="mb-3">
        <label for="reg-actualAddress" class="mb-2">Фактический адрес</label>
        <ui-textfield
            id="reg-actualAddress"
            v-model="orgAccountInfo.actualAddress"
            required
            outlined
            fullwidth />
      </div>
      <div class="mb-3">
        <label for="reg-bankName" class="mb-2">Наименование банка</label>
        <ui-textfield
            id="reg-bankName"
            v-model="orgAccountInfo.bankName"
            required
            outlined
            fullwidth />
      </div>
    </div>
    <div class="col-12 col-md-6 col-xl-4">
      <div class="mb-3">
        <label for="reg-kpp" class="mb-2">КПП</label>
        <ui-textfield
            id="kpp"
            v-model="orgAccountInfo.kpp"
            required
            outlined
            fullwidth />
      </div>
      <div class="mb-3">
        <label for="reg-bankAccount" class="mb-2">Р/С</label>
        <ui-textfield
            id="reg-bankAccount"
            v-model="orgAccountInfo.bankAccount"
            required
            outlined
            fullwidth />
      </div>
      <div class="mb-3">
        <label for="reg-corrAccount" class="mb-2">К/С</label>
        <ui-textfield
            id="reg-corrAccount"
            v-model="orgAccountInfo.bankCorrAccount"
            required
            outlined
            fullwidth />
      </div>
      <div class="mb-3">
        <label for="reg-bik" class="mb-2">БИК</label>
        <ui-textfield
            id="reg-bik"
            v-model="orgAccountInfo.bankBik"
            required
            outlined
            fullwidth />
      </div>
      <div class="mb-3">
        <label for="reg-ogrn" class="mb-2">ОГРН</label>
        <ui-textfield
            id="reg-ogrn"
            v-model="orgAccountInfo.ogrn"
            required
            outlined
            fullwidth />
      </div>
    </div>
    <div class="col-12 col-md-6 col-xl-4">
      <div class="mb-3">
        <label for="reg-okpo" class="mb-2">ОКПО</label>
        <ui-textfield
            id="reg-okpo"
            v-model="orgAccountInfo.okpo"
            required
            outlined
            fullwidth />
      </div>
      <div class="mb-3">
        <label for="reg-contactPerson" class="mb-2">Контактное лицо</label>
        <ui-textfield
            id="reg-contactPerson"
            v-model="orgAccountInfo.contactPerson"
            required
            outlined
            fullwidth />
      </div>
      <div class="mb-3">
        <label for="reg-email" class="mb-2">E-mail</label>
        <ui-textfield
            id="reg-email"
            v-model="orgAccountInfo.contactEmail"
            required
            outlined
            fullwidth />
      </div>
      <div class="mb-3">
        <label for="reg-contactPhone" class="mb-2">Телефон</label>
        <ui-textfield
            id="reg-contactPhone"
            v-model="orgAccountInfo.contactPhone"
            required
            outlined
            fullwidth />
      </div>
      <ui-button
          fullwidth
          class="mt-4"
          style="margin-top: 20px!important;"
          raised v-on:click="update()"
          :disabled="buttonUpdateEnable"
      >Обновить данные</ui-button>
    </div>
  </div>
  <ui-dialog
      v-model="showNotifMessage"
      maskClosable
      sheet
      class="balance-warning-dialog"
  >
    <NotificationDialog
        :type_message="typeNotif"
        :error_detail_message="notifMessage"
        :hide_error_dialog="hideNotifDialog"
    />
  </ui-dialog>
</template>

<script lang="ts">
import AccountService from "@/services/AccountService";
import IconQuestionBlue from "@/components/icons/iconQuestionBlue.vue";
import NotificationDialog from "@/components/Dialogs/NotificationDialog.vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: "CompanyProfileInfo",

  props: {
    orgAccountInfo: {},
  },

  watch: {
    'orgAccountInfo.inn': function() {
      this.enablingButton()
    },
    'orgAccountInfo.companyName': function() {
      this.enablingButton()
    },
    'orgAccountInfo.legalAddress': function() {
      this.enablingButton()
    },
    'orgAccountInfo.actualAddress': function() {
      this.enablingButton()
    },
    'orgAccountInfo.bankName': function() {
      this.enablingButton()
    },
    'orgAccountInfo.kpp': function() {
      this.enablingButton()
    },
    'orgAccountInfo.bankAccount': function() {
      this.enablingButton()
    },
    'orgAccountInfo.bankCorrAccount': function() {
      this.enablingButton()
    },
    'orgAccountInfo.bankBik': function() {
      this.enablingButton()
    },
    'orgAccountInfo.ogrn': function() {
      this.enablingButton()
    },
    'orgAccountInfo.okpo': function() {
      this.enablingButton()
    },
    'orgAccountInfo.contactPerson': function() {
      this.enablingButton()
    },
    'orgAccountInfo.contactEmail': function() {
      this.enablingButton()
    },
    'orgAccountInfo.contactPhone': function() {
      this.enablingButton()
    },
  },

  components: {
    NotificationDialog: NotificationDialog,
    IconQuestionBlue: IconQuestionBlue,
  },

  data() {
    return {
      showNotifMessage: false,
      typeNotif: "",
      notifMessage: "",
      buttonUpdateEnable: true
    };
  },

  methods: {

    enablingButton() {
      if (this.orgAccountInfo.inn != "" &&
          this.orgAccountInfo.companyName != "" &&
          this.orgAccountInfo.legalAddress != "" &&
          this.orgAccountInfo.actualAddress != "" &&
          this.orgAccountInfo.bankName != "" &&
          this.orgAccountInfo.kpp != "" &&
          this.orgAccountInfo.bankAccount != "" &&
          this.orgAccountInfo.bankCorrAccount != "" &&
          this.orgAccountInfo.bankBik != "" &&
          this.orgAccountInfo.ogrn != "" &&
          this.orgAccountInfo.okpo != "" &&
          this.orgAccountInfo.contactPerson != "" &&
          this.orgAccountInfo.contactEmail != "" &&
          this.orgAccountInfo.contactPhone != ""){
        this.buttonUpdateEnable = false
      } else {
        this.buttonUpdateEnable = true
      }
    },

    hideNotifDialog() {
      this.showNotifMessage = false
      this.typeNotif = ""
      this.notifMessage = "";
    },

    update() {
      AccountService.updateOrganizationInfo(this.orgAccountInfo)
        .then((response: any) => {
          this.showNotifMessage = true
          this.typeNotif = "УВЕДОМЛЕНИЕ"
          this.notifMessage = "Данные успешно обновлены";
        })
        .catch((e: Error) => {
          this.showNotifMessage = true
          this.typeNotif = "ОШИБКА"
          this.notifMessage = "Ошибка при попытке обновить данные!";
          console.log(e);
        });
    },
  },
});
</script>

<style lang="scss" scoped>
.mini-heading-color-red {
  background-color: rgb(170, 48, 48);
}

.mini-heading-color-green {
  background-color: rgb(98, 212, 98);
}
</style>
