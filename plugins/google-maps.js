import Vue from 'vue'
import * as VueGoogleMaps from '@/node_modules/vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: { key: 'AIzaSyAUdeAS12E77RuTv7eba0UJorPLvQfzRds' },
  // load: { key: process.env.GOOGLE_MAPS_API_KEY },
})
