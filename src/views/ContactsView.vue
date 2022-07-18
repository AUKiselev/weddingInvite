<template>
  <section class="contacts-section view-section">
    <p class="headline-1">План мероприятия</p>
    <section class="contacts-section__content view-section__content">
      <ol-map
        class="contacts-section__map"
        :loadTilesWhileAnimating="true"
        :loadTilesWhileInteracting="true"
      >
        <ol-view
          ref="view"
          :center="center"
          :zoom="zoom"
          :projection="projection"
        />

        <ol-overlay :position="MARRIAGE_REGISTRY_COORDS">
          <div class="overlay__marriage-registry">
            <el-icon :size="36">
              <i-wedding-map-marker></i-wedding-map-marker>
            </el-icon>
          </div>
        </ol-overlay>

        <ol-overlay :position="EVENT_HOUSE_COORDS">
          <div class="overlay__event-house">
            <el-icon :size="36">
              <i-wedding-map-marker></i-wedding-map-marker>
            </el-icon>
          </div>
        </ol-overlay>

        <ol-tile-layer>
          <ol-source-osm />
        </ol-tile-layer>
      </ol-map>

      <div class="contacts-section__text">
        <div class="contacts-section__text-section">
          <p class="contacts-section__text-title hedline-2">Загс</p>
          <p class="contacts-section__text-content">
            <span class="contacts-section__address">
              Красный пр-т., 68, Новосибирск 06.08.2022
            </span>
            <span class="contacts-section__text-event-time">
              15:50 - Официальная регистрация
            </span>
          </p>
        </div>

        <div class="contacts-section__text-section">
          <p class="contacts-section__text-title hedline-2">Event House</p>
          <p class="contacts-section__text-content">
            <span class="contacts-section__address">
              ул. Фёдора Горячева, 50, Новосибирск 07.08.2022
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

const uiStore = useUiStore();

onMounted(() => {
  uiStore.setCurrentPage("contacts");
});

const MARRIAGE_REGISTRY_COORDS: [number, number] = [
  82.91796291705104, 55.04158211411867,
];
const EVENT_HOUSE_COORDS: [number, number] = [
  82.99700045320589, 54.9418338964205,
];
const CENTER_COORDS: [number, number] = [82.96590992891586, 54.97615294416755];

const center = ref(CENTER_COORDS);
const zoom = ref(12);
const projection = ref("EPSG:4326");
</script>

<style scoped lang="sass">
.contacts-section__content
  padding: 0 20px
  justify-content: space-between
  width: 100%

.contacts-section__map
  min-height: 550px
  min-width: 550px

.contacts-section__text
  max-width: 600px
  display: flex
  flex-direction: column
  align-items: center

.contacts-section__text-section + *
  margin-top: 80px

.contacts-section__text-title
  text-transform: uppercase

.contacts-section__text-content
  display: flex
  flex-direction: column
  align-items: start

.contacts-section__address
  margin-bottom: 20px
  font-size: $fz24

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
