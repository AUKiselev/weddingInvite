<template>
  <section class="view-section">
    <p class="headline-1">Фотокнига</p>
    <div class="view-section__content">
      <p class="gallery__block-description">
        Для публикации фотографий с нашей свадьбы воспользуйтесь хэштегом
        <span
          id="photos__hashtag"
          class="photos__hashtag"
          ref="hashTag"
          @click="copyText(), showCopyAcception()"
          >#KuznetsovsWedDay</span
        >
        это позволит нам насладиться фотографиями после торжества
      </p>
    </div>

    <section class="gallery__photos view-section__content">
      <a
        href="https://cloud.mail.ru/public/QbJy/f9pqQ4X9C"
        class="photos-link"
        target="_blank"
        >Фотографии с банкета</a
      >
      <a
        href="https://cloud.mail.ru/public/wcTz/if3oqYNiw"
        class="photos-link"
        target="_blank"
        >Фотографии с церемонии</a
      >
    </section>

    <p
      class="copy-acceprion"
      :class="{ 'show-acception': isShowCopyAcception }"
    >
      Хэштег скопирован
    </p>
  </section>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useUiStore } from "@/stores/uiStore";

const uiStore = useUiStore();

const hashTag = ref(null);
const isShowCopyAcception = ref(false);

onMounted(() => {
  uiStore.setCurrentPage("gallery");
});

const copyText = async () => {
  if (navigator.clipboard && window.isSecureContext) {
    return await navigator.clipboard.writeText(hashTag.value?.innerHTML);
  } else {
    const textArea = document.createElement("textarea");
    textArea.value = hashTag.value?.innerHTML;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
  }
};

const showCopyAcception = () => {
  if (!isShowCopyAcception.value) {
    isShowCopyAcception.value = !isShowCopyAcception.value;
    setTimeout(() => {
      isShowCopyAcception.value = !isShowCopyAcception.value;
    }, 1500);
  }
};
</script>

<style scoped lang="sass">
.gallery
  height: 100vh
.gallery__block-description
  font-size: $fz30

.photos__hashtag
  font-size: $fz32
  color: $main-elements-color
  cursor: pointer

.gallery__photos
  display: flex
  flex-direction: column
  margin-top: 50px

.photos-link
  padding: 15px 30px
  color: $main-elements-hover-color
  background-color: $additional-element-color
  border-radius: 10px
  text-decoration: none

  &:hover
    color: $border-color
    text-decoration: underline

.photos-link + .photos-link
  margin-top: 40px

.copy-acceprion
  visibility: hidden
  opacity: 0
  position: absolute
  bottom: 40px
  padding: 15px 30px
  background-color: rgba(185, 158, 163, .5)
  border-radius: 8px
  transition: opacity .3s

  &.show-acception
    visibility: visible
    opacity: 1
</style>
