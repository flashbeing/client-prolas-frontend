<template>
  <div class="side-list-wrapper">
    <div class="side-list-container">
      <div class="side-list">
        <h3>UNSERE TECHNOLOGIEN</h3>
        <ul>
          <li
            v-for="(t, i) in tech"
            :key="'tech' + i"
            :class="{ selected: i == techSelected }"
            @click="setTechSelected(i)"
          >
            {{ t.name }}
          </li>
        </ul>
      </div>
      <div class="details-container">
        <div class="image-container">
          <img :src="image" alt="" />
        </div>
        <ul>
          <li v-for="d in details" :key="d">{{ d }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      techSelected: 0,
      image: null,
      details: [],
      tech: [
        {
          name: 'TruLaser 2020L',
          image: 'https://picsum.photos/730/487',
          details: ['laser', 'max'],
        },
        {
          name: 'TruLaser 3030L',
          image: 'https://picsum.photos/730/487',
          details: ['laser', 'alessio'],
        },
      ],
    }
  },
  created() {
    this.details = this.tech[this.techSelected].details
    this.image = this.tech[this.techSelected].image
  },
  methods: {
    setTechSelected(i) {
      this.techSelected = i
      this.details = this.tech[i].details
      this.image = this.tech[i].image
    },
  },
}
</script>

<style lang="postcss" scoped>
.side-list-wrapper {
  @apply bg-primary py-24;
}

.side-list-container {
  @apply flex justify-center m-auto gap-12 text-white;

  max-width: 1280px;

  & > .side-list {
    @apply flex-1 text-right;

    & > h3 {
      @apply text-4xl pb-12;
    }
    & > ul {
      @apply text-2xl flex flex-col items-end text-grey;

      & > li {
        @apply py-6 mr-0 cursor-pointer;

        width: max-content;

        &:hover,
        &.selected {
          @apply text-3xl border-b-4 text-white;
        }
      }
    }
  }
  & > .details-container {
    @apply flex-1;

    max-width: 750px;

    & > ul {
      @apply pt-4 pl-6 list-disc;
    }

    & > .image-container {
      @apply relative z-10;

      & > img {
        width: 90%;
        height: 90%;
        margin-top: 10%;
        padding-top: 20%;
        padding-right: 10%;
        max-width: 624px;
      }

      &::before {
        @apply absolute top-0 right-10 bg-grey;

        content: '';
        z-index: -1;
        width: 80%;
        height: 80%;
      }
    }
  }
}
</style>
