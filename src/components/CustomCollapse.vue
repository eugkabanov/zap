<script setup lang="ts">
import IconExpandLessCircle from "@/components/icons/IconExpandLessCircle.vue";
import IconExpandMoreCircle from "@/components/icons/IconExpandMoreCircle.vue";
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
      <IconExpandLessCircle />
    </template>
    <template #expand-less-icon>
      <IconExpandMoreCircle />
    </template>
    <template #toggle>
      <div :class="$tt('body1')" class="large bold">{{ label }}</div>
    </template>
    <slot name="default" />
  </ui-collapse>
</template>
