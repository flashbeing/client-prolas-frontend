<template>
  <div class="about-us-container">
    <div class="image-container">
      <img src="~/assets/image/Trubend_vertical-min.jpeg" alt="" />
    </div>
    <div class="text-container">
      <div class="text-wrapper">
        <h3>{{ $t('header.us') }}</h3>
        <div>
          <span v-for="t in $t('ourValues.titles')" :key="t" class="us-title">{{
            t
          }}</span>
        </div>
        <div>
          <p
            v-for="(d, i) in $t('ourValues.descriptions')"
            :key="'descrUs' + i"
            class="us-description"
          >
            {{ d }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
.about-us-container {
  @apply flex;
}

.image-container {
  width: 50%;

  & > img {
    @apply py-16;
  }
}

.text-container {
  @apply bg-primary text-white flex justify-center items-center flex-1;

  & > .text-wrapper {
    @apply flex flex-col gap-14;

    width: 70%;

    & h3 {
      @apply text-4xl uppercase;
    }
  }
}

.us-title {
  @apply block text-2xl uppercase;
}
.us-description {
  @apply py-2;
}

@media (max-width: theme('screens.md')) {
  .about-us-container {
    @apply flex-col-reverse;
  }
  .image-container {
    @apply w-full;
    & > img {
      @apply py-0;
    }
  }
  .text-container {
    & > .text-wrapper {
      @apply w-full py-16 px-4;
    }
  }
}
</style>
