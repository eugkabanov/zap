<script setup lang="ts">
import { ref } from "vue";
import LineBreak from "../LineBreak.vue";

const isNavMenuOpen = ref(false);
const isLoginOpen = ref(false);
const isProfileDialogOpen = ref(false);
const isNotificationOpen = ref(false);

const isAuthorisedUser = ref(false);

const openLogin = () => (isLoginOpen.value = true);
const openProfileDialog = () => (isProfileDialogOpen.value = true);
const closeProfileDialog = () => (isProfileDialogOpen.value = false);

const closeLoginDialog = () => (isLoginOpen.value = false);
const onLoginSubmit = () => {
  isAuthorisedUser.value = true;
  isLoginOpen.value = false;
};
const onLogout = () => {
  isAuthorisedUser.value = false;
  isProfileDialogOpen.value = false;
};

const onNotificationClick = () => {
  isNotificationOpen.value = true;
  closeProfileDialog();
};
</script>

<template>
  <ui-drawer type="modal" v-model="isNavMenuOpen">
    <ui-drawer-header>
      <ui-drawer-title
        ><img
          style="vertical-align: middle"
          alt="Logo"
          src="@/assets/logo-blue.svg"
          width="54"
          height="32"
      /></ui-drawer-title>
    </ui-drawer-header>
    <ui-drawer-content>
      <ui-nav>
        <router-link v-slot="{ href, isActive }" to="/">
          <ui-nav-item :href="href" :active="isActive">Главная</ui-nav-item>
        </router-link>
        <router-link v-slot="{ href, isActive }" to="/catalog">
          <ui-nav-item :href="href" :active="isActive">Каталог</ui-nav-item>
        </router-link>
        <router-link v-slot="{ href, isActive }" to="/about">
          <ui-nav-item :href="href" :active="isActive"
            >О&nbsp;компании</ui-nav-item
          >
        </router-link>
        <router-link v-slot="{ href, isActive }" to="/work">
          <ui-nav-item :href="href" :active="isActive"
            >Сотрудничество</ui-nav-item
          >
        </router-link>
        <router-link v-slot="{ href, isActive }" to="/help">
          <ui-nav-item :href="href" :active="isActive">Помощь</ui-nav-item>
        </router-link>
        <router-link v-slot="{ href, isActive }" to="/news">
          <ui-nav-item :href="href" :active="isActive">Новости</ui-nav-item>
        </router-link>
        <router-link v-slot="{ href, isActive }" to="/contacts">
          <ui-nav-item :href="href" :active="isActive">Контакты</ui-nav-item>
        </router-link>
      </ui-nav>
    </ui-drawer-content>
  </ui-drawer>
  <header id="app-header" class="container-fluid">
    <div class="row align-items-center">
      <div class="d-xl-none col-auto">
        <ui-icon-button v-model="isNavMenuOpen">menu</ui-icon-button>
      </div>
      <div class="col-auto">
        <img class="logo" alt="Logo" src="@/assets/logo-blue.svg" />
      </div>
      <nav class="col-auto d-none d-lg-block">
        <div class="row">
          <div class="col-auto">
            <RouterLink to="/">Главная</RouterLink>
          </div>
          <div class="col-auto">
            <RouterLink to="/catalog">Каталог</RouterLink>
          </div>
          <div class="col-auto">
            <RouterLink to="/about">О&nbsp;компании</RouterLink>
          </div>
          <div class="col-auto">
            <RouterLink to="/work">Сотрудничество</RouterLink>
          </div>
          <div class="col-auto">
            <RouterLink to="/help">Помощь</RouterLink>
          </div>
          <div class="col-auto">
            <RouterLink to="/news">Новости</RouterLink>
          </div>
          <div class="col-auto">
            <RouterLink to="/contacts">Контакты</RouterLink>
          </div>
        </div>
      </nav>
      <div class="ms-auto col-auto">
        <div class="row row-cols-auto g-0">
          <div class="header-item">
            <RouterLink to="/cart">
              <ui-badge overlap :count="12"
                ><ui-icon>shopping_cart</ui-icon></ui-badge
              ><span class="header-item__label">Корзина</span>
            </RouterLink>
          </div>
          <div class="header-item">
            <RouterLink to="/favourites">
              <ui-icon>star_outline</ui-icon
              ><span class="header-item__label">Избранное</span>
            </RouterLink>
          </div>
          <div class="header-item">
            <RouterLink to="/orders">
              <ui-icon>receipt</ui-icon
              ><span class="header-item__label">Заказы</span>
            </RouterLink>
          </div>
          <div
            v-if="isAuthorisedUser"
            v-on:click="openProfileDialog"
            class="header-item"
          >
            <ui-icon>perm_identity</ui-icon
            ><span class="header-item__label">Сергей</span>
          </div>
          <div v-else v-on:click="openLogin" class="header-item">
            <ui-icon>perm_identity</ui-icon
            ><span class="header-item__label">Вход</span>
          </div>
        </div>
      </div>
    </div>
  </header>

  <ui-dialog
    v-model="isProfileDialogOpen"
    sheet
    maskClosable
    class="profile-dialog"
  >
    <ui-dialog-title>
      <div :class="$tt('body1')" class="bold large">Сергей Иванов</div>
    </ui-dialog-title>

    <ui-dialog-content>
      <div class="row flex-column py-4">
        <RouterLink
          @click="closeProfileDialog"
          to="/balance"
          class="row align-items-center clear mb-4"
        >
          <div class="col-auto">
            <ui-icon>account_balance_wallet</ui-icon>
          </div>
          <div class="col">
            <div :class="$tt('body1')">Баланс</div>
          </div>
        </RouterLink>
        <div
          @click="onNotificationClick"
          class="row align-items-center link clear mb-4"
        >
          <div class="col-auto">
            <ui-icon>notifications</ui-icon>
          </div>
          <div class="col">
            <div :class="$tt('body1')">Уведомления</div>
          </div>
        </div>
        <RouterLink
          @click="closeProfileDialog"
          to="/park"
          class="row align-items-center clear mb-4"
        >
          <div class="col-auto">
            <ui-icon>directions_car</ui-icon>
          </div>
          <div class="col">
            <div :class="$tt('body1')">Гараж</div>
          </div>
        </RouterLink>
        <RouterLink
          @click="closeProfileDialog"
          to="/favourites"
          class="row align-items-center clear mb-4"
        >
          <div class="col-auto">
            <ui-icon>star_outline</ui-icon>
          </div>
          <div class="col">
            <div :class="$tt('body1')">Избранное</div>
          </div>
        </RouterLink>
        <RouterLink
          @click="closeProfileDialog"
          to="/orders"
          class="row align-items-center clear mb-4"
        >
          <div class="col-auto">
            <ui-icon>list_alt</ui-icon>
          </div>
          <div class="col">
            <div :class="$tt('body1')">Заказы</div>
          </div>
        </RouterLink>
        <RouterLink
          @click="closeProfileDialog"
          to="/appeals"
          class="row align-items-center clear mb-4"
        >
          <div class="col-auto">
            <ui-icon>contact_support</ui-icon>
          </div>
          <div class="col">
            <div :class="$tt('body1')">Вопросы по заказам</div>
          </div>
        </RouterLink>
        <RouterLink
          @click="closeProfileDialog"
          to="/dealers"
          class="row align-items-center clear mb-4"
        >
          <div class="col-auto">
            <ui-icon>local_shipping</ui-icon>
          </div>
          <div class="col">
            <div :class="$tt('body1')">Поставщики</div>
          </div>
        </RouterLink>
        <RouterLink
          @click="closeProfileDialog"
          to="/sessions"
          class="row align-items-center clear mb-4"
        >
          <div class="col-auto">
            <ui-icon>desktop_windows</ui-icon>
          </div>
          <div class="col">
            <div :class="$tt('body1')">Web-сервисы</div>
          </div>
        </RouterLink>
        <LineBreak class="my-4" />
        <RouterLink
          @click="closeProfileDialog"
          to="/settings"
          class="row align-items-center hint mb-4"
        >
          <div class="col-auto">
            <ui-icon>settings</ui-icon>
          </div>
          <div class="col">
            <div :class="$tt('body1')">Настройки</div>
          </div>
        </RouterLink>
        <div @click="onLogout" class="row align-items-center link hint">
          <div class="col-auto">
            <ui-icon>logout</ui-icon>
          </div>
          <div class="col">
            <div :class="$tt('body1')">Выход</div>
          </div>
        </div>
      </div>
    </ui-dialog-content>
  </ui-dialog>

  <ui-dialog v-model="isLoginOpen" sheet maskClosable class="login-dialog">
    <!-- leave title for close action -->
    <ui-dialog-title>
      <div :class="$tt('body1')" class="bold large login-dialog__title">
        Личный кабинет
      </div>
    </ui-dialog-title>

    <ui-dialog-content>
      <div class="mt-4">
        <label class="hint" for="login-name">Логин</label>
        <ui-textfield input-id="login-name" outlined fullwidth />
      </div>
      <div class="mt-3">
        <label class="hint" for="login-password">Пароль</label>
        <ui-textfield
          input-id="login-password"
          outlined
          fullwidth
          input-type="password"
        />
      </div>

      <div class="row mt-2 align-items-center">
        <div class="col-auto">
          <ui-form-field>
            <ui-checkbox input-id="login-remember" />
            <label for="login-remember">Запомнить меня</label>
          </ui-form-field>
        </div>
        <div class="col-auto ms-auto">
          <RouterLink to="/recover">
            <div :class="$tt('body1')" class="hint">Забыли пароль?</div>
          </RouterLink>
        </div>
      </div>

      <ui-button v-on:click="onLoginSubmit" raised class="col-12 mt-3"
        >Войти</ui-button
      >

      <div class="row mt-3">
        <div :class="$tt('body1')">Войти через сайт или соцсеть</div>

        <div class="mt-2 row g-2 justify-content-xl-between">
          <div class="col-auto">
            <img src="@/assets/social/vk-color.png" alt="vk" />
          </div>
          <div class="col-auto">
            <img src="@/assets/social/ok-color.png" alt="ok" />
          </div>
          <div class="col-auto">
            <img src="@/assets/social/google-color.png" alt="google" />
          </div>
          <div class="col-auto">
            <img src="@/assets/social/ya-color.png" alt="ya" />
          </div>
          <div class="col-auto">
            <img src="@/assets/social/mail-color.png" alt="mail" />
          </div>
          <div class="col-auto">
            <img src="@/assets/social/facebook-color.png" alt="facebook" />
          </div>
          <div class="col-auto">
            <img src="@/assets/social/insta-color.png" alt="insta" />
          </div>
        </div>

        <LineBreak class="my-3" />

        <div class="text-center">
          <RouterLink @click="closeLoginDialog" to="/register">
            <ui-button>ЗАРЕГИСТРИРОВАТЬСЯ</ui-button>
          </RouterLink>
        </div>
      </div>
    </ui-dialog-content>
  </ui-dialog>

  <ui-dialog v-model="isNotificationOpen" scrollable maskClosable>
    <ui-dialog-title>
      <h3>
        <ui-icon style="font-size: 34px; vertical-align: middle" type="filled"
          >notifications</ui-icon
        >
        УВЕДОМЛЕНИЯ
      </h3>
      <div class="row">
        <div class="col-auto link">Показать непрочитанные (2)</div>
        <div class="col-auto link clear">Прочитать все</div>
      </div>
    </ui-dialog-title>
    <ui-dialog-content>
      <div class="mb-4">
        <div class="hint">20 июля 2022</div>
        <div class="mt-2">
          Задача организации, в особенности же начало повседневной работы по
          формированию позиции требуют определения и уточнения модели развития.
          Равным образом ...
        </div>
        <LineBreak class="mt-3" />
      </div>
      <div class="mb-4">
        <div class="hint">20 июля 2022</div>
        <div class="mt-2">
          Задача организации, в особенности же начало повседневной работы по
          формированию позиции требуют определения и уточнения модели развития.
          Равным образом ...
        </div>
        <LineBreak class="mt-3" />
      </div>
      <div class="mb-4">
        <div class="hint">20 июля 2022</div>
        <div class="mt-2">
          Задача организации, в особенности же начало повседневной работы по
          формированию.
        </div>
        <LineBreak class="mt-3" />
      </div>
      <div class="mb-4">
        <div class="hint">20 июля 2022</div>
        <div class="mt-2">
          Задача организации, в особенности же начало повседневной работы по
          формированию.
        </div>
        <LineBreak class="mt-3" />
      </div>
      <div class="mb-4">
        <div class="hint">20 июля 2022</div>
        <div class="mt-2">
          Задача организации, в особенности же начало повседневной работы по
          формированию..
        </div>
        <LineBreak class="mt-3" />
      </div>
      <div class="mb-4">
        <div class="hint">20 июля 2022</div>
        <div class="mt-2">
          Задача организации, в особенности же начало повседневной работы по
          формированию.
        </div>
        <LineBreak class="mt-3" />
      </div>
      <div class="mb-4">
        <div class="hint">20 июля 2022</div>
        <div class="mt-2">
          Задача организации, в особенности же начало повседневной работы по
          формированию.
        </div>
        <LineBreak class="mt-3" />
      </div>
      <div class="mb-4">
        <div class="hint">20 июля 2022</div>
        <div class="mt-2">
          Задача организации, в особенности же начало повседневной работы по
          формированию.
        </div>
        <LineBreak class="mt-3" />
      </div>
    </ui-dialog-content>
  </ui-dialog>
