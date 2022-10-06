<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);
</script>

<template>
  <ui-drawer type="modal" v-model="isOpen">
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
        <ui-icon-button v-model="isOpen">menu</ui-icon-button>
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
          <RouterLink to="/cart">
            <div class="header-item">
              <ui-badge overlap :count="12"
                ><ui-icon>shopping_cart</ui-icon></ui-badge
              ><span class="header-item__label">Корзина</span>
            </div>
          </RouterLink>
          <div class="header-item">
            <ui-icon>star_outline</ui-icon
            ><span class="header-item__label">Избранное</span>
          </div>
          <div class="header-item">
            <ui-icon>receipt</ui-icon
            ><span class="header-item__label">Заказы</span>
          </div>
          <div class="header-item">
            <ui-icon>perm_identity</ui-icon
            ><span class="header-item__label">Вход</span>
          </div>
        </div>
      </div>
    </div>
  </header>
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
}
</style>
