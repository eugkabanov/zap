<template>
  <div class="large bold mb-5">Данные организации</div>

  <div class="row gy-3">
    <div class="col-12 col-md-6 col-xl-4">
      <div class="mb-3">
        <label for="reg-name" class="d-block mb-2"
          >ИНН
          <ui-icon
            v-tooltip="
              'При заполнении ИНН остальные данные добавятся из базы ФНС автоматически '
            "
            aria-describedby="tooltip"
            :dark="false"
          >
            contact_support
          </ui-icon></label
        >
        <ui-textfield id="reg-name" outlined fullwidth />
      </div>
      <div class="mb-3">
        <label for="reg-name" class="d-block mb-2">Наименование</label>
        <ui-textfield id="reg-name" outlined fullwidth />
      </div>
      <div class="mb-3">
        <label for="reg-name" class="d-block mb-2">Юридический адрес</label>
        <ui-textfield id="reg-name" outlined fullwidth />
      </div>
      <div class="mb-3">
        <label for="reg-name" class="d-block mb-2">Фактический адрес</label>
        <ui-textfield id="reg-name" outlined fullwidth />
      </div>
      <div class="mb-3">
        <label for="reg-name" class="d-block mb-2">Наименование банка</label>
        <ui-textfield id="reg-name" outlined fullwidth />
      </div>
    </div>
    <div class="col-12 col-md-6 col-xl-4">
      <div class="mb-3">
        <label for="reg-name" class="d-block mb-2">КПП</label>
        <ui-textfield id="reg-name" outlined fullwidth />
      </div>
      <div class="mb-3">
        <label for="reg-name" class="d-block mb-2">Р/С</label>
        <ui-textfield id="reg-name" outlined fullwidth />
      </div>
      <div class="mb-3">
        <label for="reg-name" class="d-block mb-2">К/С</label>
        <ui-textfield id="reg-name" outlined fullwidth />
      </div>
      <div class="mb-3">
        <label for="reg-name" class="d-block mb-2">БИК</label>
        <ui-textfield id="reg-name" outlined fullwidth />
      </div>
      <div class="mb-3">
        <label for="reg-name" class="d-block mb-2">ОГРН</label>
        <ui-textfield id="reg-name" outlined fullwidth />
      </div>
    </div>
    <div class="col-12 col-md-6 col-xl-4">
      <div class="mb-3">
        <label for="reg-name" class="d-block mb-2">ОКПО</label>
        <ui-textfield id="reg-name" outlined fullwidth />
      </div>
      <div class="mb-3">
        <label for="reg-name" class="d-block mb-2">Контактное лицо</label>
        <ui-textfield id="reg-name" outlined fullwidth />
      </div>
      <div class="mb-3">
        <label for="reg-name" class="d-block mb-2">E-mail</label>
        <ui-textfield id="reg-name" outlined fullwidth />
      </div>
      <div class="mb-3">
        <label for="reg-name" class="d-block mb-2">Телефон</label>
        <ui-textfield id="reg-name" outlined fullwidth />
      </div>
    </div>
  </div>
</template>
