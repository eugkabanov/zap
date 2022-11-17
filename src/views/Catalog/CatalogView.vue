<script setup lang="ts">
import CatalogLayout from "../../components/Layout/CatalogLayout.vue";
import CategoryButton from "../../components/Catalog/CategoryButton.vue";
import ProductCard from "../../components/Catalog/ProductCard.vue";
import ProductSection from "../../components/Catalog/ProductSection.vue";
import BreadCrumbs from "../../components/Page/BreadCrumbs.vue";
import SearchFormWithIcon from "../../components/Search/SearchFormWithIcon.vue";
import router from "@/router";

const list = [1, 2, 3, 4];
</script>

<template>
  <CatalogLayout>
    <template #aside>
      <div :class="$tt('headline2')" class="mb-4">Каталог</div>
      <div>
        <CategoryButton href="/catalog/popular" caption="Популярные товары" />
        <CategoryButton href="/catalog/popular" caption="Масла" />
        <CategoryButton caption="Шины">
          <template #subCategory>
            <div class="p-0 row g-5">
              <div class="col-12 col-lg-4">
                <div class="row flex-column g-3">
                  <RouterLink class="clear" to="/catalog-choose/wheels">
                    <div class="large x-bold color-black">Шины</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-passengers">
                    <div class="thin color-black">Шины легковые</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div class="thin color-black">Шины грузовые</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-industrial">
                    <div class="thin color-black">Шины индустриальные</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-farm">
                    <div class="thin color-black">
                      Шины сельскохозяйственные
                    </div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-quadro">
                    <div class="thin color-black">Шины квадро</div>
                  </RouterLink>
                  <div class="link">Показать больше</div>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="row flex-column g-3">
                  <RouterLink class="clear" to="/catalog-choose/wheels">
                    <div class="large x-bold color-black">
                      Аксессуары для шин и дисков
                    </div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-passengers">
                    <div class="thin color-black">Колпаки на колеса</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div class="thin color-black">Колпачки ниппелей</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div class="thin color-black">Колпачки ступицы</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div class="thin color-black">Кольца центровочные</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div class="thin color-black">
                      Крышки ступиц декоративные
                    </div>
                  </RouterLink>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="row flex-column g-3">
                  <RouterLink class="clear" to="/catalog-choose/wheels">
                    <div class="large x-bold color-black">Ремонт шин</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-passengers">
                    <div class="thin color-black">
                      Аварийный герметик для колес
                    </div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div class="thin color-black">Герметики для шин</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div class="thin color-black">Грибок для ремонта шин</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div class="thin color-black">Жгуты для ремонта шин</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div class="thin color-black">Жидкая резина</div>
                  </RouterLink>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="row flex-column g-3">
                  <RouterLink class="clear" to="/catalog-choose/wheels">
                    <div class="large x-bold color-black">
                      Автохимия для шин и дисков
                    </div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-passengers">
                    <div class="thin color-black">
                      Автохимия для шин и дисков
                    </div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div class="thin color-black">Герметики для шин</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div class="thin color-black">
                      Защитные покрытия для шин и дисков
                    </div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div class="thin color-black">Кондиционер</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div class="thin color-black">Консерватор</div>
                  </RouterLink>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="row flex-column g-3">
                  <RouterLink class="clear" to="/catalog-choose/wheels">
                    <div class="large x-bold color-black">
                      Болты, гайки, секретики
                    </div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-passengers">
                    <div class="thin color-black">Болты колесные</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div class="thin color-black">Гайки колесные</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div class="thin color-black">Болты секретики</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div class="thin color-black">Гайки секретики</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div class="thin color-black">Вентили для шин</div>
                  </RouterLink>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="row flex-column g-3">
                  <RouterLink class="clear" to="/catalog-choose/wheels">
                    <div class="large x-bold color-black">Шиномонтаж</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-passengers">
                    <div class="thin color-black">
                      Вентили для бескамерных шин
                    </div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div class="thin color-black">Грузики</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div class="thin color-black">Домкраты</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div class="thin color-black">
                      Инструмент для вентилей бескамерных шин
                    </div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div class="thin color-black">Карандаши и мел для шин</div>
                  </RouterLink>
                </div>
              </div>
            </div>
          </template>
        </CategoryButton>
        <CategoryButton href="/catalog/popular" caption="Диски" />
        <CategoryButton href="/catalog/popular" caption="Щетки" />
        <CategoryButton href="/catalog/popular" caption="Аккумуляторы" />
        <CategoryButton href="/catalog/popular" caption="Свет" />
        <CategoryButton href="/catalog/popular" caption="Стекла" />
        <CategoryButton href="/catalog/popular" caption="Жидкости" />
        <CategoryButton href="/catalog/popular" caption="Автохимия" />
        <CategoryButton href="/catalog/popular" caption="Электрика" />
        <CategoryButton href="/catalog/popular" caption="Доп оборудование" />
        <CategoryButton href="/catalog/popular" caption="Инструмент" />
        <CategoryButton href="/catalog/popular" caption="Автотовары" />
        <CategoryButton href="/catalog/popular" caption="Автозапчасти" />
        <CategoryButton href="/catalog/popular" caption="Аксессуары" />
        <CategoryButton href="/catalog/popular" caption="Зимний ассортимент" />
        <CategoryButton href="/catalog/popular" caption="Мототовары" />
        <CategoryButton href="/catalog/popular" caption="Здоровье" />
        <CategoryButton href="/catalog/popular" caption="От производителя" />
        <CategoryButton href="/catalog/popular" caption="Садовый инвентарь" />
      </div>
    </template>
    <template #main>
      <div class="pb-5">
        <BreadCrumbs
          class="mb-4"
          :crumbs="[
            { title: 'Главная', href: '/' },
            { title: 'Каталог', href: '/catalog' },
          ]"
        />

        <div class="d-none d-lg-block mb-4 float-block">
          <div class="row align-items-center">
            <div class="col-auto">
              <div class="h3 large">ПОИСК АВТОЗАПЧАСТЕЙ</div>
            </div>
            <div
              class="col"
              style="padding-right: 25px; border-right: 1px solid #d9d9de"
            >
              <SearchFormWithIcon
                :submit-handler="
                  () => {
                    router.push('/search/TS32701');
                  }
                "
                placeholder="По VIN-коду автомобиля или Frame номеру"
              />
            </div>
            <div class="ps-4 col-auto">
              <RouterLink to="/search-brand">
                <ui-button raised style="background-color: black; color: white"
                  >ПОДБОР ПО МАРКЕ</ui-button
                >
              </RouterLink>
            </div>
          </div>
        </div>

        <div class="row flex-column g-4">
          <div class="col">
            <ProductSection title="Масла" href="/catalog-choose/oil">
              <template #products>
                <div class="row gy-3">
                  <article
                    v-for="item of list"
                    v-bind:key="item"
                    class="col-12 col-sm-6 col-md-4 col-xxl-3"
                  >
                    <ProductCard
                      productId="123"
                      productCategory="wheel"
                      title="Название товара"
                      image="@/assets/catalog/oil.png"
                      brand="BREND"
                      inventoryId="L03412960404"
                      price="5841"
                    />
                  </article>
                </div>
              </template>
            </ProductSection>
          </div>

          <div class="col">
            <ProductSection title="Шины" href="/catalog-choose/oil">
              <template #products>
                <div class="row g-3">
                  <article
                    v-for="item of list"
                    v-bind:key="item"
                    class="col-12 col-sm-6 col-md-4 col-xxl-3"
                  >
                    <ProductCard
                      productId="123"
                      productCategory="wheel"
                      title="Название товара"
                      image="@/assets/catalog/oil.png"
                      brand="BREND"
                      inventoryId="L03412960404"
                      price="5841"
                    />
                  </article>
                </div>
              </template>
            </ProductSection>
          </div>

          <div class="col">
            <ProductSection title="Диски" href="/catalog-choose/oil">
              <template #products>
                <div class="row g-3">
                  <article
                    v-for="item of list"
                    v-bind:key="item"
                    class="col-12 col-sm-6 col-md-4 col-xxl-3"
                  >
                    <ProductCard
                      productId="123"
                      productCategory="wheel"
                      title="Название товара"
                      image="@/assets/catalog/oil.png"
                      brand="BREND"
                      inventoryId="L03412960404"
                      price="5841"
                    />
                  </article>
                </div>
              </template>
            </ProductSection>
          </div>

          <div class="col">
            <ProductSection title="Колодки" href="/catalog-choose/oil">
              <template #products>
                <div class="row g-3">
                  <article
                    v-for="item of list"
                    v-bind:key="item"
                    class="col-12 col-sm-6 col-md-4 col-xxl-3"
                  >
                    <ProductCard
                      productId="123"
                      productCategory="wheel"
                      title="Название товара"
                      image="@/assets/catalog/oil.png"
                      brand="BREND"
                      inventoryId="L03412960404"
                      price="5841"
                    />
                  </article>
                </div>
              </template>
            </ProductSection>
          </div>

          <div class="col">
            <ProductSection title="Ремни" href="/catalog-choose/oil">
              <template #products>
                <div class="row g-3">
                  <article
                    v-for="item of list"
                    v-bind:key="item"
                    class="col-12 col-sm-6 col-md-4 col-xxl-3"
                  >
                    <ProductCard
                      productId="123"
                      productCategory="wheel"
                      title="Название товара"
                      image="@/assets/catalog/oil.png"
                      brand="BREND"
                      inventoryId="L03412960404"
                      price="5841"
                    />
                  </article>
                </div>
              </template>
            </ProductSection>
          </div>

          <div class="col">
            <ProductSection title="Аккумуляторы" href="/catalog-choose/oil">
              <template #products>
                <div class="row g-3">
                  <article
                    v-for="item of list"
                    v-bind:key="item"
                    class="col-12 col-sm-6 col-md-4 col-xxl-3"
                  >
                    <ProductCard
                      productId="123"
                      productCategory="wheel"
                      title="Название товара"
                      image="@/assets/catalog/oil.png"
                      brand="BREND"
                      inventoryId="L03412960404"
                      price="5841"
                    />
                  </article>
                </div>
              </template>
            </ProductSection>
          </div>

          <div class="col">
            <ProductSection title="Фильтры" href="/catalog-choose/oil">
              <template #products>
                <div class="row g-3">
                  <article
                    v-for="item of list"
                    v-bind:key="item"
                    class="col-12 col-sm-6 col-md-4 col-xxl-3"
                  >
                    <ProductCard
                      productId="123"
                      productCategory="wheel"
                      title="Название товара"
                      image="@/assets/catalog/oil.png"
                      brand="BREND"
                      inventoryId="L03412960404"
                      price="5841"
                    />
                  </article>
                </div>
              </template>
            </ProductSection>
          </div>

          <div class="col">
            <ProductSection title="Лампы" href="/catalog-choose/oil">
              <template #products>
                <div class="row g-3">
                  <article
                    v-for="item of list"
                    v-bind:key="item"
                    class="col-12 col-sm-6 col-md-4 col-xxl-3"
                  >
                    <ProductCard
                      productId="123"
                      productCategory="wheel"
                      title="Название товара"
                      image="@/assets/catalog/oil.png"
                      brand="BREND"
                      inventoryId="L03412960404"
                      price="5841"
                    />
                  </article>
                </div>
              </template>
            </ProductSection>
          </div>

          <div class="col">
            <ProductSection title="Промывки" href="/catalog-choose/oil">
              <template #products>
                <div class="row g-3">
                  <article
                    v-for="item of list"
                    v-bind:key="item"
                    class="col-12 col-sm-6 col-md-4 col-xxl-3"
                  >
                    <ProductCard
                      productId="123"
                      productCategory="wheel"
                      title="Название товара"
                      image="@/assets/catalog/oil.png"
                      brand="BREND"
                      inventoryId="L03412960404"
                      price="5841"
                    />
                  </article>
                </div>
              </template>
            </ProductSection>
          </div>
        </div>
      </div>
    </template>
  </CatalogLayout>
</template>
