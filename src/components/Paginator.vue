<template>
  <div class="paginator row align-items-center">
    <div class="col-auto"><ui-icon class="hint">chevron_left</ui-icon></div>
    <div class="paginator__item paginator__item--active">1</div>
    <div class="paginator__item">2</div>
    <div class="paginator__item">3</div>
    <div class="paginator__item">4</div>
    <div class="paginator__item">5</div>
    <div class="paginator__item paginator__item--dots">&TripleDot;</div>
    <div class="paginator__item">20</div>
    <div class="col-auto"><ui-icon class="hint">chevron_right</ui-icon></div>
  </div>
</template>

<style scoped lang="scss">
.paginator {
  &__item {
    width: 52px;
    height: 52px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: white;

    font-size: 14px;
    cursor: pointer;

    margin-left: 4px;
    margin-right: 4px;

    &--active {
      background-color: black;
      color: white;
    }

    &--dots {
      padding-top: 18px;
    }
  }
}
</style>
