<template>
  <ui-dialog-content class="p-5 stats-dialog">
    <div class="large bold text-center mb-4">Стастистика по заказам</div>

    <div class="stats-view">
      <article class="all row gx-0">
        <div class="small col-5">Все заказы</div>
        <div class="small col-1 text-center">8</div>
        <div class="small ms-auto col-auto">8000 ₽</div>
      </article>
      <article class="ordered row gx-0">
        <div class="small col-5">Заказано</div>
        <div class="small col-1 text-center">1</div>
        <div class="small ms-auto col-auto">1000 ₽</div>
      </article>
      <article class="in-work row gx-0">
        <div class="small col-5">В работе</div>
        <div class="small col-1 text-center">1</div>
        <div class="small ms-auto col-auto">1000 ₽</div>
      </article>
      <article class="sold row gx-0">
        <div class="small col-5">Выкуплено</div>
        <div class="small col-1 text-center">1</div>
        <div class="small ms-auto col-auto">1000 ₽</div>
      </article>
      <article class="progress row gx-0">
        <div class="small col-5">В пути</div>
        <div class="small col-1 text-center">1</div>
        <div class="small ms-auto col-auto">1000 ₽</div>
      </article>
      <article class="arrived row gx-0">
        <div class="small col-5">Пришло</div>
        <div class="small col-1 text-center">1</div>
        <div class="small ms-auto col-auto">1000 ₽</div>
      </article>
      <article class="reject row gx-0">
        <div class="small col-5">Отказ</div>
        <div class="small col-1 text-center">1</div>
        <div class="small ms-auto col-auto">1000 ₽</div>
      </article>
      <article class="completed row gx-0">
        <div class="small col-5">Выдано</div>
        <div class="small col-1 text-center">1</div>
        <div class="small ms-auto col-auto">1000 ₽</div>
      </article>
      <article class="returned row gx-0">
        <div class="small col-5">Возврат</div>
        <div class="small col-1 text-center">1</div>
        <div class="small ms-auto col-auto">1000 ₽</div>
      </article>
    </div>
  </ui-dialog-content>
</template>

<style scoped lang="scss">
@use "@/styles/vars";
.stats-view {
  & > article {
    padding: 10px 20px;
  }
  .all {
    background-color: white;
  }
  .ordered {
    background-color: vars.$statusOrdered;
  }
  .in-work {
    background-color: vars.$statusInWork;
  }
  .sold {
    background-color: vars.$statusSold;
  }
  .progress {
    background-color: vars.$statusProgress;
  }
  .arrived {
    background-color: vars.$statusArrived;
  }
  .reject {
    background-color: vars.$statusReject;
  }
  .completed {
    background-color: vars.$statusCompleted;
  }
  .returned {
    background-color: vars.$statusReturned;
  }
}
</style>
