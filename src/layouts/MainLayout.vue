<template>
  <el-container>
    <el-header class="main-header__container" height="80px">
      <MainHeader />
    </el-header>
    <el-main>
      <RouterView />
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import MainHeader from "@/components/MainHeader.vue";
</script>

<style scoped lang="sass">
.main-header__container
  padding: 0
</style>
