<template>
  <div class="main-header__wrapper">
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
  height: 80px
  // opacity: 0.7

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
