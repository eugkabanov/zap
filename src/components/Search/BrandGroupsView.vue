<script lang="ts" setup>
import CustomCollapse from "@/components/CustomControls/CustomCollapse.vue";
</script>

<template>
  <div class="large bold mb-2">1 ENGINE</div>

  <div style="background-color: #f5f5f7" class="p-3 mb-3">
    E1300A OIL PUMP (L4)
  </div>

  <div class="row gx-0 gy-2">
    <div class="col-12 col-lg-4 col-xl-3">
      <img class="w-100" src="@/assets/catalog/cupe.jpg" alt="" />
    </div>
    <div class="offset-xl-1 col-12 col-lg-8">
      <!-- <CustomCollapse>
        <template #title> -->
          <div class="row gx-0 align-items-center">
            <div class="col-6">OEM</div>
            <div class="col-6">Наименование</div>
          </div>
        <!-- </template>
      </CustomCollapse> -->
      <CustomCollapse>
        <template #title>
          <div class="row gx-0 align-items-center">
            <div class="col-6">
              <RouterLink to="/search-brand/honda/accord/cupe/12">
                13410-RAA-A00
              </RouterLink>
            </div>
            <div class="col-6">SHAFT, FR. BALANCER</div>
          </div>
        </template>

        <div class="ps-5">
          <div class="row gx-0 mb-2 fw-400">
            <div class="col-4">
              <div class="row gx-0 align-items-end">
                <div class="col-auto">Код на картинке</div>
                <div class="col">
                  <div class="dotted" />
                </div>
              </div>
            </div>
            <div class="col-auto ms-1">2</div>
          </div>
        </div>
      </CustomCollapse>
    </div>
  </div>
</template>
