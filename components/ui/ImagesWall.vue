<template>
  <div class="image-wall-container">
    <img
      :src="require('~/assets/image/images_wall_1_1.jpeg')"
      :class="{ 'hidden-image': showImages[0] }"
    />
    <img
      :src="require('~/assets/image/images_wall_1_2.jpeg')"
      :class="{ 'hidden-image': !showImages[0] }"
    />
    <div class="row">
      <img
        :src="require('~/assets/image/images_wall_2_1.jpeg')"
        :class="{ 'hidden-image': showImages[1] }"
      />
      <img
        :src="require('~/assets/image/images_wall_2_2.jpeg')"
        :class="{ 'hidden-image': !showImages[1] }"
      />
      <div class="box-container box-container--blue">
        <div class="box">
          <p
            v-for="(s, i) in strengthsFirst"
            :key="'strengthsFirst' + i"
            class="strengths"
          >
            <span>{{ s.title }}:</span> {{ s.text }}
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="box-container box-container--bg-image">
        <div class="box">
          <p
            v-for="(s, i) in strengthsSecond"
            :key="'strengthsSecond' + i"
            class="strengths"
          >
            <span>{{ s.title }}</span
            >{{ s.text ? `: ${s.text}` : null }}
          </p>
        </div>
      </div>
      <img
        :src="require('~/assets/image/images_wall_3_1.jpeg')"
        :class="{ 'hidden-image': showImages[2] }"
      />
      <img
        :src="require('~/assets/image/images_wall_3_2.jpeg')"
        :class="{ 'hidden-image': !showImages[2] }"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showImages: [true, true, true],
    }
  },
  computed: {
    strengthsFirst() {
      return this.$t('strengths.first')
    },
    strengthsSecond() {
      return this.$t('strengths.second')
    },
  },
  mounted() {
    this.alternateImages()
  },
  methods: {
    alternateImages() {
      setInterval(() => {
        const array = [...this.showImages].map((image) => !image)
        this.showImages = array
      }, 5000)
    },
  },
}
</script>
<style lang="postcss" scoped>
img {
  @apply opacity-100 pointer-events-auto relative;

  transition: 0.8s;

  &.hidden-image {
    @apply opacity-0 pointer-events-none absolute;

    top: -99999px;
  }
}

.image-wall-container {
  @apply flex flex-col gap-3 pb-16 border-b-4 border-primary;
}

.row {
  @apply flex gap-3;
  & > img {
    @apply flex-1;

    max-width: 70%;
  }
}

.box-container {
  @apply flex justify-center items-center flex-1 p-8;
}

.box-container--blue {
  @apply bg-primary relative;

  &::before {
    @apply bg-primary w-full absolute;

    content: '';
    height: 20%;
    top: -20%;
  }
}

.box-container--bg-image {
  background-image: url('~/assets/image/metal_pieces-min.jpeg');
  background-size: cover;
}

.box {
  @apply text-primary p-8;

  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
}

.strengths {
  @apply text-xs py-4;
  & > span {
    @apply text-base;

    line-height: 1.2;
  }
}
@media (max-width: theme('screens.md')) {
  .box-container--blue {
    &::before {
      @apply hidden;
    }
  }

  .row {
    @apply flex-wrap;

    & > img {
      max-width: 100%;
    }
  }
}
</style>
