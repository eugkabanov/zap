<script lang="ts" setup>
const props = defineProps<{
  submitHandler: () => unknown;
  placeholder: string;
}>();

const onSubmit = () => {
  props.submitHandler();
};
</script>

<template>
  <form @submit.stop.prevent="onSubmit">
    <div class="row">
      <div class="col-10">
        <ui-textfield outlined fullwidth>{{ placeholder }}</ui-textfield>
      </div>
      <div class="col-2">
        <ui-fab icon="search" type="submit" style="background-color: #bfbfc3" />
      </div>
    </div>
  </form>
</template>
