<script setup lang="ts">
import { onMounted, ref } from "vue";

const mountedSelect = ref<HTMLElement | null>(null);

onMounted(() => {
  const element = mountedSelect.value;

  if (element !== null) {
    const selectIcon = element.querySelector(".mdc-select__dropdown-icon");
    if (selectIcon !== null) {
      console.log(selectIcon.innerHTML);
      selectIcon.innerHTML = `<span class="mdc-select__dropdown-icon-graphic">
    <i
      class="material-icons mdc-select__dropdown-icon-inactive"
      aria-hidden="true"
      >expand_more</i
    >
    <i
      class="material-icons mdc-select__dropdown-icon-active"
      aria-hidden="true"
      >expand_less</i
    >
  </span>`;
    }
  }
});
</script>

<template>
  <div ref="mountedSelect">
    <ui-select v-bind="$attrs">
      <slot />
    </ui-select>
  </div>
</template>
