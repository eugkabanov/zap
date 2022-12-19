<script lang="ts" setup>
const props = defineProps<{
  submitHandler: () => unknown;
  placeholder: string;
}>();

</script>

<template>
  <form v-on:submit.prevent>
    <div class="row">
      <div class="col">
        <ui-textfield v-on:keyup.enter="searchArticleDetail()" v-model="article" outlined fullwidth :placeholder="placeholder" />
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
import CatalogService from "@/services/CatalogService";
import type ResponseData from "@/types/ResponseData";
import type VehicleObject from "@/types/VehicleObject"

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
      if (this.article.length === 17) {
        this.findVehicleByVin(this.article)
      } else if (this.article != "") {
        router.push({name: 'productSearch', params: { productId : this.article } })
        this.$emit("updateSearchPage", this.article)   
      } 

    },
    findVehicleByVin(vin: string) {
      CatalogService.findVehicleByVin(vin)
        .then((response: ResponseData) => {
          // console.log(response.data)
          for (let item of response.data) {
            let o : VehicleObject = item
            router.push({name: 'brandNameTypeModelSearch', params: { brandName : o.catalog, type : o.ssd, model : o.vehicleid } })
          }
        })

        .catch((e: Error) => {
          console.log(e);
        })
    },
  }
});
</script>
