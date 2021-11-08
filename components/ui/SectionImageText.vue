<template>
  <div class="section-image-text-container" :class="{ reverse: right }">
    <div class="image-container">
      <img :src="image" alt="" />
    </div>
    <div class="text-container">
      <h3>{{ title }}</h3>
      <p>{{ text }}</p>
      <Accordion
        v-if="accordionTitle.length && accordionContent.length"
        class="accordion"
        :title="accordionTitle"
        :content="accordionContent"
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
    image: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    accordionTitle: {
      type: String,
      default: 'TITOLO',
    },
    accordionContent: {
      type: String,
      default: 'CONTENT',
    },
  },
}
</script>

<style lang="postcss" scoped>
.section-image-text-container {
  @apply flex gap-8 m-auto;

  max-width: 1024px;

  & > .image-container {
    @apply relative self-start flex-1;

    max-width: 750px;

    & > img {
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

  & > .image-container {
    & > img {
      margin-left: 0;
      margin-right: 10%;
    }
  }
}

@media (max-width: theme('screens.md')) {
  .section-image-text-container {
    @apply flex-col px-3;
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

    & > .image-container {
      & > img {
        margin-left: 10%;
        margin-right: 0;
      }
    }
  }
}
</style>
