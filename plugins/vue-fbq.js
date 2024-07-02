// vue-fbq.ts

import Vue from 'vue'
import VueLIC from '../local_modules/vue-fbq-main/src/index.esm'

/**
 * vue-fbq plugin
 */
const vueGtag = ({ app, $config }) => {
  // check env for FB_ENABLED
  if (!$config.fbEnabled) {
    return
  }
  if (process.client) {
    Vue.use(
      VueLIC,
      {
        config: {
          id: $config.fbId,
        },
        bootstrap: false, // no automatic bootstrapping
        enabled: true,
        appName: $config.appName,
      },
      app.router
    )
  }
}

export default vueGtag
