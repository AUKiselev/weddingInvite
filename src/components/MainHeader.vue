<template>
  <div class="main-header__wrapper">
    <p class="main-header__logo">Максим и Зоя</p>
    <el-menu
      class="main-header__menu"
      mode="horizontal"
      :default-active="activePath()"
      :router="true"
      :ellipsis="false"
    >
      <el-menu-item
        index="/"
        :route="{ name: 'mainView', params: { user: userStore.currentUser } }"
      >
        <template #title>
          <span>Главная</span>
        </template>
      </el-menu-item>

      <el-menu-item
        index="/contacts"
        :route="{ name: 'contacts', params: { user: userStore.currentUser } }"
      >
        <template #title>
          <span>Церемония</span>
        </template>
      </el-menu-item>

      <el-menu-item
        index="/dress-code"
        :route="{ name: 'dress-code', params: { user: userStore.currentUser } }"
      >
        <template #title>
          <span>Дресс-код</span>
        </template>
      </el-menu-item>

      <el-menu-item
        index="/gallery"
        :route="{ name: 'gallery', params: { user: userStore.currentUser } }"
      >
        <template #title>
          <span>Фотокнига</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

const route = useRoute();

const activePath = () => {
  if (
    route.path.slice(1).includes("contacts") ||
    route.path.slice(1).includes("dress-code") ||
    route.path.slice(1).includes("gallery")
  ) {
    return userStore.currentUser
      ? `${route.path.slice(0, route.path.lastIndexOf("/"))}`
      : `${route.path}`;
  }

  return "/";
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

  font-family: 'Exo2'
  line-height: 30px
  color: $white

  @media (max-width: 768px)
    display: none

.main-header__menu
  border: none
.el-menu
  padding: 0 30px
  justify-content: end
  height: 80px
  background-color: $main-elements-color

  @media (max-width: 768px)
    padding: 0
    width: 100%
    justify-content: center
    height: 60px

.el-menu-item
  color: $white
  font-family: 'Exo2'
  font-size: $fz20
  font-weight: 800

  &:hover, &:focus
    color: $white !important
    background-color: $main-elements-hover-color !important

  &.is-active
    color: $white !important
    border-bottom: 8px solid $border-color
    background-color: $main-elements-hover-color !important

    &:hover
      cursor: default

  @media (max-width: 768px)
    padding: 10px
</style>
