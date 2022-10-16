<script setup lang="ts">
import ClosedStatus from "../../components/Statuses/ClosedStatus.vue";
</script>

<template>
  <main class="container-fluid py-5">
    <div class="row">
      <div class="col-12 col-xl-3">
        <RouterLink class="clear" to="/appeals">
          <div class="large bold">
            <ui-icon style="vertical-align: middle" class="hint me-2"
              >arrow_back</ui-icon
            >
            Назад
          </div>
        </RouterLink>

        <div class="mt-3">
          <ClosedStatus />
        </div>

        <div class="mt-3">
          <div class="hint">Дата заявки</div>
          <div class="large bold">24 июля 2022</div>
        </div>
        <div class="mt-3">
          <div class="hint">Категория</div>
          <div class="large bold">Рекламация</div>
        </div>
        <div class="mt-3">
          <div class="hint">Дата заказа</div>
          <div class="large bold">18 июля 2022</div>
        </div>
        <div class="mt-3">
          <div class="hint">Номер счета</div>
          <div class="large bold">ООО-455848</div>
          <div class="mt-3">
            <div class="hint">Деталь</div>
            <div class="large bold">RYTSON DW9Z351269</div>
            <div class="large">Фара правая</div>
          </div>
          <div class="mt-3">
            <div class="hint">Комментарий</div>
            <div class="large bold">22251115202001</div>
          </div>
          <div class="mt-3">
            <div class="hint">Сумма</div>
            <div class="large bold">16 810 ₽</div>
          </div>
          <div class="mt-3">
            <div class="hint">Поставщик</div>
            <div class="large bold">VEO (4)</div>
          </div>
          <div class="mt-3">
            <div class="hint">Статус</div>
            <div class="large bold">Возврат произведен (0/5)</div>
          </div>
        </div>
        <div class="col-12 offset-xl-1 col-xl-8">
          <!-- TODO: chat window -->
        </div>
      </div>
    </div>
  </main>
</template>
