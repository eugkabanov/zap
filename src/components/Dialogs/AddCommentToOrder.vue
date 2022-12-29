<template>
  <ui-dialog-content class="pt-5">
    <div style="color: black" class="mb-2 large bold text-center">
      Редактирование комментария к заказу
    </div>
    <div style="color: black" class="bold large text-center">
      <ui-textfield
          outlined
          fullwidth
          v-model="comment"
          input-type="textarea"
          rows="8" cols="40"
      >Комментарий
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
  components: {},

  methods: {

    hideSaveCommentDialog() {
      this.$emit('saveCommentDialog', this.comment)
      this.comment = '';
    }
  },

  data() {

    return {
      comment: this.$props.commentCurrent,
    };
  },

  watch: {
    'commentCurrent': function(value) {
      this.comment = value;
    },
  },

  computed: {
    ...mapGetters(["isAuthenticated"])
  },

  props: {
    commentCurrent: {
      type: String
    },
  },
});
</script>