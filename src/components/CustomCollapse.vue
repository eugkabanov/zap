<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  label: string;
  defaultExpanded?: boolean;
}>();

const expanded = ref(!!props.defaultExpanded);
</script>

<template>
  <ui-collapse iconEndAligned with-icon ripple v-model="expanded">
    <template #expand-more-icon>
      <ui-icon>expand_more</ui-icon>
    </template>
    <template #expand-less-icon>
      <ui-icon>expand_less</ui-icon>
    </template>
    <template #toggle>
      <div :class="$tt('body1')" class="large bold">{{ label }}</div>
    </template>
    <slot name="default" />
  </ui-collapse>
</template>
