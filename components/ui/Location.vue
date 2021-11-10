<template>
  <div class="map-container">
    <div class="map-header">
      <Logo class="logo" />
      <div class="map-header-location">
        <span
          >Gewerbegebiet 33 \ Zona produttiva \ 39053 Kardaun - Cardano</span
        >
      </div>
    </div>
    <section class="map-ct">
      <gmap-map
        :center="map.center"
        :map-type-id="map.mapTypeId"
        :zoom="16"
        class="g-map"
      >
        <gmap-marker
          v-for="(marker, index) in mapMarkers"
          :key="index"
          :position="marker.position"
          @click="showPlace(marker.link)"
        />
      </gmap-map>
    </section>
  </div>
</template>

<script>
import Logo from '@/assets/image/Logo_Prolas.svg'

export default {
  components: { Logo },
  data() {
    return {
      map: {
        center: {
          lat: 46.4918663,
          lng: 11.4007175,
        },
        mapTypeId: 'roadmap',
      },
      mapMarkers: [
        {
          name: 'Prolas',
          link: 'https://www.google.com/maps/place/Prolas/@46.4918663,11.4007175,15z/data=!4m5!3m4!1s0x0:0x66b6a63d21715d4b!8m2!3d46.4918663!4d11.4007175',
          position: {
            lat: 46.4918663,
            lng: 11.4007175,
          },
        },
      ],
    }
  },
  methods: {
    showPlace(url) {
      const win = window.open(url)
      win.focus()
    },
  },
}
</script>

<style lang="postcss" scoped>
.map-container {
  @apply w-full z-10 px-2;
}
.map-header {
  @apply flex justify-between flex-wrap;

  & > .logo {
    max-width: 250px;
  }

  & > .map-header-location {
    @apply flex items-center text-primary text-lg;
  }
}

.map-ct {
  @apply bg-gray-400;

  height: 800px;

  & .g-map {
    @apply w-full h-full;

    & .vue-map {
      @apply h-full;
    }
  }
}
</style>
