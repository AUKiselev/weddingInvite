<template>
  <div class="main-page__wrapper">
    <section class="main-page__invite-block">
      <p class="main-page__guests-names">Имя гостя</p>
      <p class="main-page__invite-text">Текст приглашения</p>
    </section>

    <section class="main-page__invite-block">
      <p class="invite-block__title">А ты придешь на свадьбу, дружок?</p>
      <el-radio-group v-model="inviteForm" class="ml-4">
        <el-radio label="yes" size="large">Да</el-radio>
        <el-radio label="no" size="large">Нет</el-radio>
      </el-radio-group>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const inviteForm = ref("");
</script>
