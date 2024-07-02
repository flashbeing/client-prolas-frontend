<template>
  <div class="cookie-banner-ct">
    <div class="cookie-banner" :class="{ 'not-visible': hideBanner }">
      <div class="cookie-text-ct">
        <h2 class="cookie-title">{{ $t('footer.cookieTitle') }}</h2>
        <p class="cookie-description">
          {{ $t('footer.cookieDescription') }}
          <NuxtLink to="/privacy" class="cookie-policy">Cookie Policy</NuxtLink>
        </p>
      </div>
      <div class="cookie-grant">
        <Checkbox :checked="pixel" @change="updatePixel" />
        <p>Meta's Pixel</p>
      </div>
      <div class="cookie-btn-ct">
        <Button
          class="cookie-btn"
          type="secondary"
          :value="$t('footer.cookieDeclineAll')"
          @click="declineAll"
        />
        <Button
          class="cookie-btn"
          :value="$t('footer.cookieAccept')"
          @click="accept"
        />
      </div>
    </div>

    <Cookie
      class="open-banner"
      :class="{ 'not-visible': !hideBanner }"
      @click="updateHideBanner(!hideBanner)"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import Cookie from '@/assets/icon/cookie.svg'
import { bootstrap as loadFbq } from '../../local_modules/vue-fbq-main/src/index.esm'

export default {
  components: {
    Cookie,
  },
  data() {
    return {
      pixel: true,
      hideBanner: true,
    }
  },
  created() {
    if (localStorage.getItem('pixel-accepted') === 'true') {
      this.pixel = true
      this.opInCookie()
    } else if (localStorage.getItem('pixel-accepted') === 'false') {
      this.pixel = false
    }

    if (localStorage.getItem('banner-visible') === 'true') {
      this.hideBanner = false
    } else if (localStorage.getItem('banner-visible') === 'false') {
      this.hideBanner = true
    } else {
      this.hideBanner = false
    }
  },
  methods: {
    updatePixel(value) {
      this.pixel = value
      localStorage.setItem('pixel-accepted', JSON.stringify(this.pixel))
    },
    updateHideBanner(value) {
      this.hideBanner = value
    },
    accept() {
      this.hideBanner = true
      localStorage.setItem('pixel-accepted', JSON.stringify(this.pixel))
      localStorage.setItem('banner-visible', 'false')
      if (this.pixel) {
        this.opInCookie()
      }
    },
    declineAll() {
      this.hideBanner = true
      this.pixel = false
      localStorage.setItem('pixel-accepted', 'false')
      localStorage.setItem('banner-visible', 'false')
    },
    opInCookie() {
      loadFbq().then(() => {
        Vue.$fbq.optIn()
      })
    },
  },
}
</script>

<style lang="postcss" scoped>
.cookie-banner-ct {
  @apply fixed bottom-5 right-5;

  z-index: 999;

  & .cookie-banner {
    @apply bg-white rounded-lg px-10 py-10 text-black flex flex-col gap-7;

    box-shadow: 0 5px 24px 5px rgba(0, 0, 0, 0.25);

    &.not-visible {
      @apply hidden;
    }

    & .cookie-text-ct {
      @apply flex flex-col gap-3;

      max-width: 400px;

      & .cookie-title {
        @apply text-lg font-semibold;
      }

      & .cookie-description {
        @apply text-sm;
      }
    }

    & .cookie-grant {
      @apply flex items-center select-none;
    }

    & .cookie-btn-ct {
      @apply flex items-center justify-end gap-5;
    }

    & .cookie-policy {
      @apply text-xs underline;
    }
  }

  & .open-banner {
    @apply bg-white text-primary h-10 p-2 rounded-xl cursor-pointer;

    box-shadow: 0 5px 24px 2px rgba(0, 0, 0, 0.25);

    &.not-visible {
      @apply hidden;
    }
  }
}

@media (max-width: theme('screens.md')) {
  .cookie-banner-ct {
    @apply bottom-2 right-2 left-2;

    & .cookie-banner {
      & .cookie-btn-ct {
        @apply flex-col;

        & .cookie-btn {
          @apply w-full;
        }
      }
    }
  }
}
</style>
