<template>
  <section class="dress-code-section">
    <p class="headline-1">Дресс-код</p>
    <div class="dress-code-section__content">
      <p class="dress-code-section__text">
        Мы очень ждем и с удовольствием готовимся к нашему незабываемому дню!
        Поддержите нас вашими улыбками и объятиями, а также красивыми нарядами в
        палитре торжества. (Соблюдение дресс-кода желательно, но не обязательно)
      </p>

      <div class="dress-code-section__palette">
        <div class="palette-color color-1"></div>
        <div class="palette-color color-2"></div>
        <div class="palette-color color-3"></div>
        <div class="palette-color color-4"></div>
        <div class="palette-color color-5"></div>
        <div class="palette-color color-6"></div>
      </div>

      <p class="dress-code-section__text">
        Захватите с собой удобную обувь для танцев!
        <span class="text__decoration-heart">♡</span>
        Обратите внимание! После официальной части празднование перейдет в зону
        с бассейном и сауной, не забудьте взять купальники и сланцы! Полотенца
        предоставит площадка.
      </p>

      <div class="dress-code-section__footer">
        <el-icon :size="200">
          <i-wedding-swimsuit></i-wedding-swimsuit>
        </el-icon>
        <el-icon :size="200">
          <i-wedding-swimsuit_pants></i-wedding-swimsuit_pants>
        </el-icon>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
.dress-code-section
  display: flex
  flex-direction: column
  align-items: center

  font-weight: 400
  font-style: italic

  & + *
    margin-top: 90px

.dress-code-section__content
  display: flex
  flex-direction: column
  text-align: center
  max-width: 900px

  font-size: $fz36

.dress-code-section__text
  display: flex
  flex-direction: column
  text-align: center

.dress-code-section__palette
  margin: 60px 0
  display: flex
  justify-content: space-around

.palette-color
  height: 80px
  width: 80px

  &.color-1
    background-color: $border-color
  &.color-2
    background-color: $color-2
  &.color-3
    background-color: $color-3
  &.color-4
    background-color: $additional-element-color
  &.color-5
    background-color: $color-5
  &.color-6
    background-color: $color-6

.dress-code-section__footer
  margin-top: 50px
</style>
