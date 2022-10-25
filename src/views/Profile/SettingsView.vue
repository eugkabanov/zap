<script setup lang="ts">
import AddAddressDialog from "@/components/Dialogs/AddAddressDialog.vue";
import { ref } from "vue";
import BalanceBar from "../../components/Profile/BalanceBar.vue";

const addressDataBody = [
  {
    slot: "select",
  },
  { field: "title" },
  { field: "address" },
  { slot: "workhours" },
  { field: "comments" },
  { slot: "actions" },
];
const addressDataHead = [
  { value: "" },
  { value: "Наименование" },
  { value: "Адрес" },
  { value: "Режим работы" },
  { value: "Комментарий" },
  { value: "" },
];
const selectedTab = ref(0);
const isAddAddressOpen = ref(false);

const openShowAddress = () => (isAddAddressOpen.value = true);

const addressData = [
  {
    title: "Домашний",
    address: "г. Москва, ул. Ленина, 13а, кв. 20",
    workhours: [
      { start: "8-00", end: "19-00" },
      { start: "8-00", end: "19-00" },
      { start: "8-00", end: "19-00" },
      { start: "8-00", end: "19-00" },
      { start: "8-00", end: "19-00" },
      { start: "—" },
      { start: "—" },
    ],
    comments: "",
  },
];
</script>

