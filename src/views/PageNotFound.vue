<script setup lang="ts">
import IconBox from "../components/icons/IconBox.vue";
import IconDelivery from "../components/icons/IconDelivery.vue";
import IconDocs from "../components/icons/IconDocs.vue";
import IconSearch from "../components/icons/IconSearch.vue";
import IconSettings from "../components/icons/IconSettings.vue";
import IconWeb from "../components/icons/IconWeb.vue";
import IconUser from "../components/icons/IconUser.vue";
import IconOffice from "../components/icons/IconOffice.vue";
import BrandsSlider from "../components/BrandsSlider/BrandsSlider.vue";
</script>

<template>
  <main>
    <section id="about-banner" class="py-5">
      <div class="container light">
        <div
          style="min-height: 85vh"
          class="row g-0 justify-content-center align-items-center"
        >
          <div class="row gx-0 gy-4">
            <div class="col-12">
              <img class="logo" src="@/assets/logo-white.svg" alt="Logo" />
              <div
                :class="$tt('body1')"
                class="mt-1 text-center"
                style="font-size: 25px"
              >
                404&nbsp;—&nbsp;страница не найдена
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
@use "@/styles/_vars.scss";

section#about-banner {
  background-image: url("@/assets/about-banner.jpg");
  background-size: cover;
  background-position-y: center;

  .logo {
    height: 18rem;
    width: 100%;
  }

  .lead-message {
    background-color: rgba($color: black, $alpha: 0.6);
    border: 1px solid white;
    padding: 25px;

    @media (min-width: vars.$desktop) {
      padding: 50px;
    }
  }
}

section#about {
  background-color: #242424;

  .parking-image {
    width: 100%;
    height: auto;
  }
}
</style>
