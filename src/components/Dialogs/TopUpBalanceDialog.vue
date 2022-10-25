<template>
  <ui-dialog-content>
    <div class="text-center bold large mb-4">Пополнить баланс</div>

    <div class="mb-4">
      <label for="topup-total" class="d-block mb-2">Сумма пополнения</label>
      <ui-textfield id="topup-total" outlined fullwidth />
    </div>

    <div class="mb-4">Способ оплаты</div>

    <ui-tab-bar>
      <ui-tab> Банковская карта </ui-tab>
      <ui-tab> Счет </ui-tab>
    </ui-tab-bar>

    <div class="mt-4">Выберите карту иди добавьте новую</div>

    <div class="mt-2 card-item row align-items-center">
      <div class="col-auto">
        <ui-radio />
      </div>

      <div class="col-auto">**** 5863</div>

      <div class="col-auto ms-auto">
        <ui-icon>border_color</ui-icon>
        <ui-icon class="ms-3">delete</ui-icon>
      </div>
    </div>
    <div class="mt-2 card-item row align-items-center">
      <div class="col-auto">
        <ui-radio />
      </div>

      <div class="col-auto">Добавить новую</div>
    </div>

    <div class="mt-4">
      <label for="email" class="d-block mb-2">Получить чек на e-mail</label>
      <ui-textfield id="email" outlined fullwidth />
    </div>

    <div class="mt-4">
      <div class="row">
        <ui-button raised>Оплатить 10 000 ₽</ui-button>
      </div>
    </div>
  </ui-dialog-content>
</template>
