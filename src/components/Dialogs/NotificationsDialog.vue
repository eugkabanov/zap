<script setup lang="ts">
import LineBreak from "@/components/LineBreak.vue";
</script>

<template>
  <ui-dialog-title>
    <h3>
      <ui-icon style="font-size: 34px; vertical-align: middle" type="filled"
        >notifications</ui-icon
      >
      УВЕДОМЛЕНИЯ
    </h3>
    <div class="row">
      <div class="col-auto small link">Показать непрочитанные (2)</div>
      <div class="ms-auto col-auto small link clear">Прочитать все</div>
    </div>
  </ui-dialog-title>
  <ui-dialog-content>
    <div class="mb-4 notification-item notification-item--active">
      <div class="notification-item__date hint">20 июля 2022</div>
      <div class="mt-1 notification-item__contents">
        Задача организации, в особенности же начало повседневной работы по
        формированию позиции требуют определения и уточнения модели развития.
        Равным образом ... <span class="link fw-400">Развернуть</span>
      </div>
      <LineBreak class="mt-3" />
    </div>
    <div class="mb-4 notification-item">
      <div class="notification-item__date hint">20 июля 2022</div>
      <div class="mt-1 notification-item__contents">
        Задача организации, в особенности же начало повседневной работы по
        формированию позиции требуют определения и уточнения модели развития.
        Равным образом ... <span class="link fw-400">Развернуть</span>
      </div>
      <LineBreak class="mt-3" />
    </div>
    <div class="mb-4 notification-item">
      <div class="notification-item__date hint">20 июля 2022</div>
      <div class="mt-1 notification-item__contents">
        Задача организации, в особенности же начало повседневной работы по
        формированию.
      </div>
      <LineBreak class="mt-3" />
    </div>
    <div class="mb-4 notification-item notification-item--active">
      <div class="notification-item__date hint">20 июля 2022</div>
      <div class="mt-1 notification-item__contents">
        Задача организации, в особенности же начало повседневной работы по
        формированию.
      </div>
      <LineBreak class="mt-3" />
    </div>
    <div class="mb-4 notification-item">
      <div class="notification-item__date hint">20 июля 2022</div>
      <div class="mt-1 notification-item__contents">
        Задача организации, в особенности же начало повседневной работы по
        формированию..
      </div>
      <LineBreak class="mt-3" />
    </div>
    <div class="mb-4 notification-item">
      <div class="notification-item__date hint">20 июля 2022</div>
      <div class="mt-1 notification-item__contents">
        Задача организации, в особенности же начало повседневной работы по
        формированию.
      </div>
      <LineBreak class="mt-3" />
    </div>
    <div class="mb-4 notification-item">
      <div class="notification-item__date hint">20 июля 2022</div>
      <div class="mt-1 notification-item__contents">
        Задача организации, в особенности же начало повседневной работы по
        формированию.
      </div>
      <LineBreak class="mt-3" />
    </div>
    <div class="mb-4 notification-item">
      <div class="notification-item__date hint">20 июля 2022</div>
      <div class="mt-1 notification-item__contents">
        Задача организации, в особенности же начало повседневной работы по
        формированию.
      </div>
      <LineBreak class="mt-3" />
    </div>
  </ui-dialog-content>
</template>

<style lang="scss">
.notification-item {
  font-size: 14px;
  &__date {
    font-weight: 400;
  }
  &__contents {
    font-weight: 400;
  }

  &--active &__contents {
    font-weight: 500;
  }
}
</style>
