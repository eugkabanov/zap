<script setup lang="ts">
defineProps<{
  onFilterClick: () => unknown;
}>();
</script>

<template>
  <div class="row align-items-center mb-5">
    <div class="col-auto">
      <h2>Аналоги</h2>
    </div>
    <div class="col-auto hint">
      <ui-form-field>
        <ui-checkbox @click="onFilterClick" input-id="filter-all" />
        <label for="filter-all">Показать все</label>
      </ui-form-field>
    </div>
  </div>

  <ui-tab-bar class="mb-4">
    <ui-tab min-width content-indicator>По цене</ui-tab>
    <ui-tab min-width content-indicator>По производителю</ui-tab>
  </ui-tab-bar>

  <div class="row align-items-center mb-2">
    <div class="col-auto">
      <ui-checkbox @click="onFilterClick" />
    </div>
    <div class="row col">
      <div class="col-12 col-xl-auto">AMIVA</div>
      <div class="d-none d-xl-block col dotted" />
      <div class="col-auto">от 870 ₽</div>
    </div>
  </div>
  <div class="row align-items-center mb-2">
    <div class="col-auto">
      <ui-checkbox @click="onFilterClick" />
    </div>
    <div class="row col">
      <div class="col-12 col-xl-auto">MARKON</div>
      <div class="d-none d-xl-block col dotted" />
      <div class="col-auto">от 927 ₽</div>
    </div>
  </div>
  <div class="row align-items-center mb-2">
    <div class="col-auto">
      <ui-checkbox @click="onFilterClick" />
    </div>
    <div class="row col">
      <div class="col-12 col-xl-auto">QUATTRO FRENI</div>
      <div class="d-none d-xl-block col dotted" />
      <div class="col-auto">от 1154 ₽</div>
    </div>
  </div>
  <div class="row align-items-center mb-2">
    <div class="col-auto">
      <ui-checkbox @click="onFilterClick" />
    </div>
    <div class="row col">
      <div class="col-12 col-xl-auto">CWORKS</div>
      <div class="d-none d-xl-block col dotted" />
      <div class="col-auto">от 1196 ₽</div>
    </div>
  </div>
</template>
