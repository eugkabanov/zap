<template>
  <ui-dialog-title class="mb-4">
    <div style="font-size: 24px; font-weight: 700">ГАРАЖ</div>
  </ui-dialog-title>

  <ui-dialog-content>
    <div class="mb-3 row align-items-center">
      <label class="color-black col-3">Марка</label>
      <div class="col-8 offset-1">
        <ui-textfield outlined fullwidth />
      </div>
    </div>
    <div class="mb-3 row align-items-center">
      <label class="color-black col-3">Название</label>
      <div class="col-8 offset-1">
        <ui-textfield outlined fullwidth />
      </div>
    </div>
    <div class="mb-3 row align-items-center">
      <label class="color-black col-3">Модель</label>
      <div class="col-8 offset-1">
        <ui-textfield outlined fullwidth />
      </div>
    </div>
    <div class="mb-3 row align-items-center">
      <label class="color-black col-3">Год</label>
      <div class="col-8 offset-1">
        <ui-textfield outlined fullwidth />
      </div>
    </div>
    <div class="mb-3 row align-items-center">
      <label class="color-black col-3">Модификация</label>
      <div class="col-8 offset-1">
        <ui-textfield outlined fullwidth />
      </div>
    </div>
    <div class="mb-3 row align-items-center">
      <label class="color-black col-3">Vin/Frame</label>
      <div class="col-8 offset-1">
        <ui-textfield outlined fullwidth />
      </div>
    </div>
    <div class="mb-3 row align-items-center">
      <label class="color-black col-3">Гос. номер</label>
      <div class="col-8 offset-1">
        <ui-textfield outlined fullwidth />
      </div>
    </div>
    <div class="mb-3 row align-items-center">
      <label class="color-black col-3"
        >СТС
        <ui-icon
          v-tooltip="'Укажите СТС и можете оплачивать штрафы'"
          aria-describedby="tooltip"
          :dark="false"
        >
          contact_support
        </ui-icon></label
      >
      <div class="col-8 offset-1">
        <ui-textfield outlined fullwidth />
      </div>
    </div>
    <div class="mb-3 row">
      <label class="color-black col-3">Владелец</label>
      <div class="col-8 offset-1">
        <div>
          <ui-textfield outlined fullwidth placeholder="Имя" />
        </div>
        <div class="mt-3">
          <ui-textfield outlined fullwidth placeholder="E-mail" />
        </div>
        <div class="mt-3">
          <ui-textfield outlined fullwidth placeholder="Телефон" />
        </div>
      </div>
    </div>
    <div class="mb-3 row">
      <label class="color-black col-3">Комментарии</label>
      <div class="col-8 offset-1">
        <ui-textfield outlined fullwidth input-type="textarea" rows="4" />
      </div>
    </div>

    <div class="mt-4 text-center">
      <ui-button raised>Сохранить</ui-button>
    </div>
  </ui-dialog-content>
</template>
