<template>
  <ui-dialog-content class="pt-5">
    <div style="color: black" class="mb-2 large bold text-center">
      ВВЕДИТЕ КОММЕНТАРИЙ К ЗАКАЗУ
    </div>
    <div style="color: black" class="bold large text-center">
      <ui-textfield outlined fullwidth v-model="comment">

      </ui-textfield>
    </div>

    <div class="mt-4 row">
      <div class="col-auto mx-auto">
        <ui-button
            raised
            v-on:click="hideSaveCommentDialog"
        >Сохранить</ui-button>
      </div>
    </div>
  </ui-dialog-content>
</template>


<script lang="ts">
import {defineComponent} from "vue";
import {mapGetters} from "vuex";

export default defineComponent({
  name: "AddCommentToOrder",
  methods: {

    hideSaveCommentDialog() {
      this.$emit('saveCommentDialog', this.comment)
      this.comment = '';
    }
  },

  data() {

    return {
      comment: ''
    };
  },

  computed: {
    ...mapGetters(["isAuthenticated"])
  },
});
</script>