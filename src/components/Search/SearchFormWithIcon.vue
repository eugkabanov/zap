<script lang="ts" setup>
const props = defineProps<{
  submitHandler: () => unknown;
  placeholder: string;
}>();

</script>

<template>
  <form>
    <div class="row">
      <div class="col">
        <ui-textfield v-model="article" outlined fullwidth :placeholder="placeholder" />
      </div>
      <div class="col-auto text-right">
        <ui-fab v-on:click="searchArticleDetail()" icon="search" type="submit" style="background-color: #bfbfc3" />
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import router from "@/router";

export default defineComponent({
  name: "SearchWithIcon",
  components: {},

  props: {

  },

  data() {
    return {
      article: "",
    };
  },

  methods: {
    searchArticleDetail() {
      if (this.article != "") {
        router.push({path: "/search/" + this.article});
      }
    },
  }
});
</script>
