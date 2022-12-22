<template>
  <main class="container-fluid pb-5">
    <div class="row">
      <h1 class="col-auto my-5 large">Изменение пароля</h1>
      <div class="col-auto ms-auto">
        <BalanceBar class="mt-2 mb-3" />
      </div>
    </div>
    <div class="col-10" style="margin-bottom: 20px">
      <label for="select-all">Введите новый пароль.</label>
    </div>
    <div class="col-4" style="margin-bottom: 20px">
      <ui-textfield
          input-type="password"
          fullwidth
          :required="true"
          v-model="password"
          >
        Password
      </ui-textfield>
    </div>
    <div class="row" style="margin-top: 40px!important;">
      <div class="col-md-3">
        <ui-button :disabled="disableButton" v-on:click="accountPassUpdate" raised>Изменить пароль</ui-button>
      </div>
      <div class="col-md-1">
        <ui-spinner
            :active="progressSpinner"
        ></ui-spinner>
      </div>
    </div>
  </main>
  <ui-dialog
      v-model="showNotification"
      maskClosable
      sheet
      class="balance-warning-dialog"
  >
    <NotificationDialog
        :type_message="typeNotification"
        :error_detail_message="notificationMessage"
        :hide_error_dialog="hideErrorDialog"
        @notificationContinue="notificationContinue"
    />
  </ui-dialog>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {mapGetters} from "vuex";
import NotificationDialog from "@/components/Dialogs/NotificationDialog.vue";
import LineBreak from "@/components/LineBreak.vue";
import AccountService from "@/services/AccountService";
import router from "@/router";


export default defineComponent({
  name: "RecoveryCheck",

  created: function () {
    this.accountCheckRecovery()
  },

  data() {

    return {
      disableButton: true,
      progressSpinner: false,
      password: '',
      showNotification: false,
      notificationMessage: "",
      typeNotification: "",
      login: '',
      checkUuid: '',
      updatePassCheck: false
    };
  },

  watch: {
    password () {
      if (this.password.length != 0) {
        this.disableButton = false
      } else {
        this.disableButton = true
      }

    }
  },

  methods: {

    notificationContinue() {
      if (!this.updatePassCheck) {
        router.push({ path: "/recover" });
      } else {
        router.push({ path: "/" });
      }
    },

    hideErrorDialog() {
      this.typeNotification = ""
      this.notificationMessage = ""
      this.showNotification = false
    },

    accountCheckRecovery() {
      this.checkUuid = this.$route.params.checkUuid

      AccountService.accountCheckRecovery(this.checkUuid)
          .then((response: any) => {
            this.login = response.data
          })
          .catch((e: Error) => {
            router.push({path: "/"});
            console.log(e);
          });
    },

    async accountPassUpdate() {
      this.progressSpinner = true
      await AccountService.accountPassRecoveryUpdate(this.login, this.password, this.checkUuid)
          .then((response: any) => {
            if (response.data.errorDescription == '402' || response.data.errorDescription == '405' ) {
              this.typeNotification = "УВЕДОМЛЕНИЕ"
              this.notificationMessage = "Время для изменения пароля истекло, попробуйте ещё раз."
              this.showNotification = true
            } else {
              this.updatePassCheck = true
              this.typeNotification = "УВЕДОМЛЕНИЕ"
              this.notificationMessage = "Ваш пароль успешно изменён."
              this.showNotification = true
            }
          })
          .catch((e: Error) => {
            this.typeNotification = "ОШИБКА"
            this.notificationMessage = "Попробуйте изменить пароль позже."
            this.showNotification = true
            console.log(e);
            this.progressSpinner = false
          });
      this.progressSpinner = false
    },

  },

  components: {
    NotificationDialog: NotificationDialog,
    LineBreak: LineBreak
  },

  computed: {
    ...mapGetters(["isAuthenticated"])
  },
});
</script>

<style scoped>
div#pass-contents {
  min-height: 60vh;
}
</style>
