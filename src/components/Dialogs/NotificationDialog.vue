<template>
  <ui-dialog-content class="pt-5">
    <div style="color: black" class="mb-2 large bold text-center">
      {{ type_message }}
    </div>
    <div style="color: black" class="bold large text-center">
      {{ error_detail_message }}
    </div>

    <div class="mt-4 row">
      <div class="col-auto mx-auto">
        <ui-button
            id="deletion-confirmed"
            raised
            @click="hide_error_dialog"
            v-on:click="notificationContinue"
        >Продолжить</ui-button>
      </div>
    </div>
  </ui-dialog-content>
</template>

<script setup lang="ts">
defineProps<{
  type_message: string
  error_detail_message: string;
  hide_error_dialog: Function;
}>();
</script>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "NotificationDialog",

  data() {

    return {
    };
  },

  watch: {
  },

  methods: {
    notificationContinue() {
      this.$emit("notificationContinue")
    }
  },
});
</script>
