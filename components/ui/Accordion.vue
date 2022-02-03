<template>
  <div class="accordion-container">
    <span @click="handleClick"
      >{{ title }}
      <span class="icon-container"><ChevronBig class="chevron-big" /></span
    ></span>
    <div class="content" :class="{ 'show-content': showContent }">
      <ul :class="{ rtl: right }">
        <li v-for="(c, i) in content" :key="i + 'accordionMachine'">{{ c }}</li>
      </ul>
    </div>
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
      type: Array,
      required: true,
    },
    right: {
      type: Boolean,
      default: false,
    },
    anchor: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      showContent: false,
    }
  },
  methods: {
    handleClick() {
      if (this.anchor) {
        this.scrollTo()
        return
      }

      this.toggleContentVisibility()
    },
    toggleContentVisibility() {
      this.showContent = !this.showContent
    },
    scrollTo() {
      this.$store.commit('page/setMachineSelected', this.title)
      // this.$router.push({ path: this.anchor })
      if (location.hash === '#' + this.anchor) location.hash = ''
      location.hash = '#' + this.anchor
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

        transform: scaleY(0.5);
        transition: 0.4s;
        & > path {
          vector-effect: non-scaling-stroke;
          stroke-width: 3px;
        }
      }

      &:hover {
        & > .chevron-big {
          transform: scaleY(1);
        }
      }
    }
    &:hover {
      & > .icon-container {
        & > .chevron-big {
          transform: scaleY(1);
        }
      }
    }
  }

  & ul {
    @apply list-disc px-6;
  }
}
.content {
  @apply opacity-0 pointer-events-none h-0;

  transition: height 1s;
}

.show-content {
  @apply opacity-100 pointer-events-auto h-auto;
}

.rtl {
  direction: rtl;
}
</style>
