<template>
  <section class="contacts-section view-section">
    <p class="headline-1">План мероприятия</p>
    <section class="contacts-section__content view-section__content">
      <div class="contacts-section__map">
        <l-map v-model="zoom" v-model:zoom="zoom" :center="CENTER_COORDS">
          <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          ></l-tile-layer>
          <l-control-layers />

          <l-marker :lat-lng="MARRIAGE_REGISTRY_COORDS">
            <l-popup> ЗАГС </l-popup>
          </l-marker>

          <l-marker :lat-lng="EVENT_HOUSE_COORDS">
            <l-popup> EVENT HOUSE </l-popup>
          </l-marker>
        </l-map>
      </div>

      <div class="contacts-section__text">
        <div class="contacts-section__text-section">
          <p class="contacts-section__text-title hedline-2">Загс</p>
          <p class="contacts-section__text-content">
            <span class="contacts-section__date">06.08.2022</span>
            <span class="contacts-section__address">
              Красный пр-т., 68, Новосибирск
            </span>
            <span class="contacts-section__text-event-time">
              15:50 - Официальная регистрация
            </span>
          </p>
        </div>

        <div class="contacts-section__text-section">
          <p class="contacts-section__text-title hedline-2">Event House</p>
          <p class="contacts-section__text-content">
            <span class="contacts-section__date">07.08.2022</span>
            <span class="contacts-section__address">
              ул. Фёдора Горячева, 50, Новосибирск
            </span>
            <span class="contacts-section__text-event-time">
              15:30 - Сбор гостей
            </span>
            <span class="contacts-section__text-event-time">
              16:00 - Выездная регистрация
            </span>
            <span class="contacts-section__text-event-time">
              17:00 - Банкет
            </span>
          </p>
        </div>
      </div>
    </section>
    <div class="contacts-section__footer">
      <p class="contacts-section__coordinator-info">
        Свадебный координатор - Виктория
        <a class="coordinator-info__phone" href="tel:+79139146097"
          >Тел.: 8(913)914-60-97
        </a>
      </p>
      <p class="contacts-section__coordinator-description">
        Виктория с радостью ответит на все вопросы, связанные с торжеством. Если
        вы подготовили для нас сюрприз или творческий подарок, не забудьте
        предупредить её. Виктория поможет воплотить вашу идею или отговорит вас
        :)
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useUiStore } from "@/stores/uiStore";

import "leaflet/dist/leaflet.css";
import {
  LMap,
  LMarker,
  LPopup,
  LControlLayers,
  LTileLayer,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
} from "@vue-leaflet/vue-leaflet";

const uiStore = useUiStore();

onMounted(() => {
  uiStore.setCurrentPage("contacts");
});

const zoom = ref(11);
const MARRIAGE_REGISTRY_COORDS: [number, number] = [55.0415773, 82.9180487];
const EVENT_HOUSE_COORDS: [number, number] = [54.9417913, 82.9967685];
const CENTER_COORDS: [number, number] = [54.9823, 82.9471];
</script>

<style scoped lang="sass">
.contacts-section__content
  padding: 0 20px
  justify-content: space-between
  width: 100%

  @media (max-width: 768px)
    flex-direction: column
    padding: 0 10px
    row-gap: 40px

.contacts-section__map
  height: 550px
  width: 550px

  @media (max-width: 768px)
    width: 100%
    height: 50vh

.contacts-section__text
  max-width: 600px
  display: flex
  flex-direction: column
  align-items: center

.contacts-section__text-section
  width: 100%

.contacts-section__text-section + *
  margin-top: 60px

  @media (max-width: 768px)
    margin-top: 40px

.contacts-section__text-title
  text-transform: uppercase

.contacts-section__text-content
  display: flex
  flex-direction: column
  align-items: start

.contacts-section__date
  align-self: center
  margin-bottom: 15px
  border-bottom: 2px solid $additional-element-color

.contacts-section__address
  align-self: center
  margin-bottom: 20px
  font-size: $fz24

.contacts-section__text-event-time
  text-align: left

.contacts-section__text-event-time + *
  margin-top: 20px

.overlay__marriage-registry
  color: red

.overlay__event-house
  color: orange

.contacts-section__footer
  margin-top: 40px
  max-width: 800px
  text-align: center

.contacts-section__coordinator-info
  margin-bottom: 20px

.coordinator-info__phone
  color: inherit
</style>

<style lang="sass">
.leaflet-control
  visibility: hidden
</style>
