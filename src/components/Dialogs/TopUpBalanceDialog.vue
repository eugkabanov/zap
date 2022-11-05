<template>
  <ui-dialog-content>
    <div class="text-center bold large mb-4 mt-5">Пополнить баланс</div>

    <div class="mb-4">
      <label for="topup-total" class="d-block mb-2">Сумма пополнения</label>
      <ui-textfield
        id="topup-total"
        outlined
        fullwidth
        model-value="10 000 ₽"
      />
    </div>

    <div class="mb-4">Способ оплаты</div>

    <ui-tab-bar>
      <ui-tab style="width: 200px"> Банковская карта </ui-tab>
      <ui-tab style="width: 200px"> Счет </ui-tab>
    </ui-tab-bar>

    <div class="my-4">Выберите карту иди добавьте новую</div>

    <div class="card-item row gx-0 align-items-center">
      <div class="col-auto">
        <ui-radio />
      </div>

      <div class="ms-4 col-auto">**** 5863</div>

      <div class="col-auto ms-auto">
        <ui-icon class="hint">border_color</ui-icon>
        <ui-icon class="ms-3 hint">delete</ui-icon>
      </div>
    </div>
    <div class="mt-2 card-item row gx-0 align-items-center">
      <div class="col-auto">
        <ui-radio :model-value="false" />
      </div>

      <div class="ms-4 col-auto">Добавить новую</div>
    </div>

    <div class="mt-4">
      <label for="email" class="d-block mb-2">Получить чек на e-mail</label>
      <ui-textfield id="email" outlined fullwidth />
    </div>

    <div class="mt-4">
      <ui-button class="w-100" raised>Оплатить 10 000 ₽</ui-button>
    </div>
  </ui-dialog-content>
</template>
