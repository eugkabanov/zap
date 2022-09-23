<template>
  <header>
    <ui-grid>
      <ui-grid-cell columns="1">
        <img alt="Logo" src="@/assets/logo-blue.svg" width="103" height="64" />
      </ui-grid-cell>
      <ui-grid-cell columns="7" align="middle">
        <nav class="d-flex">
          <RouterLink to="/">Главная</RouterLink>
          <RouterLink to="/catalog">Каталог</RouterLink>
          <RouterLink to="/about">О&nbsp;компании</RouterLink>
          <RouterLink to="/work">Сотрудничество</RouterLink>
          <RouterLink to="/help">Помощь</RouterLink>
          <RouterLink to="/news">Новости</RouterLink>
          <RouterLink to="/contacts">Контакты</RouterLink>
        </nav>
      </ui-grid-cell>
      <ui-grid-cell columns="4" align="middle">
        <div class="d-flex">
          <div class="header-item">
            <ui-badge overlap :count="12"
              ><ui-icon>shopping_cart</ui-icon></ui-badge
            ><span>Корзина</span>
          </div>
          <div class="header-item">
            <ui-icon>star_outline</ui-icon><span>Избранное</span>
          </div>
          <div class="header-item">
            <ui-icon>receipt</ui-icon><span>Заказы</span>
          </div>
          <div class="header-item">
            <ui-icon>perm_identity</ui-icon><span>Вход</span>
          </div>
        </div>
      </ui-grid-cell>
    </ui-grid>
  </header>
</template>

<style scoped>
header {
  background-color: black;
  height: 100px;
  padding-top: 18px;
  padding-bottom: 18px;
}
header a,
header .header-item {
  color: white;
}

.header-item {
  display: flex;
  align-items: center;

  margin-left: 10px;
  margin-right: 10px;
  padding-bottom: 6px;
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

nav a {
  margin-left: 20px;
  margin-right: 20px;
  padding-bottom: 6px;
}
nav a:hover {
  opacity: 0.8;
}

nav a.router-link-exact-active {
  border-bottom: 3px solid #0069c8;
}
</style>
