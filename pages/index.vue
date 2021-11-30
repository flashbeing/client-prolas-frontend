<template>
  <main>
    <VideoMain />
    <AboutUs id="us" />
    <div id="whatWeDo">
      <h2>{{ $t('header.whatWeDo') }}</h2>
      <h3>{{ $t('whatWeDo.subtitle') }}</h3>
      <div class="section container container-big-gap">
        <SectionMediaText
          v-for="(step, i) in whatWeDoSteps"
          :key="step.title"
          :title="step.title"
          :text="step.text"
          :machines="step.machines"
          :right="Boolean(i % 2)"
          :media="media[i].url"
          :is-image="media[i].isImage"
        />
      </div>
    </div>
    <div id="ourTech">
      <SideListWithRightDetails />
    </div>
    <div class="container container-small-gap">
      <ImagesWall />
      <Location id="ourLocation" />
    </div>
  </main>
</template>

<script>
import VideoMain from '@/components/ui/VideoMain.vue'
import AboutUs from '@/components/ui/AboutUs.vue'
import SectionMediaText from '@/components/ui/SectionMediaText.vue'
import SideListWithRightDetails from '@/components/ui/SideListWithRightDetails.vue'
import ImagesWall from '@/components/ui/ImagesWall.vue'
import Location from '@/components/ui/Location.vue'
export default {
  components: {
    VideoMain,
    AboutUs,
    SectionMediaText,
    SideListWithRightDetails,
    ImagesWall,
    Location,
  },
  data() {
    return {
      media: [
        {
          url: 'https://codeworks-clients-public.s3.eu-west-1.amazonaws.com/prolas/videos/kinzeption.mp4',
        },
        {
          url: 'https://codeworks-clients-public.s3.eu-west-1.amazonaws.com/prolas/videos/prototypenfertigung.mp4',
        },
        {
          url: 'https://codeworks-clients-public.s3.eu-west-1.amazonaws.com/prolas/videos/laserschneiden.mp4',
        },
        {
          url: 'https://codeworks-clients-public.s3.eu-west-1.amazonaws.com/prolas/videos/biegen.mp4',
        },
        {
          url: 'https://codeworks-clients-public.s3.eu-west-1.amazonaws.com/prolas/videos/laserschweissen.mp4',
        },
        {
          isImage: true,
          url: require('~/assets/image/Schweissen-min.jpeg'),
        },
        {
          url: 'https://codeworks-clients-public.s3.eu-west-1.amazonaws.com/prolas/videos/satinieren.mp4',
        },
        {
          isImage: true,
          url: require('~/assets/image/Costa_MSA2_CRC+S_1350-min.jpeg'),
        },
        {
          isImage: true,
          url: require('~/assets/image/Bohren-min.jpeg'),
        },
        {
          url: 'https://codeworks-clients-public.s3.eu-west-1.amazonaws.com/prolas/videos/zusammenbau.mp4',
        },
        {
          url: 'https://codeworks-clients-public.s3.eu-west-1.amazonaws.com/prolas/videos/nachbearbeitung.mp4',
        },
      ],
    }
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

  & > .section {
    @apply my-32;
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

#whatWeDo {
  & > h2 {
    @apply pt-32 text-center text-primary font-bold text-4xl;
  }
  & > h3 {
    @apply pt-8 pb-32 text-center text-primary text-2xl;
  }
}

@media (max-width: theme('screens.md')) {
  .container {
    @apply w-full px-2;

    max-width: 100%;
  }
}
</style>