</template>

<style lang="scss" scoped>
@use "@/styles/vars";

header#app-header {
  background-color: black;
  max-height: 100px;
  padding-top: 18px;
  padding-bottom: 18px;

  &,
  & a,
  & .header-item {
    color: white;
  }

  @media (max-width: vars.$desktop) {
    max-height: 70px;
    padding-top: 9px;
    padding-bottom: 9px;
  }

  .logo {
    height: 26px;
    width: auto;

    @media (min-width: vars.$desktop) {
      height: 64px;
    }
  }

  .header-item {
    margin-left: 0.6rem;
    margin-right: 0.6rem;
    padding-bottom: 6px;

    cursor: pointer;

    * {
      vertical-align: middle;
    }

    &__label {
      display: none;

      @media (min-width: 1600px) {
        display: inline;
      }
    }
  }
  .header-item:first-child {
    margin-left: 0;
  }
  .header-item:last-child {
    margin-right: 0;
  }
  .header-item span {
    margin-left: 10px;
  }

  .login-dialog {
    &__title {
      text-transform: uppercase;
    }
  }
}
</style>

<style lang="scss">
@use "@/styles/vars";

.login-dialog {
  .mdc-dialog__surface {
    @media (min-width: vars.$desktop) {
      max-width: 640px !important;
    }
  }
}

.profile-dialog {
  .mdc-dialog__container {
    @media (min-width: vars.$desktop) {
      margin-left: auto;
      margin-right: 1.5rem;

      position: relative;

      .mdc-dialog__surface {
        position: absolute;
        top: 75px;
        right: 0;
        width: 310px;
      }
    }
  }
}
</style>
