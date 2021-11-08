<template>
  <footer>
    <span>0471 052460</span>
    <span>laser@prolas.it - info@prolas.it</span>
    <span>Pec-Adresse: info@pec.prolas.it</span>
  </footer>
</template>
<style lang="postcss" scoped>
footer {
  @apply flex justify-center flex-wrap gap-32 bg-primary py-32 relative;
  & > span {
    @apply flex items-center gap-10 text-xl text-white;
  }
  &::before {
    @apply absolute w-full bg-primary;

    content: '';
    height: 20%;
    top: -20%;
  }
}
</style>
