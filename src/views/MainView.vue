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
    <el-form :model="submitForm">
      <div class="invite-form-block__choice">
        <el-form-item>
          <el-radio-group v-model="submitForm.presence">
            <el-radio :label="true">Обязательно приду!</el-radio>
            <el-radio :label="false">К сожалению, не смогу быть :(</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <el-radio-group v-model="submitForm.withSomeone">
            <el-radio :label="false">Буду один/одна</el-radio>
            <el-radio :label="true">Буду с парой</el-radio>
          </el-radio-group>
        </el-form-item>
      </div>

      <el-form-item class="invite-form-block__submit">
        <el-button>Отправить</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script setup lang="ts">
import { reactive, onMounted, computed } from "vue";
import { useUiStore } from "@/stores/uiStore";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";

const uiStore = useUiStore();

const userStore = useUserStore();

const { userName } = storeToRefs(userStore)

onMounted(() => {
  uiStore.setCurrentPage("main-page");
  userStore.setCurrentUser();
});

const submitForm = reactive({
  presence: true,
  withSomeone: undefined,
});
</script>

<style lang="sass">
.main-page-section__content
  flex-direction: column
  max-width: 900px

.el-form
  min-width: 900px

  @media (max-width: 768px)
    min-width: 100%
    width: 100%

.invite-form-block__choice
  display: flex
  flex-direction: column
  row-gap: 30px

  @media (max-width: 768px)
    margin: 0 0 0 50%
    transform: translate(-50%)
    align-items: start

.el-form-item__content
  justify-content: space-around

.el-radio-group
  column-gap: 20px

  @media (max-width: 768px)
    flex-direction: column
    align-items: start

.el-radio__label
  font-size: $fz24
  color: $additional-element-color

.el-radio__input.is-checked+.el-radio__label
  color: $additional-element-color

.invite-form-block__submit
  margin-top: 40px

.el-button
  padding: 20px
  color: $additional-element-color
  background-color: rgba(255, 255, 255, 0)

  font-size: $fz20
  font-weight: 600
  text-transform: uppercase
  letter-spacing: 1px
  border: 3px solid $additional-element-color
  transition: all .3s

  &:hover, &:focus
    color: $additional-element-color
    background-color: $main-elements-hover-color
    border-color: $border-color
</style>
