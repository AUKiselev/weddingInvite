<template>
  <section class="main-page-section view-section">
    <p class="headline-1">{{ userName }}!</p>
    <p class="main-page-section__content view-section__content">
      В нашей жизни есть счастливые и радостные моменты, которые хочется
      разделить с дорогими людьми. Ваша поддержка, понимание, любовь и дружба
      всегда были важны для нас. Поэтому мы приглашаем вас открыть вместе с нами
      новую страницу книги нашей жизни! Мы будем искренне рады разделить этот
      день вместе с вами.
      <span class="text__decoration-heart">♡</span>
      <span class="invite-text__date">7 августа 2022 г. в 15:30</span>
    </p>
  </section>

  <section class="main-page-section view-section">
    <p class="headline-1">Подарки</p>
    <p class="main-page-section__content view-section__content">
      Мы поощряем ваше творчество, поэтому будем рады вашему творческому подходу
      к поздравлению. Но мы будем также признательны, если вы поможете нам
      осуществить мечту о путешествии, подарив ваши пожелания в конверте.

      <span class="text__decoration-heart">♡</span>

      Приятным комплиментом для нас будет, если вместо цветов вы решите подарить
      нам бутылочку вина для нашей семейной винотеки.
    </p>
  </section>

  <section class="main-page__invite-form-block main-page-section view-section">
    <p class="headline-1">Подтвердите присутствие</p>
    <p class="main-page-section__content view-section__content">
      Убедительная просьба, если по каким-то причинам вы не сможете
      присутствовать на нашем празднике, сообщить об этом до 30 июля!
    </p>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useUiStore } from "@/stores/uiStore";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";

const uiStore = useUiStore();

const userStore = useUserStore();

const { userName } = storeToRefs(userStore);

onMounted(() => {
  uiStore.setCurrentPage("main-page");
});
</script>

<style lang="sass">
.main-page-section__content
  flex-direction: column
  max-width: 900px
</style>
