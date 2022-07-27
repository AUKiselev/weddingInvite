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
          @click="copyText"
          >#KuznetsovsWedDay</span
        >
        это позволит нам насладиться фотографиями после торжества
      </p>
    </div>

    <section class="gallery__photos view-section__content">
      <p class="gallery__no-photos">
        Скоро здесь появятся фотографии с торжества!
      </p>
    </section>
  </section>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useUiStore } from "@/stores/uiStore";

const uiStore = useUiStore();

const hashTag = ref(null) as null | any;

onMounted(() => {
  uiStore.setCurrentPage("gallery");
});

const copyText = async () => {
  await navigator.clipboard.writeText(hashTag.value?.innerHTML);
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

.gallery__no-photos
  margin-top: 100px
</style>
