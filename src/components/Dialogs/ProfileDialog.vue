<script setup lang="ts">
import IconQuestionBlack from "@/components/icons/iconQuestionBlack.vue";
import LineBreak from "@/components/LineBreak.vue";

defineProps<{
  closeProfileDialog: (payload: MouseEvent) => void;
  onNotificationClick: (payload: MouseEvent) => void;
  onLogout: (payload: MouseEvent) => void;
}>();
</script>

<template>
  <ui-dialog-title>
    <div :class="$tt('body1')" class="bold large">Сергей Иванов</div>
  </ui-dialog-title>

  <ui-dialog-content>
    <div class="row flex-column pt-4">
      <RouterLink
        @click="closeProfileDialog"
        to="/balance"
        class="row align-items-center clear mb-4"
      >
        <div class="col-auto">
          <ui-icon outlined>account_balance_wallet</ui-icon>
        </div>
        <div class="col">
          <div :class="$tt('body1')">Баланс</div>
        </div>
      </RouterLink>
      <div
        @click="onNotificationClick"
        class="row align-items-center link clear mb-4"
      >
        <div class="col-auto">
          <ui-icon outlined>notifications</ui-icon>
        </div>
        <div class="col">
          <div :class="$tt('body1')">Уведомления</div>
        </div>
      </div>
      <RouterLink
        @click="closeProfileDialog"
        to="/park"
        class="row align-items-center clear mb-4"
      >
        <div class="col-auto">
          <ui-icon outlined>directions_car</ui-icon>
        </div>
        <div class="col">
          <div :class="$tt('body1')">Гараж</div>
        </div>
      </RouterLink>
      <RouterLink
        @click="closeProfileDialog"
        to="/favourites"
        class="row align-items-center clear mb-4"
      >
        <div class="col-auto">
          <ui-icon outlined>star_outline</ui-icon>
        </div>
        <div class="col">
          <div :class="$tt('body1')">Избранное</div>
        </div>
      </RouterLink>
      <RouterLink
        @click="closeProfileDialog"
        to="/orders"
        class="row align-items-center clear mb-4"
      >
        <div class="col-auto">
          <ui-icon outlined>list_alt</ui-icon>
        </div>
        <div class="col">
          <div :class="$tt('body1')">Заказы</div>
        </div>
      </RouterLink>
      <RouterLink
        @click="closeProfileDialog"
        to="/appeals"
        class="row align-items-center clear mb-4"
      >
        <div class="col-auto">
          <IconQuestionBlack />
        </div>
        <div class="col">
          <div :class="$tt('body1')">Вопросы по заказам</div>
        </div>
      </RouterLink>
      <RouterLink
        @click="closeProfileDialog"
        to="/dealers"
        class="row align-items-center clear mb-4"
      >
        <div class="col-auto">
          <ui-icon outlined>local_shipping</ui-icon>
        </div>
        <div class="col">
          <div :class="$tt('body1')">Поставщики</div>
        </div>
      </RouterLink>
      <RouterLink
        @click="closeProfileDialog"
        to="/sessions"
        class="row align-items-center clear"
      >
        <div class="col-auto">
          <ui-icon outlined>desktop_windows</ui-icon>
        </div>
        <div class="col">
          <div :class="$tt('body1')">Web-сервисы</div>
        </div>
      </RouterLink>
      <LineBreak class="my-3" />
      <RouterLink
        @click="closeProfileDialog"
        to="/settings"
        class="row align-items-center hint mb-4"
      >
        <div class="col-auto">
          <ui-icon outlined>settings</ui-icon>
        </div>
        <div class="col">
          <div :class="$tt('body1')">Настройки</div>
        </div>
      </RouterLink>
      <div @click="onLogout" class="row align-items-center link hint">
        <div class="col-auto">
          <ui-icon outlined>logout</ui-icon>
        </div>
        <div class="col">
          <div :class="$tt('body1')">Выйти</div>
        </div>
      </div>
    </div>
  </ui-dialog-content>
</template>
