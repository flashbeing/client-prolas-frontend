<template>
  <footer>
    <div class="row">
      <span><Phone />{{ $t('footer.phone') }}</span>
      <span><Email />{{ $t('footer.email') }}</span>
      <span>{{ $t('footer.pec') }}</span>
      <span
        ><a href="https://forms.gle/gyggyg3FDY7vq4Mo8">
          {{ $t('footer.jobs') }}</a
        ></span
      >
    </div>
    <div class="center company-details">
      <span>Prolas GmbH,</span>
      <span>Gewerbezone 33, 39053 Kardaun/Cornedo all‘Isarco,</span>
      <span>MwST.: IT 03089220218 C.D.: 2H2LI53</span>
    </div>
    <!-- <client-only>
     cookie-law
        theme="dark-lime"
        :message="$t('footer.cookieTerms')"
        button-class="cookie-button"
        button-text="Ok"
        class="cookie"
      ></cookie-law>
    </client-only> -->
    <client-only>
      <CookieBanner />
    </client-only>
  </footer>
</template>

<script>
import Phone from '@/assets/icon/phone.svg'
import Email from '@/assets/icon/email.svg'

export default {
  components: {
    Phone,
    Email,

    // CookieLaw: () => (process.client ? import('vue-cookie-law') : null),
  },
}
</script>

<style lang="postcss" scoped>
footer {
  @apply grid gap-8 bg-primary py-32 relative text-white;

  & .row {
    @apply flex justify-center gap-32  text-xl;
    & > span {
      @apply flex items-center gap-4;
      & > a {
        &:hover {
          @apply underline;
        }
      }
      & > svg {
        @apply fill-current;

        height: 20px;
      }
    }
  }
  & .company-details {
    @apply text-sm text-center;
  }
  &::before {
    @apply absolute w-full bg-primary;

    content: '';
    height: 60%;
    top: -60%;
  }
}

@media (max-width: theme('screens.md')) {
  footer {
    @apply gap-12 py-12;

    & .row {
      @apply flex-col items-center gap-12 text-base;
      & > span {
        @apply flex gap-4;
      }
    }
    & .company-details {
      @apply flex flex-col gap-2 items-start text-xs text-left;
      & > span {
        @apply block;
      }
    }

    &::before {
      content: '';
      height: 30%;
      top: -30%;
    }
  }
}
</style>
