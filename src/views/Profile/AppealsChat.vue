<script setup lang="ts">
import BalanceBar from "../../components/Profile/BalanceBar.vue";
</script>

<template>
  <main class="container-fluid pb-5">
    <BalanceBar class="ms-auto mt-2 mb-3" />
    <div class="row gy-5 mt-2">
      <div class="col-12 col-xl-3">
        <RouterLink class="clear mb-4 d-block" to="/appeals">
          <div class="bold large">
            <ui-icon style="vertical-align: middle" class="hint me-2"
              >arrow_back</ui-icon
            >
            Назад
          </div>
        </RouterLink>

        <div class="mt-3">
          <div
            style="
              display: inline-block;
              background-color: #ebffd7;
              border: 1px solid #acdf79;
              padding: 10px 20px;
            "
          >
            Закрыта
          </div>
        </div>

        <div class="mt-4">
          <div class="hint mb-2 fw-400">Дата заявки</div>
          <div class="bold">24 июля 2022</div>
        </div>
        <div class="mt-3">
          <div class="hint mb-2 fw-400">Категория</div>
          <div class="bold">Рекламация</div>
        </div>
        <div class="mt-3">
          <div class="hint mb-2 fw-400">Дата заказа</div>
          <div class="bold">18 июля 2022</div>
        </div>
        <div class="mt-3">
          <div class="hint mb-2 fw-400">Номер счета</div>
          <div class="bold">ООО-455848</div>
          <div class="mt-3">
            <div class="hint mb-2 fw-400">Деталь</div>
            <div class="bold">RYTSON DW9Z351269</div>
            <div class="fw-400">Фара правая</div>
          </div>
          <div class="mt-3">
            <div class="hint mb-2 fw-400">Комментарий</div>
            <div class="bold">22251115202001</div>
          </div>
          <div class="mt-3">
            <div class="hint mb-2 fw-400">Сумма</div>
            <div class="bold">16 810 ₽</div>
          </div>
          <div class="mt-3">
            <div class="hint mb-2 fw-400">Поставщик</div>
            <div class="bold">VEO (4)</div>
          </div>
          <div class="mt-3">
            <div class="hint mb-2 fw-400">Статус</div>
            <div class="bold" style="text-decoration: underline">
              Возврат произведен (0/5)
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 offset-xl-1 col-xl-8">
        <div class="chat">
          <div class="chat__contents">
            <div class="chat__message chat__message--received">
              Не следует, однако забывать, что постоянное
              информационно-пропагандистское обеспечение нашей деятельности
              представляет собой интересный эксперимент проверки системы
              обучения кадров, соответствует насущным потребностям. Не следует,
              однако забывать, что реализация намеченных плановых заданий
              требуют от нас анализа
            </div>
            <div class="chat__message chat__message--send">
              Не следует, однако забывать, что постоянное
              информационно-пропагандистское обеспечение нашей деятельности
              представляет собой интересный эксперимент проверки системы
              обучения кадров, соответствует насущным потребностям.
            </div>
            <div class="chat__message chat__message--send">
              Не следует, однако забывать, что постоянное
              информационно-пропагандистское обеспечение нашей деятельности
              представляет собой интересный эксперимент проверки системы
              обучения кадров, соответствует насущным потребностям. Не следует,
              однако забывать, что
            </div>
            <div class="chat__message chat__message--received">
              Не следует, однако забывать, что постоянное
              информационно-пропагандистское обеспечение нашей деятельности
              представляет собой интересный эксперимент проверки системы
              обучения кадров, соответствует насущным
            </div>
            <div class="chat__message chat__message--received">
              Равным образом рамки и место обучения кадров обеспечивает широкому
              кругу (специалистов) участие в формировании системы обучения
              кадров
            </div>
          </div>
          <div class="chat__footer">
            <div class="row">
              <div class="col-auto">
                <ui-fab class="chat__attach-icon" icon="attachment" />
              </div>
              <ui-form-field class="col">
                <ui-textfield
                  class="no-border"
                  outlined
                  fullwidth
                  style="background-color: #fff"
                  placeholder="Написать сообщение"
                  >Написать сообщение
                  <template #after>
                    <ui-textfield-icon style="color: #0069c8" trailing
                      >send</ui-textfield-icon
                    >
                  </template>
                </ui-textfield>
              </ui-form-field>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.chat {
  border: 1px solid #d9d9de;

  &__contents,
  &__footer {
    width: 100%;
    padding: 20px 30px;
  }

  &__footer {
    background-color: #f5f5f7;
  }

  &__message {
    padding: 20px 25px;
    border-radius: 8px;
    max-width: 700px;
    margin-bottom: 20px;

    &--send {
      background-color: #f1ffe2;
      margin-left: auto;
    }
    &--received {
      background-color: #f4faff;
    }
  }
}
</style>

<style lang="scss">
.chat__attach-icon {
  background-color: unset;
  border: 1px solid #bfbfc3;

  .mdc-fab__icon {
    color: #9898a0 !important;
  }
}
</style>
