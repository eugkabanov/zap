<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);
</script>

<template>
  <div class="row">
    <aside style="position: relative" class="col-3">
      <slot name="aside" />
    </aside>
    <main class="col grayed">
      <div class="container-fluid">
        <div class="mb-5">
          <ui-icon-button class="d-xl-none" v-model="isOpen"
            >menu_open</ui-icon-button
          >
        </div>
        <slot name="main" />
      </div>
    </main>
  </div>

  <ui-drawer type="modal" v-model="isOpen">
    <ui-drawer-content>
      <!-- drawer needs at lease one focusable element -->
      <div tabindex="1" />
      <slot name="aside" />
    </ui-drawer-content>
  </ui-drawer>
</template>

<style scoped lang="scss">
@use "@/styles/vars";

.mdc-drawer--modal {
  position: fixed;
  left: 0;
  top: 0;
}

aside {
  padding: 50px 30px 50px 3rem;

  @media (max-width: vars.$desktop) {
    display: none;
    padding: 25px 15px 25px 1.5rem;
  }
}
</style>
