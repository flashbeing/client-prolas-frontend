<template>
  <div class="accordion-container">
    <span @click="toggleContentVisibility"
      >{{ title }}
      <span class="icon-container"><ChevronBig class="chevron-big" /></span
    ></span>
    <p v-if="showContent">
      {{ content }}
    </p>
  </div>
</template>

<script>
import ChevronBig from '@/assets/icon/chevron-down-big.svg'
export default {
  components: { ChevronBig },
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showContent: false,
    }
  },
  methods: {
    toggleContentVisibility() {
      this.showContent = !this.showContent
    },
  },
}
</script>

<style lang="postcss" scoped>
.accordion-container {
  @apply flex flex-col gap-5 text-primary;

  & > span {
    @apply flex items-center gap-3 text-2xl cursor-pointer;
    & > .icon-container {
      @apply flex items-center justify-center w-8 h-8 border-2 border-primary rounded-full;

      & > .chevron-big {
        @apply w-full;

        transform: scaleY(0.7);
        transition: 0.4s;
      }

      &:hover {
        & > .chevron-big {
          transform: scaleY(1);
        }
      }
    }
  }
}
</style>
