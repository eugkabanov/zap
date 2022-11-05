<script lang="ts" setup>
import IconQuestionBlue from "@/components/icons/iconQuestionBlue.vue";
</script>

<template>
  <div class="large bold mb-5">Данные организации</div>

  <div class="row gy-3 organisation-signup">
    <div class="col-12 col-md-6 col-xl-4">
      <div class="mb-3">
        <label for="reg-name" class="mb-2"
          >ИНН
          <IconQuestionBlue id="reg-inn-icon" data-tooltip-id="tlp-1" />
          <ui-tooltip-anchor>
            <ui-tooltip id="tlp-1">
              При заполнении ИНН остальные данные добавятся из базы ФНС
              автоматически
            </ui-tooltip>
          </ui-tooltip-anchor>
        </label>
        <ui-textfield id="reg-name" outlined fullwidth />
      </div>
      <div class="mb-3">
        <label for="reg-name" class="mb-2">Наименование</label>
        <ui-textfield id="reg-name" outlined fullwidth />
      </div>
      <div class="mb-3">
        <label for="reg-name" class="mb-2">Юридический адрес</label>
        <ui-textfield id="reg-name" outlined fullwidth />
      </div>
      <div class="mb-3">
        <label for="reg-name" class="mb-2">Фактический адрес</label>
        <ui-textfield id="reg-name" outlined fullwidth />
      </div>
      <div class="mb-3">
        <label for="reg-name" class="mb-2">Наименование банка</label>
        <ui-textfield id="reg-name" outlined fullwidth />
      </div>
    </div>
    <div class="col-12 col-md-6 col-xl-4">
      <div class="mb-3">
        <label for="reg-name" class="mb-2">КПП</label>
        <ui-textfield id="reg-name" outlined fullwidth />
      </div>
      <div class="mb-3">
        <label for="reg-name" class="mb-2">Р/С</label>
        <ui-textfield id="reg-name" outlined fullwidth />
      </div>
      <div class="mb-3">
        <label for="reg-name" class="mb-2">К/С</label>
        <ui-textfield id="reg-name" outlined fullwidth />
      </div>
      <div class="mb-3">
        <label for="reg-name" class="mb-2">БИК</label>
        <ui-textfield id="reg-name" outlined fullwidth />
      </div>
      <div class="mb-3">
        <label for="reg-name" class="mb-2">ОГРН</label>
        <ui-textfield id="reg-name" outlined fullwidth />
      </div>
    </div>
    <div class="col-12 col-md-6 col-xl-4">
      <div class="mb-3">
        <label for="reg-name" class="mb-2">ОКПО</label>
        <ui-textfield id="reg-name" outlined fullwidth />
      </div>
      <div class="mb-3">
        <label for="reg-name" class="mb-2">Контактное лицо</label>
        <ui-textfield id="reg-name" outlined fullwidth />
      </div>
      <div class="mb-3">
        <label for="reg-name" class="mb-2">E-mail</label>
        <ui-textfield id="reg-name" outlined fullwidth />
      </div>
      <div class="mb-3">
        <label for="reg-name" class="mb-2">Телефон</label>
        <ui-textfield id="reg-name" outlined fullwidth />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.organisation-signup label {
  display: inline-block;
  position: relative;
}

#reg-inn-icon {
  position: absolute;
  top: -3px;
  right: -30px;
}
</style>
