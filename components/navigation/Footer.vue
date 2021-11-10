<template>
  <footer>
    <span>0471 052460</span>
    <span>laser@prolas.it - info@prolas.it</span>
    <span>Pec-Adresse: info@pec.prolas.it</span>
  </footer>
</template>
<style lang="postcss" scoped>
footer {
  @apply flex justify-center gap-32 bg-primary py-32 relative;
  & > span {
    @apply flex items-center gap-10 text-xl text-white;
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
    @apply flex-col items-center;
  }
}
</style>
