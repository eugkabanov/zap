<template>
  <ui-dialog-content class="pt-5">
    <div style="color: black" class="mb-2 large bold text-center">
      ОШИБКА!
    </div>
    <div style="color: black" class="bold large text-center">
      {{ error_detail_message }}
    </div>

    <div class="mt-4 row">
      <div class="col-auto mx-auto">
        <ui-button
            raised
            @click="hide_error_dialog"
        >Продолжить</ui-button>
      </div>
    </div>
  </ui-dialog-content>
</template>

<script setup lang="ts">
defineProps<{
  error_detail_message: string;
  hide_error_dialog: Function;
}>();
</script>
