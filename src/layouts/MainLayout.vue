<template>
  <el-container class="main-container">
    <el-header class="main-header__container" height="80px">
      <MainHeader />
    </el-header>
    <el-main class="main-content__container">
      <div class="main-content__wrapper">
        <RouterView />
      </div>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import MainHeader from "@/components/MainHeader.vue";
</script>

<style scoped lang="sass">
.main-container
  background: $main-bg-color url(@/assets/img/main-page-bg.jpg) no-repeat fixed top
  background-size: 100%

.main-header__container
  padding: 0

.main-content__container
  padding: 70px

.main-content__wrapper
  padding: 40px 0
  color: $additional-element-color
  background-color: rgba(0, 0, 0, 0.5)
</style>
