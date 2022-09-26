<script setup lang="ts">
import NewsSide from "../components/News/NewsSide.vue";
import NewsCover from "../components/News/NewsCover.vue";
</script>

<template>
  <main>
    <section id="news" class="py-5">
      <div class="container light">
        <div class="row g-3 mb-5">
          <div class="col-12 col-lg-6">
            <NewsSide :link="'/news'" :image="'./assets/news/preview-side.jpg'">
              <template v-slot:caption>
                <div>Скидки для&nbsp;новых клиентов!</div>
              </template>
            </NewsSide>
          </div>
          <div class="col-12 col-lg-6">
            <NewsCover
              :link="'/news'"
              :image="'./assets/news/preview-full.jpg'"
            >
              <template v-slot:caption>
                <div>Otto&nbsp;Zimermann</div>
                <div style="font-size: 60px; line-height: 140%">-20%</div>
              </template>
            </NewsCover>
          </div>
        </div>
        <div id="lead-message" class="mb-5">
          <div :class="$tt('body1')">
            При оплате заказа банковской картой, обработка платежа (включая ввод
            номера карты) происходит на защищенной странице процессинговой
            системы, которая прошла международную сертификацию. Это значит, что
            Ваши конфиденциальные данные (реквизиты карты, регистрационные
            данные и др.) не поступают в интернет-магазин, их обработка
            полностью защищена и никто, в том числе наш интернет-магазин, не
            может получить персональные и банковские данные клиента.
          </div>
        </div>
        <div id="stats" class="mb-5">
          <div class="row gy-2">
            <div class="col-12 col-lg">
              <div :class="$tt('body1')">
                Сейчас на&nbsp;сайте: 83&nbsp;клиента
              </div>
            </div>
            <div class="col-12 col-lg">
              <div :class="$tt('body1')">
                Оформленно заказов за&nbsp;сутки: 571&nbsp;заказа
              </div>
            </div>
            <div class="col-12 col-lg">
              <div :class="$tt('body1')">
                Всего заказов на&nbsp;сумму: 381&nbsp;094&nbsp;руб.
              </div>
            </div>
            <div class="col-12 col-lg">
              <div :class="$tt('body1')">
                Новых регистраций за&nbsp;сутки:&nbsp;72
              </div>
            </div>
            <div class="col-12 col-lg">
              <div :class="$tt('body1')">
                Выполено заказов за&nbsp;сутки:&nbsp;104
              </div>
            </div>
          </div>
        </div>
        <div id="brands"></div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
section#news {
  background: linear-gradient(0deg, #000000 19.27%, #012b51 100%);
}

#lead-message {
  background-color: rgba($color: white, $alpha: 0.1);
  padding: 1.75rem;
}

#stats {
  padding: 2rem;
  border: 1px solid rgba($color: white, $alpha: 0.4);
}
</style>
