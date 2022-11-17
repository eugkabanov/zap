<template>
  <ui-dialog-title />

  <ui-dialog-content>
    <div class="mb-4">
      <label class="d-block mb-3 col-3">IP-адрес</label>
      <div>
        <ui-textfield outlined fullwidth />
      </div>
    </div>
    <div class="mb-4">
      <label class="d-block mb-3 col-3">Комментарий</label>
      <div>
        <ui-textfield outlined fullwidth input-type="textarea" rows="4" />
      </div>
    </div>

    <div class="mt-4">
      <ui-button raised>Сохранить</ui-button>
    </div>
  </ui-dialog-content>
</template>
