<template>
  <section class="dress-code-section view-section">
    <p class="headline-1">Дресс-код</p>
    <div class="dress-code-section__content view-section__content">
      <p class="dress-code-section__text">
        Мы очень ждем и с удовольствием готовимся к нашему незабываемому дню!
        Поддержите нас вашими улыбками и объятиями, а также красивыми нарядами в
        палитре торжества.
      </p>

      <div class="dress-code-section__palette">
        <div class="palette-color color-1">
          <el-icon class="palette__icon-wrapper">
            <i-wedding-heart></i-wedding-heart>
          </el-icon>
        </div>
        <div class="palette-color color-2">
          <el-icon class="palette__icon-wrapper">
            <i-wedding-heart></i-wedding-heart>
          </el-icon>
        </div>
        <div class="palette-color color-3">
          <el-icon class="palette__icon-wrapper">
            <i-wedding-heart></i-wedding-heart>
          </el-icon>
        </div>
        <div class="palette-color color-4">
          <el-icon class="palette__icon-wrapper">
            <i-wedding-heart></i-wedding-heart>
          </el-icon>
        </div>
        <div class="palette-color color-5">
          <el-icon class="palette__icon-wrapper">
            <i-wedding-heart></i-wedding-heart>
          </el-icon>
        </div>
        <div class="palette-color color-6">
          <el-icon class="palette__icon-wrapper">
            <i-wedding-heart></i-wedding-heart>
          </el-icon>
        </div>
      </div>

      <p class="dress-code-section__text">
        Захватите с собой удобную обувь для танцев!
        <span class="text__decoration-heart">♡</span>
        Обратите внимание! После официальной части празднование перейдет в зону
        с бассейном и сауной, не забудьте взять купальники и сланцы! Полотенца
        предоставит площадка.
      </p>

      <div class="dress-code-section__footer">
        <el-icon class="wedding-icon__wrapper">
          <i-wedding-swimsuit></i-wedding-swimsuit>
        </el-icon>
        <el-icon class="wedding-icon__wrapper">
          <i-wedding-swimsuit_pants></i-wedding-swimsuit_pants>
        </el-icon>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useUiStore } from "@/stores/uiStore";

const uiStore = useUiStore();

onMounted(() => {
  uiStore.setCurrentPage("dress-code");
});
</script>

<style scoped lang="sass">
.dress-code-section__content
  flex-direction: column
  max-width: 900px

  @media (max-width: 768px)
    min-width: 100%
    width: 100%

.dress-code-section__text
  display: flex
  flex-direction: column
  text-align: center

.dress-code-section__palette
  max-width: 700px
  margin: 60px 100px
  display: flex
  justify-content: space-around

.palette__icon-wrapper
  font-size: 80px

  @media (max-width: 768px)
    font-size: 50px

.palette-color
  height: 80px
  width: 80px

  &.color-1
    color: $border-color
  &.color-2
    color: $color-2
  &.color-3
    color: $color-3
  &.color-4
    color: $additional-element-color
  &.color-5
    color: $color-5
  &.color-6
    color: $color-6

.dress-code-section__footer
  margin-top: 50px

.wedding-icon__wrapper
  font-size: 200px

  @media (max-width: 768px)
    font-size: 100px
</style>
