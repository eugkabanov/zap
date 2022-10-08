<script setup lang="ts">
import LineBreak from "../../components/LineBreak.vue";
</script>

<template>
  <main class="container-fluid py-5">
    <div class="row align-items-center col-xl-4">
      <div class="col-auto">
        <h1>Баланс</h1>
      </div>
      <div class="col">
        <ui-datepicker outlined toggle fullwidth>
          <template #toggle><ui-icon>event</ui-icon></template>
        </ui-datepicker>
      </div>
      <div class="col">
        <ui-datepicker outlined toggle fullwidth>
          <template #toggle><ui-icon>event</ui-icon></template>
        </ui-datepicker>
      </div>
    </div>

    <div class="row mt-4">
      <div class="row">
        <div class="col-12 col-xl-4">
          <div class="row mb-3">
            <div class="col-auto">
              <div class="bold">Баланс</div>
            </div>
            <div class="col dotted" />
            <div class="col-auto">
              <div class="bold">320 000 ₽</div>
            </div>
          </div>
          <div class="row mb-5">
            <div class="col-auto">
              <div class="bold">Деб. задолженность</div>
            </div>
            <div class="col dotted" />
            <div class="col-auto">
              <div class="bold">0,00 ₽</div>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-auto">
              <div>Заказано сегодня</div>
            </div>
            <div class="col dotted" />
            <div class="col-auto">
              <div>0,00 ₽</div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-auto">
              <div>В работе</div>
            </div>
            <div class="col dotted" />
            <div class="col-auto">
              <div>0,00 ₽</div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-auto">
              <div>Закуплено</div>
            </div>
            <div class="col dotted" />
            <div class="col-auto">
              <div>0,00 ₽</div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-auto">
              <div>На складе в Москве</div>
            </div>
            <div class="col dotted" />
            <div class="col-auto">
              <div>0,00 ₽</div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-auto">
              <div>Поступило в Д/С</div>
            </div>
            <div class="col dotted" />
            <div class="col-auto">
              <div>0,00 ₽</div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-auto">
              <div>Куплено товара</div>
            </div>
            <div class="col dotted" />
            <div class="col-auto">
              <div>0,00 ₽</div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-auto">
              <div>Возвраты</div>
            </div>
            <div class="col dotted" />
            <div class="col-auto">
              <div>0,00 ₽</div>
            </div>
          </div>

          <ui-button outlined class="mt-3 small">Показать возвраты</ui-button>

          <LineBreak class="my-4" />

          <ui-button raised>Пополнить баланс</ui-button>
        </div>
        <div class="col-12 col-xl-8"></div>
      </div>
    </div>
  </main>
</template>