<template>
  <main class="container-fluid pb-5">
    <BalanceBar class="ms-auto mt-2 mb-3" />
    <h1>Настройки профиля</h1>

    <div class="col-12 col-xl-8">
      <ui-tab-bar v-model="selectedTab">
        <ui-tab content-indicator>Личные данные</ui-tab>
        <ui-tab content-indicator>Ваши реквизиты</ui-tab>
        <ui-tab content-indicator>Доставка</ui-tab>
        <ui-tab content-indicator>Изменить пароль</ui-tab>
        <ui-tab content-indicator>Уведомления</ui-tab>
      </ui-tab-bar>
    </div>

    <div class="mt-5">
      <!-- Personal data -->
      <section
        v-if="selectedTab === 0"
        class="col-12 col-sm-6 col-md-4 col-xl-3"
      >
        <div class="large bold mb-4">Личные данные</div>

        <div class="row mb-3">
          <div class="col-auto">Ф.И.О.</div>
          <div class="col dotted" />
          <div class="col-auto">Иванов Сергей Петрович</div>
        </div>
        <div class="row mb-3">
          <div class="col-auto">Телефон</div>
          <div class="col dotted" />
          <div class="col-auto">8-923-675-85-69</div>
        </div>
        <div class="row mb-3">
          <div class="col-auto">Город</div>
          <div class="col dotted" />
          <div class="col-auto">Нижний Новгород</div>
        </div>
        <div class="row mb-3">
          <div class="col-auto">E-mail</div>
          <div class="col dotted" />
          <div class="col-auto">isn-04@mail.ru</div>
        </div>

        <div class="mt-5">
          <ui-button raised>Редактировать</ui-button>
        </div>
      </section>
      <!-- Payment details -->
      <section v-if="selectedTab === 1" class="col-12 col-md-10 col-xl-6">
        <div class="large bold mb-4">Реквизиты</div>

        <div class="row mb-3">
          <div class="col-auto">ИНН</div>
          <div class="col dotted" />
          <div class="col-auto">421715798967</div>
        </div>
        <div class="row mb-3">
          <div class="col-auto">Наименование организации</div>
          <div class="col dotted" />
          <div class="col-auto">СтройАрсенал</div>
        </div>
        <div class="row mb-3">
          <div class="col-auto">Юридический адрес</div>
          <div class="col dotted" />
          <div class="col-auto">г. Нижний Новгород, ул. Ленина, 38, к. 5</div>
        </div>
        <div class="row mb-3">
          <div class="col-auto">Фактический адрес</div>
          <div class="col dotted" />
          <div class="col-auto">г. Нижний Новгород, ул. Ленина, 38, к. 5</div>
        </div>
        <div class="row mb-3">
          <div class="col-auto">Наименование банка</div>
          <div class="col dotted" />
          <div class="col-auto">ОАО «АЛЬФА-БАНК»</div>
        </div>
        <div class="row mb-3">
          <div class="col-auto">КПП</div>
          <div class="col dotted" />
          <div class="col-auto">421718934043</div>
        </div>
        <div class="row mb-3">
          <div class="col-auto">Р/С</div>
          <div class="col dotted" />
          <div class="col-auto">408 028 101 233 900 00222</div>
        </div>
        <div class="row mb-3">
          <div class="col-auto">К/С</div>
          <div class="col dotted" />
          <div class="col-auto">301 018 106 000 000 00111</div>
        </div>
        <div class="row mb-3">
          <div class="col-auto">БИК</div>
          <div class="col dotted" />
          <div class="col-auto">045000023</div>
        </div>
        <div class="row mb-3">
          <div class="col-auto">ОГРН</div>
          <div class="col dotted" />
          <div class="col-auto">2478952121252</div>
        </div>
        <div class="row mb-3">
          <div class="col-auto">ОКПО</div>
          <div class="col dotted" />
          <div class="col-auto">552125655548</div>
        </div>

        <div class="mt-5">
          <ui-button raised>Редактировать</ui-button>
        </div>
      </section>
      <!-- Delivery details -->
      <section v-if="selectedTab === 2">
        <div class="large bold mb-4">Реквизиты</div>

        <ui-table
          fullwidth
          :data="addressData"
          :thead="addressDataHead"
          :tbody="addressDataBody"
        >
          <template #workhours="{ data }">
            <div style="width: 500px" class="row py-3">
              <div class="col-auto">
                <div class="bold">пн</div>
                <div>
                  {{ data.workhours[0].start }}
                </div>
                <div>
                  {{ data.workhours[0].end }}
                </div>
              </div>
              <div class="col-auto">
                <div class="bold">вт</div>
                <div>
                  {{ data.workhours[1].start }}
                </div>
                <div>
                  {{ data.workhours[1].end }}
                </div>
              </div>
              <div class="col-auto">
                <div class="bold">ср</div>
                <div>
                  {{ data.workhours[2].start }}
                </div>
                <div>
                  {{ data.workhours[2].end }}
                </div>
              </div>
              <div class="col-auto">
                <div class="bold">чт</div>
                <div>
                  {{ data.workhours[3].start }}
                </div>
                <div>
                  {{ data.workhours[3].end }}
                </div>
              </div>
              <div class="col-auto">
                <div class="bold">пт</div>
                <div>
                  {{ data.workhours[4].start }}
                </div>
                <div>
                  {{ data.workhours[4].end }}
                </div>
              </div>
              <div class="col-auto">
                <div class="bold">сб</div>
                <div>
                  {{ data.workhours[5].start }}
                </div>
                <div>
                  {{ data.workhours[5].end }}
                </div>
              </div>
              <div class="col-auto">
                <div class="bold">вс</div>
                <div>
                  {{ data.workhours[6].start }}
                </div>
                <div>
                  {{ data.workhours[6].end }}
                </div>
              </div>
            </div>
          </template>
          <template #select> <ui-radio /></template>
          <template #actions>
            <ui-icon class="hint">border_color</ui-icon>
            <ui-icon class="ms-3 hint">delete</ui-icon>
          </template>
        </ui-table>

        <div @click="openShowAddress" class="mt-5">
          <ui-button raised>Добавить адрес</ui-button>
        </div>

        <ui-dialog
          class="add-new-address"
          v-model="isAddAddressOpen"
          sheet
          maskClosable
        >
          <AddAddressDialog />
        </ui-dialog>
      </section>
      <!-- Password change -->
      <section v-if="selectedTab === 3">
        <div class="large bold mb-4">Изменить пароль</div>

        <div class="col-12 col-xl-5">
          <div class="mb-3 row align-items-center">
            <label class="col-4">Старый пароль</label>
            <div class="col-7 offset-1">
              <ui-textfield input-type="password" outlined fullwidth />
            </div>
          </div>
          <div class="mb-3 row align-items-center">
            <label class="col-4">Новый пароль</label>
            <div class="col-7 offset-1">
              <ui-textfield input-type="password" outlined fullwidth />
            </div>
          </div>
          <div class="mb-3 row align-items-center">
            <label class="col-4">Повторите пароль</label>
            <div class="col-7 offset-1">
              <ui-textfield input-type="password" outlined fullwidth />
            </div>
          </div>
        </div>

        <div class="mt-5">
          <ui-button raised>Сохранить</ui-button>
        </div>
      </section>
    </div>
  </main>
</template>

<style lang="scss">
@use "@/styles/vars";
.add-new-address .mdc-dialog__surface {
  @media (min-width: vars.$desktop) {
    min-width: 500px !important;
  }
}
</style>
