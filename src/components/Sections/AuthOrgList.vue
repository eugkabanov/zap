<template>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Название организации</th>
        <th>ИНН</th>
        <th>Дествие</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="i in oitems" :key="i.id">
        <td class="ms-auto">{{ i.id }}</td>
        <td class="ms-auto">{{ i.company_name }}</td>
        <td class="ms-auto">{{ i.inn }}</td>
        <td>
          <ui-button class="mt-3" raised @click="enable(i.id)"
            >Включить</ui-button
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import AccountService from "@/services/AccountService";
import router from "@/router";

export default {
  data() {
    return {};
  },

  props: {
    oitems: {
      type: Array,
    },
  },

  methods: {
    enable(id: any) {
      let request: any;
      request = {
        id: id,
      };
      AccountService.enableAccount(request)
        .then((response: any) => {
          console.log(response.data);
          router.go(0);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
  },
};
</script>
