<template>
  <el-container class="main-container" :class="currentPage">
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
import { onMounted } from "vue";
import MainHeader from "@/components/MainHeader.vue";
import { useUiStore } from "@/stores/uiStore";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
onMounted(() => {
  userStore.setCurrentUser();
});

const uiStore = useUiStore();
const { currentPage } = storeToRefs(uiStore);
</script>

<style scoped lang="sass">
.main-container
  width: 100%
.main-page
  background: $main-bg-color url(@/assets/img/main-page-bg.jpg) no-repeat fixed top
  background-size: 100%

  @media (max-width: 768px)
    background: $main-bg-color url(@/assets/img/main-page-phone-bg.jpg) no-repeat fixed top
.contacts
  background: $main-bg-color url(@/assets/img/contacts-bg.jpg) no-repeat fixed top
  background-size: 100%
.dress-code
  background: $main-bg-color url(@/assets/img/dress-code-bg.jpg) no-repeat fixed top
  background-size: 100%
.gallery
  background: $main-bg-color url(@/assets/img/gallery-bg.jpg) no-repeat fixed top
  background-size: 100%

.main-header__container
  padding: 0

.main-content__container
  width: 100%
  padding: 70px

  @media (max-width: 768px)
    padding: 20px

.main-content__wrapper
  padding: 40px 0
  color: $additional-element-color
  background-color: rgba(0, 0, 0, 0.5)

  @media (max-width: 768px)
    padding: 20px
</style>
