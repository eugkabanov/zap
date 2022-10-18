<script setup lang="ts">
import { ref } from "vue";
import BrandProductFilters from "../../components/Search/BrandProductFilters.vue";
import CustomCollapse from "../../components/CustomControls/CustomCollapse.vue";
import BrandProductNodeFilters from "../../components/Search/BrandProductNodeFilters.vue";

const isFiltersOpen = ref(false);
const searchType = ref(0);
</script>

<template>
  <main class="container-fluid py-5">
    <h1 class="mb-5">
      <ui-icon-button class="d-xl-none" v-model="isFiltersOpen"
        >menu_open</ui-icon-button
      >Оригинальный каталог
    </h1>

    <h2 class="mb-4">
      <RouterLink to="/search-brand/honda" class="clear">
        <ui-icon class="vertical-align-middle">arrow_back</ui-icon> Honda ACCORD
        IX, Купе 3.5
      </RouterLink>
      <span class="small hint ms-2"
        ><ui-icon outlined class="vertical-align-middle"
          >directions_car</ui-icon
        >
        Добавить в гараж</span
      >
    </h2>

    <div class="row align-items-center mb-4">
      <div class="col-auto">
        <ui-chips
          v-model="searchType"
          type="choice"
          :options="[
            { label: 'Поиск по группам', value: 0 },
            { label: 'Список узлов', value: 1 },
          ]"
        ></ui-chips>
      </div>

      <div class="col-auto">
        <RouterLink to="/search-brand">Выбрать другой автомобиль</RouterLink>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-3 d-none d-xl-block">
        <div v-if="searchType === 0">
          <BrandProductFilters />
        </div>
        <div v-if="searchType === 1">
          <BrandProductNodeFilters />
        </div>
      </div>

      <div class="col-12 offset-xl-1 col-xl-8">
        <!-- Search Type 1 -->
        <div v-if="searchType === 0">
          <div class="large bold mb-2">1 ENGINE</div>

          <div style="background-color: #f5f5f7" class="p-3 mb-3">
            E1300A OIL PUMP (L4)
          </div>

          <div class="row gy-2">
            <div class="col-12 col-lg-4 col-xl-3">
              <img class="w-100" src="@/assets/catalog/cupe.jpg" alt="" />
            </div>
            <div class="col-12 col-lg-8 col-xl-9">
              <CustomCollapse>
                <template #title>
                  <div class="row align-items-center">
                    <div class="col-6">OEM</div>
                    <div class="col-6">Наименование</div>
                  </div>
                </template>
              </CustomCollapse>
              <CustomCollapse>
                <template #title>
                  <div class="row align-items-center">
                    <div class="col-6">
                      <RouterLink to="/search-brand/honda/accord/cupe/12">
                        13410-RAA-A00
                      </RouterLink>
                    </div>
                    <div class="col-6">SHAFT, FR. BALANCER</div>
                  </div>
                </template>

                <div class="row mb-2">
                  <div class="col-5">
                    <div class="row align-items-end">
                      <div class="col-auto">Код на картинке</div>
                      <div class="col">
                        <div class="dotted" />
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">2</div>
                </div>

                <div class="row mb-2">
                  <div class="col-5">
                    <div class="row align-items-end">
                      <div class="col-auto">Код на картинке</div>
                      <div class="col">
                        <div class="dotted" />
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">2</div>
                </div>

                <div class="row mb-2">
                  <div class="col-5">
                    <div class="row align-items-end">
                      <div class="col-auto">Amount</div>
                      <div class="col">
                        <div class="dotted" />
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">1</div>
                </div>

                <div class="row mb-2">
                  <div class="col-5">
                    <div class="row align-items-end">
                      <div class="col-auto">Note</div>
                      <div class="col">
                        <div class="dotted" />
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">(NA USE ALT: 15100-R40-A02)</div>
                </div>

                <div class="row mb-2">
                  <div class="col-5">
                    <div class="row align-items-end">
                      <div class="col-auto">Grades</div>
                      <div class="col">
                        <div class="dotted" />
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">LX, LX-SSR, EX, EXL, EXLN</div>
                </div>

                <div class="row mb-2">
                  <div class="col-5">
                    <div class="row align-items-end">
                      <div class="col-auto">Countries</div>
                      <div class="col">
                        <div class="dotted" />
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">USA</div>
                </div>
              </CustomCollapse>
              <CustomCollapse>
                <template #title>
                  <div class="row align-items-center">
                    <div class="col-6">
                      <RouterLink to="/search-brand/honda/accord/cupe/12">
                        13410-RAA-A00
                      </RouterLink>
                    </div>
                    <div class="col-6">SHAFT, FR. BALANCER</div>
                  </div>
                </template>

                <div class="row mb-2">
                  <div class="col-5">
                    <div class="row align-items-end">
                      <div class="col-auto">Код на картинке</div>
                      <div class="col">
                        <div class="dotted" />
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">2</div>
                </div>

                <div class="row mb-2">
                  <div class="col-5">
                    <div class="row align-items-end">
                      <div class="col-auto">Код на картинке</div>
                      <div class="col">
                        <div class="dotted" />
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">2</div>
                </div>

                <div class="row mb-2">
                  <div class="col-5">
                    <div class="row align-items-end">
                      <div class="col-auto">Amount</div>
                      <div class="col">
                        <div class="dotted" />
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">1</div>
                </div>

                <div class="row mb-2">
                  <div class="col-5">
                    <div class="row align-items-end">
                      <div class="col-auto">Note</div>
                      <div class="col">
                        <div class="dotted" />
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">(NA USE ALT: 15100-R40-A02)</div>
                </div>

                <div class="row mb-2">
                  <div class="col-5">
                    <div class="row align-items-end">
                      <div class="col-auto">Grades</div>
                      <div class="col">
                        <div class="dotted" />
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">LX, LX-SSR, EX, EXL, EXLN</div>
                </div>

                <div class="row mb-2">
                  <div class="col-5">
                    <div class="row align-items-end">
                      <div class="col-auto">Countries</div>
                      <div class="col">
                        <div class="dotted" />
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">USA</div>
                </div>
              </CustomCollapse>
              <CustomCollapse>
                <template #title>
                  <div class="row align-items-center">
                    <div class="col-6">
                      <RouterLink to="/search-brand/honda/accord/cupe/12">
                        13410-RAA-A00
                      </RouterLink>
                    </div>
                    <div class="col-6">SPROCKET, DRIVEN (17T)</div>
                  </div>
                </template>

                <div class="row mb-2">
                  <div class="col-5">
                    <div class="row align-items-end">
                      <div class="col-auto">Код на картинке</div>
                      <div class="col">
                        <div class="dotted" />
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">2</div>
                </div>

                <div class="row mb-2">
                  <div class="col-5">
                    <div class="row align-items-end">
                      <div class="col-auto">Код на картинке</div>
                      <div class="col">
                        <div class="dotted" />
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">2</div>
                </div>

                <div class="row mb-2">
                  <div class="col-5">
                    <div class="row align-items-end">
                      <div class="col-auto">Amount</div>
                      <div class="col">
                        <div class="dotted" />
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">1</div>
                </div>

                <div class="row mb-2">
                  <div class="col-5">
                    <div class="row align-items-end">
                      <div class="col-auto">Note</div>
                      <div class="col">
                        <div class="dotted" />
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">(NA USE ALT: 15100-R40-A02)</div>
                </div>

                <div class="row mb-2">
                  <div class="col-5">
                    <div class="row align-items-end">
                      <div class="col-auto">Grades</div>
                      <div class="col">
                        <div class="dotted" />
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">LX, LX-SSR, EX, EXL, EXLN</div>
                </div>

                <div class="row mb-2">
                  <div class="col-5">
                    <div class="row align-items-end">
                      <div class="col-auto">Countries</div>
                      <div class="col">
                        <div class="dotted" />
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">USA</div>
                </div>
              </CustomCollapse>
              <CustomCollapse>
                <template #title>
                  <div class="row align-items-center">
                    <div class="col-6">
                      <RouterLink to="/search-brand/honda/accord/cupe/12">
                        13410-RAA-A00
                      </RouterLink>
                    </div>
                    <div class="col-6">SHAFT, FR. BALANCER</div>
                  </div>
                </template>

                <div class="row mb-2">
                  <div class="col-5">
                    <div class="row align-items-end">
                      <div class="col-auto">Код на картинке</div>
                      <div class="col">
                        <div class="dotted" />
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">2</div>
                </div>

                <div class="row mb-2">
                  <div class="col-5">
                    <div class="row align-items-end">
                      <div class="col-auto">Код на картинке</div>
                      <div class="col">
                        <div class="dotted" />
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">2</div>
                </div>

                <div class="row mb-2">
                  <div class="col-5">
                    <div class="row align-items-end">
                      <div class="col-auto">Amount</div>
                      <div class="col">
                        <div class="dotted" />
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">1</div>
                </div>

                <div class="row mb-2">
                  <div class="col-5">
                    <div class="row align-items-end">
                      <div class="col-auto">Note</div>
                      <div class="col">
                        <div class="dotted" />
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">(NA USE ALT: 15100-R40-A02)</div>
                </div>

                <div class="row mb-2">
                  <div class="col-5">
                    <div class="row align-items-end">
                      <div class="col-auto">Grades</div>
                      <div class="col">
                        <div class="dotted" />
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">LX, LX-SSR, EX, EXL, EXLN</div>
                </div>

                <div class="row mb-2">
                  <div class="col-5">
                    <div class="row align-items-end">
                      <div class="col-auto">Countries</div>
                      <div class="col">
                        <div class="dotted" />
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">USA</div>
                </div>
              </CustomCollapse>
              <CustomCollapse>
                <template #title>
                  <div class="row align-items-center">
                    <div class="col-6">
                      <RouterLink to="/search-brand/honda/accord/cupe/12">
                        13410-RAA-A00
                      </RouterLink>
                    </div>
                    <div class="col-6">TENSIONER, BALANCER SHAFT</div>
                  </div>
                </template>

                <div class="row mb-2">
                  <div class="col-5">
                    <div class="row align-items-end">
                      <div class="col-auto">Код на картинке</div>
                      <div class="col">
                        <div class="dotted" />
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">2</div>
                </div>

                <div class="row mb-2">
                  <div class="col-5">
                    <div class="row align-items-end">
                      <div class="col-auto">Код на картинке</div>
                      <div class="col">
                        <div class="dotted" />
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">2</div>
                </div>

                <div class="row mb-2">
                  <div class="col-5">
                    <div class="row align-items-end">
                      <div class="col-auto">Amount</div>
                      <div class="col">
                        <div class="dotted" />
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">1</div>
                </div>

                <div class="row mb-2">
                  <div class="col-5">
                    <div class="row align-items-end">
                      <div class="col-auto">Note</div>
                      <div class="col">
                        <div class="dotted" />
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">(NA USE ALT: 15100-R40-A02)</div>
                </div>

                <div class="row mb-2">
                  <div class="col-5">
                    <div class="row align-items-end">
                      <div class="col-auto">Grades</div>
                      <div class="col">
                        <div class="dotted" />
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">LX, LX-SSR, EX, EXL, EXLN</div>
                </div>

                <div class="row mb-2">
                  <div class="col-5">
                    <div class="row align-items-end">
                      <div class="col-auto">Countries</div>
                      <div class="col">
                        <div class="dotted" />
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">USA</div>
                </div>
              </CustomCollapse>
            </div>
          </div>
        </div>

        <!-- Search Type 2 -->
        <div v-if="searchType === 1">
          <div class="row gy-2">
            <div class="col-12 col-md-6 col-xl-3">
              <RouterLink to="/search-brand/honda/accord/cupe/12" class="clear">
                <div style="border: 1px solid #d9d9de" class="mb-2">
                  <img class="w-100" src="@/assets/catalog/cupe.jpg" alt="" />
                </div>
                <div>THROTTLE BODY (L4) (-'05) E0100</div>
              </RouterLink>
            </div>
            <div class="col-12 col-md-6 col-xl-3">
              <RouterLink to="/search-brand/honda/accord/cupe/12" class="clear">
                <div style="border: 1px solid #d9d9de" class="mb-2">
                  <img class="w-100" src="@/assets/catalog/cupe.jpg" alt="" />
                </div>
                <div>THROTTLE BODY (L4) (-'05) E0100</div>
              </RouterLink>
            </div>
            <div class="col-12 col-md-6 col-xl-3">
              <RouterLink to="/search-brand/honda/accord/cupe/12" class="clear">
                <div style="border: 1px solid #d9d9de" class="mb-2">
                  <img class="w-100" src="@/assets/catalog/cupe.jpg" alt="" />
                </div>
                <div>THROTTLE BODY (L4) (-'05) E0100</div>
              </RouterLink>
            </div>
            <div class="col-12 col-md-6 col-xl-3">
              <RouterLink to="/search-brand/honda/accord/cupe/12" class="clear">
                <div style="border: 1px solid #d9d9de" class="mb-2">
                  <img class="w-100" src="@/assets/catalog/cupe.jpg" alt="" />
                </div>
                <div>THROTTLE BODY (L4) (-'05) E0100</div>
              </RouterLink>
            </div>
            <div class="col-12 col-md-6 col-xl-3">
              <RouterLink to="/search-brand/honda/accord/cupe/12" class="clear">
                <div style="border: 1px solid #d9d9de" class="mb-2">
                  <img class="w-100" src="@/assets/catalog/cupe.jpg" alt="" />
                </div>
                <div>THROTTLE BODY (L4) (-'05) E0100</div>
              </RouterLink>
            </div>
            <div class="col-12 col-md-6 col-xl-3">
              <RouterLink to="/search-brand/honda/accord/cupe/12" class="clear">
                <div style="border: 1px solid #d9d9de" class="mb-2">
                  <img class="w-100" src="@/assets/catalog/cupe.jpg" alt="" />
                </div>
                <div>THROTTLE BODY (L4) (-'05) E0100</div>
              </RouterLink>
            </div>
            <div class="col-12 col-md-6 col-xl-3">
              <RouterLink to="/search-brand/honda/accord/cupe/12" class="clear">
                <div style="border: 1px solid #d9d9de" class="mb-2">
                  <img class="w-100" src="@/assets/catalog/cupe.jpg" alt="" />
                </div>
                <div>THROTTLE BODY (L4) (-'05) E0100</div>
              </RouterLink>
            </div>
            <div class="col-12 col-md-6 col-xl-3">
              <RouterLink to="/search-brand/honda/accord/cupe/12" class="clear">
                <div style="border: 1px solid #d9d9de" class="mb-2">
                  <img class="w-100" src="@/assets/catalog/cupe.jpg" alt="" />
                </div>
                <div>THROTTLE BODY (L4) (-'05) E0100</div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <ui-drawer type="modal" v-model="isFiltersOpen">
    <ui-drawer-content class="p-4">
      <!-- drawer needs at lease one focusable element -->
      <div tabindex="1" />
      <div v-if="searchType === 0">
        <BrandProductFilters />
      </div>
      <div v-if="searchType === 1">
        <BrandProductNodeFilters />
      </div>
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
</style>
