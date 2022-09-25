<script setup lang="ts">
import { ref } from "vue";

const selectOptions = [
  {
    label: "Bread, Cereal, Rice, and Pasta",
    value: "grains",
  },
  {
    label: "Vegetables",
    value: "vegetables",
    disabled: true,
  },
  {
    label: "Fruit",
    value: "fruit",
  },
];

const data = [
  {
    id: 1,
    dessert: "Frozen yogurt",
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    id: 2,
    dessert: "Ice cream sandwich",
    calories: 237,
    fat: 9,
    carbs: 37,
    protein: 4.3,
  },
  {
    id: 3,
    dessert: "Eclair",
    calories: 262,
    fat: 16,
    carbs: 24,
    protein: 6,
  },
  {
    id: 4,
    dessert: "Frozen yogurt",
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    id: 5,
    dessert: "Ice cream sandwich",
    calories: 237,
    fat: 9,
    carbs: 37,
    protein: 4.3,
  },
  {
    id: 6,
    dessert: "Eclair",
    calories: 262,
    fat: 16,
    carbs: 24,
    protein: 6,
  },
  {
    id: 7,
    dessert: "Frozen yogurt",
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    id: 8,
    dessert: "Ice cream sandwich",
    calories: 237,
    fat: 9,
    carbs: 37,
    protein: 4.3,
  },
  {
    id: 9,
    dessert: "Eclair",
    calories: 262,
    fat: 16,
    carbs: 24,
    protein: 6,
  },
  {
    id: 10,
    dessert: "Frozen yogurt",
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    id: 11,
    dessert: "Ice cream sandwich",
    calories: 237,
    fat: 9,
    carbs: 37,
    protein: 4.3,
  },
  {
    id: 12,
    dessert: "Eclair",
    calories: 262,
    fat: 16,
    carbs: 24,
    protein: 6,
  },
];
const thead = [
  {
    value: "ID",
    sort: "asc",
    columnId: "id",
  },
  {
    slot: "th-dessert",
    class: "good",
    sort: "none",
    columnId: "dessert",
  },
  "Calories",
  "Fat (g)",
  "Carbs (g)",
  "Protein (g)",
  "Actions",
];
const tbody = [
  "id",
  {
    slot: "dessert",
  },
  {
    field: "calories",
    numeric: true,
    class: "test",
  },
  {
    field: "fat",
    fn: (data: { fat: number }) => {
      return data.fat.toFixed(1);
    },
  },
  "carbs",
  {
    field: "protein",
  },
  {
    slot: "actions",
  },
];
const tfoot = [
  {
    field: "id",
    fnName: "count",
  },
  null,
  {
    field: "calories",
    fnName: "sum",
    align: "right",
    class: "test",
  },
  {
    field: "fat",
    fnName: "avg",
  },
  {
    field: "carbs",
    fnName: "max",
  },
  {
    field: "protein",
    fnName: "min",
  },
];
const page = ref(1);
const total = ref(data.length);
const selectedRows = ref([1, 2, 4]);

const tabs = [
  {
    text: "Favorites",
    icon: "favorite",
    indicator: "crop_square",
  },
  {
    text: "Recents",
    icon: "phone",
    indicator: "panorama_fish_eye",
  },
  {
    text: "Nearby",
    icon: "near_me",
    indicator: "change_history",
  },
];
const activeTab = ref(0);

const selectedValue = ref(3);
const options = [
  {
    label: "Extra Small",
    value: 1,
  },
  {
    label: "Small",
    value: 2,
  },
  {
    label: "Medium",
    value: 3,
  },
  {
    label: "Large",
    value: 4,
  },
  {
    label: "Extra Large",
    value: 5,
  },
];
</script>

