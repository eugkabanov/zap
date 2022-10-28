<template>
  <div class="d-none d-xl-block balance-bar small">
    <div class="row">
      <div class="col-auto balance-bar__item">
        <ui-icon class="vertical-align-middle">account_balance_wallet</ui-icon>
        <span class="ms-2">Баланс</span>
        <span class="bold ms-2">392 000 ₽ </span>
        <span style="color: #219653" class="ms-2">Пополнить</span>
      </div>
      <div class="col-auto balance-bar__item">
        <ui-icon class="vertical-align-middle">notifications_none</ui-icon>
        <span class="ms-2">Уведомления</span>
        <span class="bold ms-2">565 </span>
      </div>
      <div class="col-auto balance-bar__item">
        <ui-icon outlined class="vertical-align-middle">contact_support</ui-icon>
        <span class="ms-2">Вопросы по заказам</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.balance-bar {
  background-color: white;
  border: 1px solid #d9d9de;
  border-radius: 4px;
  padding: 15px;

  max-width: 720px;

  &__item:not(:last-child) {
    border-right: 1px solid #d9d9de;
  }
}
</style>
