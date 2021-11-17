<template>
  <div class="section-media-text-container" :class="{ reverse: right }">
    <div class="media-container">
      <img v-if="isImage" :src="media" />
      <video v-else :src="media" autoplay loop muted playsinline />
    </div>
    <div class="text-container">
      <h3>{{ title }}</h3>
      <p>{{ text }}</p>
      <Accordion
        v-for="m in machinesDetails"
        :key="m.name"
        class="accordion"
        :title="m.name"
        :content="m.description"
        :right="right"
      />
    </div>
  </div>
</template>

<script>
import Accordion from '@/components/ui/Accordion.vue'
export default {
  components: { Accordion },
  props: {
    right: {
      type: Boolean,
      default: false,
    },
    media: {
      type: String,
      default: '',
    },
    isImage: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    machines: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      machinesDetails: [],
    }
  },
  mounted() {
    const machinesDescr = this.$t('machines')
    for (const m of this.machines) {
      if (machinesDescr[m]) {
        this.machinesDetails.push({
          name: m,
          description: machinesDescr[m].details,
        })
      }
    }
  },
}
</script>

<style lang="postcss" scoped>
.section-media-text-container {
  @apply flex gap-8 m-auto;

  max-width: 1024px;

  & > .media-container {
    @apply relative self-start flex-1;

    max-width: 750px;

    & > img,
    & > video {
      width: 90%;
      height: 90%;
      margin-left: 10%;
      padding-bottom: 10%;
      max-width: 624px;
    }

    &::after {
      @apply absolute bottom-2 bg-primary;

      content: '';
      z-index: -1;
      width: 95%;
      height: 70%;
    }
  }

  & > .text-container {
    @apply flex flex-col flex-1 gap-4;

    width: 50%;

    & > h3 {
      @apply text-4xl text-primary pt-2 pb-2;
    }

    & > p {
      @apply text-lg text-primary font-light;
    }
  }
}

.reverse {
  @apply flex-row-reverse;
  & > .text-container {
    @apply items-end;

    & > h3,
    & > p {
      @apply text-right;
    }

    & > .accordion {
      @apply items-end text-right;
    }
  }

  & > .media-container {
    & > img,
    & > video {
      margin-left: 0;
      margin-right: 10%;
    }
  }
}

@media (max-width: theme('screens.md')) {
  .section-media-text-container {
    @apply flex-col px-3;

    & > .text-container {
      @apply w-full;

      & > h3 {
        @apply text-2xl break-all;
      }

      & > p {
        @apply text-base;
      }
    }
  }
  .reverse {
    & > .text-container {
      @apply items-start;

      & > h3,
      & > p {
        @apply text-left;
      }

      & > .accordion {
        @apply items-start text-left;
      }
    }

    & > .media-container {
      & > img,
      & > video {
        margin-left: 10%;
        margin-right: 0;
      }
    }
  }
}
</style>
