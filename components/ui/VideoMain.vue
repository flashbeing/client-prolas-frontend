<template>
  <div class="video-container">
    <video
      ref="videoMain"
      :class="{ 'show-video': showVideo }"
      :controls="showVideo"
      src="https://codeworks-clients-public.s3.eu-west-1.amazonaws.com/prolas/videos/intro.mp4"
    ></video>
    <div v-if="!showVideo" class="icon-container" @click="toggleShowVideo()">
      <ChevronRight class="chevron-right" />
    </div>
  </div>
</template>

<script>
import ChevronRight from '@/assets/icon/chevron-right.svg'

export default {
  components: {
    ChevronRight,
  },
  data() {
    return { showVideo: false }
  },
  methods: {
    toggleShowVideo() {
      this.showVideo = !this.showVideo
      if (this.showVideo) {
        this.$refs.videoMain.play()
        return
      }
      this.$refs.videoMain.pause()
    },
  },
}
</script>

<style lang="postcss" scoped>
.video-container {
  @apply h-full bg-grey relative text-primary;
  & > video {
    @apply w-full pointer-events-none;

    &.show-video {
      @apply pointer-events-auto;
    }
  }
  & > .icon-container {
    @apply absolute bg-gray-100 rounded-full border-4 border-primary cursor-pointer;

    transform: translateX(-50%) translateY(-50%);
    width: 80px;
    top: 50%;
    left: 50%;
    & > .chevron-right {
      @apply fill-current;

      transform: scaleX(0.5);
      transition: 0.4s;

      & > path {
        stroke-width: 3px;
      }
    }
    &:hover {
      & > .chevron-right {
        transform: scaleX(1);
      }
    }
  }
}
@media (max-width: theme('screens.md')) {
  .video-container {
    & > .icon-container {
      width: 50px;
    }
  }
}
</style>
