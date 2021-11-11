<template>
  <div class="image-wall-container">
    <img :src="imageBig" alt="" />
    <div class="row">
      <img :src="image" alt="" />
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
      <img :src="image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: 'https://picsum.photos/1150/569',
      imageBig: 'https://picsum.photos/1739/988',
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
}
</script>
<style lang="postcss" scoped>
.image-wall-container {
  @apply flex flex-col gap-3 pb-16 border-b-4 border-primary;
}

.row {
  @apply flex gap-3 flex-wrap;
  & > img {
    @apply flex-1;
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
  background-image: url('~/assets/image/DSC01881.jpeg');
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
}
</style>
