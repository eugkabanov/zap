<script setup lang="ts">
import { RouterView } from "vue-router";
import PageHeader from "./components/Page/PageHeader.vue";
import PageFooter from "./components/Page/PageFooter.vue";
</script>

<template>
  <PageHeader />
  <RouterView />
  <PageFooter />
</template>