<template>
  <div class="container">
    <ui-collapse with-icon ripple>
      <template #toggle><div :class="$tt('body1')">Typography</div></template>
      <h1 :class="$tt('headline1')">Headline 1</h1>
      <h2 :class="$tt('headline2')">Headline 2</h2>
      <h3 :class="$tt('headline3')">Headline 3</h3>

      <div :class="$tt('body1')">
        Body 1 paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim <a href="">ad minim veniam</a>, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur.
      </div>
      <div :class="$tt('body2')">
        Body 2 paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim <a href="">ad minim veniam</a>, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur.
      </div>

      <div :class="$tt('button')">Button text</div>
    </ui-collapse>

    <ui-collapse with-icon ripple>
      <template #toggle><div :class="$tt('body1')">Form data</div></template>

      <ui-form nowrap item-margin-bottom="16" label-width="80">
        <template #default="{ subitemClass, actionClass }">
          <ui-form-field>
            <label class="required">Input:</label>
            <ui-textfield outlined fullwidth>Placeholder</ui-textfield>
          </ui-form-field>
          <ui-form-field>
            <label>Select:</label>
            <ui-select outlined fullwidth :options="selectOptions"
              >Placeholder</ui-select
            >
          </ui-form-field>
          <ui-form-field>
            <label>Checkbox:</label>
            <div :class="subitemClass">
              <ui-form-field v-for="i in 3" :key="i">
                <ui-checkbox
                  :value="i"
                  :input-id="`checkbox-${i}`"
                ></ui-checkbox>
                <label :for="`checkbox-${i}`">Checkbox {{ i }}</label>
              </ui-form-field>
            </div>
          </ui-form-field>
          <ui-form-field>
            <label>Radio:</label>
            <div :class="subitemClass">
              <ui-form-field v-for="i in 3" :key="i">
                <ui-radio :value="i" :input-id="`radio-${i}`"></ui-radio>
                <label :for="`radio-${i}`">Radio {{ i }}</label>
              </ui-form-field>
            </div>
          </ui-form-field>
          <ui-form-field :class="actionClass">
            <ui-button raised class="compact">Compact</ui-button>
            <ui-button raised>Submit</ui-button>
            <ui-button outlined>Cancel</ui-button>
          </ui-form-field>
        </template>
      </ui-form>
    </ui-collapse>

    <ui-collapse with-icon ripple>
      <template #toggle><div :class="$tt('body1')">Data view</div></template>

      <ui-table
        v-model="selectedRows"
        fullwidth
        :data="data"
        :thead="thead"
        :tbody="tbody"
        :tfoot="tfoot"
        row-checkbox
        selected-key="id"
      >
        <template #th-dessert>
          Dessert
          <ui-icon v-tooltip="'100g serving'" aria-describedby="th-cell-1">
            error_outline
          </ui-icon>
        </template>
        <template #dessert="{ data }">
          <div class="dessert">{{ data.dessert }}</div>
        </template>
        <template #actions>
          <ui-icon>description</ui-icon>
          <ui-icon>edit</ui-icon>
          <ui-icon>delete</ui-icon>
        </template>

        <ui-pagination v-model="page" :total="total" show-total></ui-pagination>
      </ui-table>
    </ui-collapse>

    <ui-collapse with-icon ripple>
      <template #toggle><div :class="$tt('body1')">Misc</div></template>

      <ui-grid>
        <ui-grid-cell columns="12">
          <ui-tab-bar v-model="activeTab">
            <ui-tab v-for="(tab, index) in tabs" :key="index">
              {{ tab.text }}
            </ui-tab>
          </ui-tab-bar>
        </ui-grid-cell>
        <ui-grid-cell columns="12">
          <ui-badge overlap :count="999">
            <ui-icon>mail</ui-icon>
          </ui-badge>
        </ui-grid-cell>
        <ui-grid-cell columns="12">
          <ui-chips
            v-model="selectedValue"
            type="choice"
            :options="options"
          ></ui-chips>
        </ui-grid-cell>
      </ui-grid>
    </ui-collapse>
  </div>
</template>
