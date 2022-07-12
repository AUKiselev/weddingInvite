<template>
  <div class="main-header__wrapper">
    <p class="main-header__logo" @click="$router.push({ name: 'mainView' })">
      Максим и Зоя
    </p>
    <el-menu
      class="main-header__menu"
      mode="horizontal"
      :default-active="activePath()"
      :router="true"
    >
      <el-menu-item index="/">
        <template #title>
          <span>Главная</span>
        </template>
      </el-menu-item>

      <el-menu-item index="/contacts">
        <template #title>
          <span>Церемония</span>
        </template>
      </el-menu-item>

      <el-menu-item index="/dress-code">
        <template #title>
          <span>Дресс-код</span>
        </template>
      </el-menu-item>

      <el-menu-item index="/gallery">
        <template #title>
          <span>Фотокнига</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

const activePath = () => {
  return `/${route.path.slice(1)}`;
};
</script>

<style scoped lang="sass">
.main-header__wrapper
  position: relative
  height: 80px

.main-header__logo
  position: absolute
  top: 25px
  left: 20px
  z-index: 5
  cursor: pointer

  font-family: 'Exo2'
  line-height: 30px
  color: $white

  &:hover
    border-bottom: 4px solid $white

.el-menu
  padding: 0 30px 0 30px
  justify-content: end
  height: 80px
  background-color: $main-elements-color

.el-menu-item
  color: $white
  font-family: 'Exo2'
  font-size: $fz20
  font-weight: 800

  &:hover
    color: $white !important
    background-color: $main-elements-hover-color !important

  &.is-active
    color: $white !important
    border-bottom: 8px solid $border-color
    background-color: $main-elements-hover-color !important

    &:hover
      cursor: default
</style>
