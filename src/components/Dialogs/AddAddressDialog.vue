<template>
  <ui-dialog-content>
    <div class="mb-3">
      <label class="d-block mb-2">Город</label>
      <div>
        <ui-textfield outlined fullwidth />
      </div>
    </div>
    <div class="mb-3">
      <label class="d-block mb-2">Улица</label>
      <div>
        <ui-textfield outlined fullwidth />
      </div>
    </div>

    <div class="mb-3">
      <div class="row">
        <div class="col-4">
          <label class="d-block mb-2">Дом</label>
          <ui-textfield outlined fullwidth />
        </div>
        <div class="col-4">
          <label class="d-block mb-2">Строение</label>
          <ui-textfield outlined fullwidth />
        </div>
        <div class="col-4">
          <label class="d-block mb-2">Корпус</label>
          <ui-textfield outlined fullwidth />
        </div>
      </div>
    </div>
    <div class="mb-3">
      <div class="row">
        <div class="col-4">
          <label class="d-block mb-2">Подъезд</label>
          <ui-textfield outlined fullwidth />
        </div>
        <div class="col-4">
          <label class="d-block mb-2">Этаж</label>
          <ui-textfield outlined fullwidth />
        </div>
        <div class="col-4">
          <label class="d-block mb-2">Кв./Офис</label>
          <ui-textfield outlined fullwidth />
        </div>
      </div>
    </div>
    <div class="mb-3">
      <label class="d-block mb-2">GPS-координаты</label>
      <div class="row">
        <div class="col-6">
          <ui-textfield outlined fullwidth>Широта</ui-textfield>
        </div>
        <div class="col-6">
          <ui-textfield outlined fullwidth>Долгота</ui-textfield>
        </div>
      </div>
    </div>
    <div class="mb-3">
      <label class="d-block mb-2">Комментарий</label>
      <div>
        <ui-textfield outlined fullwidth input-type="textarea" rows="4" />
      </div>
    </div>

    <div class="mb-3">
      <label class="d-block mb-2">Режим работы</label>
      <div>
        <div class="row align-items-center mb-1">
          <div class="col-auto px-0">
            <ui-checkbox />
          </div>
          <div class="col-auto ml-2 px-0">пн</div>
          <div class="col-auto ml-3">
            <span class="hint">с&nbsp;</span>
            <ui-textfield
              class="small"
              style="width: 54px; height: 25px; padding: 0 8px"
              outlined
            />
            <span class="hint">&nbsp;до&nbsp;</span>
            <ui-textfield
              class="small"
              style="width: 54px; height: 25px; padding: 0 8px"
              outlined
            />
          </div>
        </div>
        <div class="row align-items-center mb-1">
          <div class="col-auto px-0">
            <ui-checkbox />
          </div>
          <div class="col-auto ml-2 px-0">вт</div>
          <div class="col-auto ml-3">
            <span class="hint">с&nbsp;</span>
            <ui-textfield
              class="small"
              style="width: 54px; height: 25px; padding: 0 8px"
              outlined
            />
            <span class="hint">&nbsp;до&nbsp;</span>
            <ui-textfield
              class="small"
              style="width: 54px; height: 25px; padding: 0 8px"
              outlined
            />
          </div>
        </div>
        <div class="row align-items-center mb-1">
          <div class="col-auto px-0">
            <ui-checkbox />
          </div>
          <div class="col-auto ml-2 px-0">ср</div>
          <div class="col-auto ml-3">
            <span class="hint">с&nbsp;</span>
            <ui-textfield
              class="small"
              style="width: 54px; height: 25px; padding: 0 8px"
              outlined
            />
            <span class="hint">&nbsp;до&nbsp;</span>
            <ui-textfield
              class="small"
              style="width: 54px; height: 25px; padding: 0 8px"
              outlined
            />
          </div>
        </div>
        <div class="row align-items-center mb-1">
          <div class="col-auto px-0">
            <ui-checkbox />
          </div>
          <div class="col-auto ml-2 px-0">чт</div>
          <div class="col-auto ml-3">
            <span class="hint">с&nbsp;</span>
            <ui-textfield
              class="small"
              style="width: 54px; height: 25px; padding: 0 8px"
              outlined
            />
            <span class="hint">&nbsp;до&nbsp;</span>
            <ui-textfield
              class="small"
              style="width: 54px; height: 25px; padding: 0 8px"
              outlined
            />
          </div>
        </div>
        <div class="row align-items-center mb-1">
          <div class="col-auto px-0">
            <ui-checkbox />
          </div>
          <div class="col-auto ml-2 px-0">пт</div>
          <div class="col-auto ml-3">
            <span class="hint">с&nbsp;</span>
            <ui-textfield
              class="small"
              style="width: 54px; height: 25px; padding: 0 8px"
              outlined
            />
            <span class="hint">&nbsp;до&nbsp;</span>
            <ui-textfield
              class="small"
              style="width: 54px; height: 25px; padding: 0 8px"
              outlined
            />
          </div>
        </div>
        <div class="row align-items-center mb-1">
          <div class="col-auto px-0">
            <ui-checkbox />
          </div>
          <div class="col-auto ml-2 px-0">сб</div>
        </div>
        <div class="row align-items-center mb-1">
          <div class="col-auto px-0">
            <ui-checkbox />
          </div>
          <div class="col-auto ml-2 px-0">вс</div>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <ui-button raised>Сохранить</ui-button>
    </div>
  </ui-dialog-content>
</template>
