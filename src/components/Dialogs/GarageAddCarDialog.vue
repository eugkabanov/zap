<script lang="ts" setup>
import IconQuestionBlue from "@/components/icons/iconQuestionBlue.vue";
</script>

<template>
  <ui-dialog-title>
    <div style="font-size: 24px; font-weight: 700">ГАРАЖ</div>
  </ui-dialog-title>

  <ui-dialog-content>
    <div class="mb-3 mt-4 row align-items-center">
      <div class="col-3"><label class="color-black">Марка</label></div>
      <div class="col-8 offset-1">
        <ui-textfield outlined fullwidth model-value="AUDI" />
      </div>
    </div>
    <div class="mb-3 row align-items-center">
      <div class="col-3"><label class="color-black">Название</label></div>
      <div class="col-8 offset-1">
        <ui-textfield outlined fullwidth model-value="A6/Avant" />
      </div>
    </div>
    <div class="mb-3 row align-items-center">
      <div class="col-3"><label class="color-black">Модель</label></div>
      <div class="col-8 offset-1">
        <ui-textfield outlined fullwidth />
      </div>
    </div>
    <div class="mb-3 row align-items-center">
      <div class="col-3"><label class="color-black">Год</label></div>
      <div class="col-8 offset-1">
        <ui-textfield outlined fullwidth />
      </div>
    </div>
    <div class="mb-3 row align-items-center">
      <div class="col-3"><label class="color-black">Модификация</label></div>
      <div class="col-8 offset-1">
        <ui-textfield outlined fullwidth />
      </div>
    </div>
    <div class="mb-3 row align-items-center">
      <div class="col-3"><label class="color-black">Vin/Frame</label></div>
      <div class="col-8 offset-1">
        <ui-textfield outlined fullwidth model-value="waubh54b11n111054" />
      </div>
    </div>
    <div class="mb-3 row align-items-center">
      <div class="col-3"><label class="color-black">Гос. номер</label></div>
      <div class="col-8 offset-1">
        <ui-textfield outlined fullwidth />
      </div>
    </div>
    <div class="mb-3 row align-items-center">
      <div class="col-3">
        <label class="color-black"
          >СТС
          <IconQuestionBlue id="sts-icon" data-tooltip-id="tlp-1" />
          <ui-tooltip-anchor>
            <ui-tooltip id="tlp-1">
              Укажите СТС и можете оплачивать штрафы
            </ui-tooltip>
          </ui-tooltip-anchor>
        </label>
      </div>
      <div class="col-8 offset-1">
        <ui-textfield outlined fullwidth />
      </div>
    </div>
    <div class="mb-3 row">
      <div class="col-3"><label class="color-black">Владелец</label></div>
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
      <div class="col-3"><label class="color-black">Комментарии</label></div>
      <div class="col-8 offset-1">
        <ui-textfield outlined fullwidth input-type="textarea" rows="4" />
      </div>
    </div>

    <div class="mt-4 text-center">
      <ui-button raised>Сохранить</ui-button>
    </div>
  </ui-dialog-content>
</template>

<style lang="scss" scoped>
label {
  position: relative;
}
#sts-icon {
  position: absolute;
  top: -3px;
  right: -30px;
}
</style>
