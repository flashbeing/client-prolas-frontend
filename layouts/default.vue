<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<style lang="postcss">
html {
  @apply font-sans;

  font-size: 18px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
