<template>
  <main>
    <div class="container container-big-gap">
      <SectionImageText
        v-for="(step, i) in whatWeDoSteps"
        :key="step.title"
        :title="step.title"
        :text="step.text"
        :machines="step.machines"
        :right="Boolean(i % 2)"
        image="https://picsum.photos/624/433"
      />
    </div>
    <div>
      <SideListWithRightDetails />
    </div>
    <div class="container container-small-gap">
      <ImagesWall />
      <Location />
    </div>
  </main>
</template>

<script>
import SectionImageText from '@/components/ui/SectionImageText.vue'
import SideListWithRightDetails from '@/components/ui/SideListWithRightDetails.vue'
import ImagesWall from '@/components/ui/ImagesWall.vue'
import Location from '@/components/ui/Location.vue'
export default {
  components: {
    SectionImageText,
    SideListWithRightDetails,
    ImagesWall,
    Location,
  },
  computed: {
    whatWeDoSteps() {
      return this.$t('whatWeDo.steps')
    },
  },
}
</script>

<style lang="postcss" scoped>
main {
  margin-top: 60px;

  & > div {
    @apply my-20;
  }
}

.container {
  @apply flex flex-col gap-32 items-center mx-auto;
}

.container-small-gap {
  @apply gap-12;
}

.container-big-gap {
  @apply gap-48;
}

@media (max-width: theme('screens.md')) {
  .container {
    @apply w-full px-2;

    max-width: 100%;
  }
}
</style>
