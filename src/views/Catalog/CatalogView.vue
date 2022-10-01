<script setup lang="ts">
import CatalogLayout from "../../components/Layout/CatalogLayout.vue";
import CategoryButton from "../../components/Catalog/CategoryButton.vue";
import ProductCard from "../../components/Catalog/ProductCard.vue";
import ProductSection from "../../components/Catalog/ProductSection.vue";

const list = [1, 2, 3, 4];
</script>

<template>
  <CatalogLayout>
    <template #aside>
      <div :class="$tt('headline2')" class="mb-4">Каталог</div>
      <div>
        <CategoryButton href="/catalog/popular" caption="Популярные товары" />
        <CategoryButton caption="Масла">
          <template #subCategory>
            <p :class="$tt('body1')">
              Масла – незаменимые средства для работы машинной техники. Машинное
              масло необходимо для выполнения множества самых разнообразных
              функций.
            </p>
            <div class="row g-5">
              <div class="col-12 col-lg-4">
                <div class="row flex-column g-3">
                  <RouterLink class="clear" to="/catalog-choose/oil-winter">
                    <div :class="$tt('headline3')">Зимние масла</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/oil-SAE-0W">
                    <div :class="$tt('body1')">SAE-0W</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/oil-SAE-5W">
                    <div :class="$tt('body1')">SAE-5W</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/oil-SAE-10W">
                    <div :class="$tt('body1')">SAE-10W</div>
                  </RouterLink>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="row flex-column g-3">
                  <RouterLink class="clear" to="/catalog-choose/oil-summer">
                    <div :class="$tt('headline3')">Летние масла</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/oil-SAE-30">
                    <div :class="$tt('body1')">SAE-30</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/oil-SAE-40">
                    <div :class="$tt('body1')">SAE-40</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/oil-SAE-50">
                    <div :class="$tt('body1')">SAE-50</div>
                  </RouterLink>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="row flex-column g-3">
                  <RouterLink class="clear" to="/catalog-choose/oil-all-season">
                    <div :class="$tt('headline3')">Всесезонные масла</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/oil-SAE-5W-40">
                    <div :class="$tt('body1')">SAE-5W-40</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/oil-SAE-5W-30">
                    <div :class="$tt('body1')">SAE-5W-30</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/oil-SAE-10W-30">
                    <div :class="$tt('body1')">SAE-10W-30</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/oil-SAE-10W-40">
                    <div :class="$tt('body1')">SAE-10W-40</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/oil-SAE-15W-40">
                    <div :class="$tt('body1')">SAE-15W-40</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/oil-SAE-20W-50">
                    <div :class="$tt('body1')">SAE-20W-50</div>
                  </RouterLink>
                </div>
              </div>
            </div>
          </template>
        </CategoryButton>
        <CategoryButton caption="Шины">
          <template #subCategory>
            <div class="row g-5">
              <div class="col-12 col-lg-4">
                <div class="row flex-column g-3">
                  <RouterLink class="clear" to="/catalog-choose/wheels">
                    <div :class="$tt('headline3')">Шины</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-passengers">
                    <div :class="$tt('body1')">Шины легковые</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div :class="$tt('body1')">Шины грузовые</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-industrial">
                    <div :class="$tt('body1')">Шины индустриальные</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-farm">
                    <div :class="$tt('body1')">Шины сельскохозяйственные</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-quadro">
                    <div :class="$tt('body1')">Шины квадро</div>
                  </RouterLink>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="row flex-column g-3">
                  <RouterLink class="clear" to="/catalog-choose/wheels">
                    <div :class="$tt('headline3')">
                      Аксессуары для шин и дисков
                    </div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-passengers">
                    <div :class="$tt('body1')">Колпаки на колеса</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div :class="$tt('body1')">Колпачки ниппелей</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div :class="$tt('body1')">Колпачки ступицы</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div :class="$tt('body1')">Кольца центровочные</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div :class="$tt('body1')">Крышки ступиц декоративные</div>
                  </RouterLink>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="row flex-column g-3">
                  <RouterLink class="clear" to="/catalog-choose/wheels">
                    <div :class="$tt('headline3')">Ремонт шин</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-passengers">
                    <div :class="$tt('body1')">
                      Аварийный герметик для колес
                    </div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div :class="$tt('body1')">Герметики для шин</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div :class="$tt('body1')">Грибок для ремонта шин</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div :class="$tt('body1')">Жгуты для ремонта шин</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div :class="$tt('body1')">Жидкая резина</div>
                  </RouterLink>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="row flex-column g-3">
                  <RouterLink class="clear" to="/catalog-choose/wheels">
                    <div :class="$tt('headline3')">
                      Автохимия для шин и дисков
                    </div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-passengers">
                    <div :class="$tt('body1')">Автохимия для шин и дисков</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div :class="$tt('body1')">Герметики для шин</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div :class="$tt('body1')">
                      Защитные покрытия для шин и дисков
                    </div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div :class="$tt('body1')">Кондиционер</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div :class="$tt('body1')">Консерватор</div>
                  </RouterLink>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="row flex-column g-3">
                  <RouterLink class="clear" to="/catalog-choose/wheels">
                    <div :class="$tt('headline3')">Болты, гайки, секретики</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-passengers">
                    <div :class="$tt('body1')">Болты колесные</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div :class="$tt('body1')">Гайки колесные</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div :class="$tt('body1')">Болты секретики</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div :class="$tt('body1')">Гайки секретики</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div :class="$tt('body1')">Вентили для шин</div>
                  </RouterLink>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="row flex-column g-3">
                  <RouterLink class="clear" to="/catalog-choose/wheels">
                    <div :class="$tt('headline3')">Шиномонтаж</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-passengers">
                    <div :class="$tt('body1')">Вентили для бескамерных шин</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div :class="$tt('body1')">Грузики</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div :class="$tt('body1')">Домкраты</div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div :class="$tt('body1')">
                      Инструмент для вентилей бескамерных шин
                    </div>
                  </RouterLink>
                  <RouterLink class="clear" to="/catalog/wheels-truck">
                    <div :class="$tt('body1')">Карандаши и мел для шин</div>
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
        <div class="row flex-column g-4">
          <div class="col">
            <ProductSection title="Масло" href="/catalog/oil-SAE-0W">
              <template #products>
                <div class="row g-3">
                  <article
                    v-for="item of list"
                    v-bind:key="item"
                    class="col-12 col-sm-6 col-md-4 col-xxl-3"
                  >
                    <ProductCard
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
            <ProductSection title="Шины" href="/catalog/oil-SAE-0W">
              <template #products>
                <div class="row g-3">
                  <article
                    v-for="item of list"
                    v-bind:key="item"
                    class="col-12 col-sm-6 col-md-4 col-xxl-3"
                  >
                    <ProductCard
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
            <ProductSection title="Диски" href="/catalog/oil-SAE-0W">
              <template #products>
                <div class="row g-3">
                  <article
                    v-for="item of list"
                    v-bind:key="item"
                    class="col-12 col-sm-6 col-md-4 col-xxl-3"
                  >
                    <ProductCard
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
            <ProductSection title="Колодки" href="/catalog/oil-SAE-0W">
              <template #products>
                <div class="row g-3">
                  <article
                    v-for="item of list"
                    v-bind:key="item"
                    class="col-12 col-sm-6 col-md-4 col-xxl-3"
                  >
                    <ProductCard
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
            <ProductSection title="Ремни" href="/catalog/oil-SAE-0W">
              <template #products>
                <div class="row g-3">
                  <article
                    v-for="item of list"
                    v-bind:key="item"
                    class="col-12 col-sm-6 col-md-4 col-xxl-3"
                  >
                    <ProductCard
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
            <ProductSection title="Аккумуляторы" href="/catalog/oil-SAE-0W">
              <template #products>
                <div class="row g-3">
                  <article
                    v-for="item of list"
                    v-bind:key="item"
                    class="col-12 col-sm-6 col-md-4 col-xxl-3"
                  >
                    <ProductCard
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
            <ProductSection title="Фильтры" href="/catalog/oil-SAE-0W">
              <template #products>
                <div class="row g-3">
                  <article
                    v-for="item of list"
                    v-bind:key="item"
                    class="col-12 col-sm-6 col-md-4 col-xxl-3"
                  >
                    <ProductCard
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
            <ProductSection title="Лампы" href="/catalog/oil-SAE-0W">
              <template #products>
                <div class="row g-3">
                  <article
                    v-for="item of list"
                    v-bind:key="item"
                    class="col-12 col-sm-6 col-md-4 col-xxl-3"
                  >
                    <ProductCard
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
            <ProductSection title="Промывки" href="/catalog/oil-SAE-0W">
              <template #products>
                <div class="row g-3">
                  <article
                    v-for="item of list"
                    v-bind:key="item"
                    class="col-12 col-sm-6 col-md-4 col-xxl-3"
                  >
                    <ProductCard
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
