<template>
  <footer>
    <span><Phone />{{ $t('footer.phone') }}</span>
    <span><Email />{{ $t('footer.email') }}</span>
    <span>{{ $t('footer.pec') }}</span>
    <span
      ><a href=""> {{ $t('footer.jobs') }}</a></span
    >
  </footer>
</template>

<script>
import Phone from '@/assets/icon/phone.svg'
import Email from '@/assets/icon/email.svg'

export default {
  components: {
    Phone,
    Email,
  },
}
</script>

<style lang="postcss" scoped>
footer {
  @apply flex justify-center gap-32 bg-primary py-32 relative;
  & > span {
    @apply flex items-center gap-4 text-xl text-white;
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
  &::before {
    @apply absolute w-full bg-primary;

    content: '';
    height: 60%;
    top: -60%;
  }
}

@media (max-width: theme('screens.md')) {
  footer {
    @apply flex-col items-center py-12;

    & > span {
      @apply flex gap-4 text-base;
    }

    &::before {
      content: '';
      height: 30%;
      top: -30%;
    }
  }
}
</style>
