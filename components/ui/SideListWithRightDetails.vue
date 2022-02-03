<template>
  <div class="side-list-wrapper">
    <div class="side-list-container">
      <div class="side-list">
        <h3>{{ $t('header.ourTech') }}</h3>
        <ul>
          <li
            v-for="(t, k) in machines"
            :key="k"
            :class="{ selected: k == machineSelected }"
            @click="setMachineSelected(t.name)"
          >
            {{ t.name }}
          </li>
        </ul>
        <div class="unavailable-container">
          <div
            v-for="(t, i) in unavailableMachines"
            :key="'unmachine' + i"
            class="unavailable"
          >
            <span>{{ t.name }}</span>
            <ul>
              <li v-for="d in t.details" :key="'detailsUnMachine' + d">
                {{ d }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="details-container" :class="{ 'details-visible': !loading }">
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
      image: null,
      details: [],
      loading: false,
    }
  },
  computed: {
    machineSelected() {
      return this.$store.state.page.machineSelected
    },
    machines() {
      return this.$t('machines')
    },
    unavailableMachines() {
      return this.$t('unavailableMachines')
    },
  },
  created() {
    this.details = this.machines[this.machineSelected].details
    this.image = this.getMachineImage()
  },
  methods: {
    setMachineSelected(machine) {
      this.loading = true
      this.$store.commit('page/setMachineSelected', machine)
      this.image = this.getMachineImage()
      this.details = this.machines[machine].details
      setTimeout(() => {
        this.loading = false
      }, 750)
    },
    getMachineImage() {
      return require(`~/assets/image/${this.machineSelected
        .split(' ')
        .join('_')}-min.jpeg`)
    },
  },
}
</script>

<style lang="postcss" scoped>
.side-list-wrapper {
  @apply bg-primary py-24 relative;

  &::after {
    @apply bg-primary w-full absolute;

    z-index: -1;
    content: '';
    height: 40%;
    bottom: -40%;
  }
}

.unavailable-container {
  @apply pt-6;
  & > .unavailable {
    @apply text-grey;

    & > ul {
      @apply list-disc;

      width: min-content;
      margin-left: auto;
    }
  }
}

.side-list-container {
  @apply flex justify-center m-auto gap-12 text-white;

  max-width: 1280px;

  & > .side-list {
    @apply text-right;

    width: 50%;

    & > h3 {
      @apply text-4xl pb-12;
    }
    & > ul {
      @apply text-2xl flex flex-col items-end text-grey;

      & > li {
        @apply py-6 mr-0 cursor-pointer;

        transition: 0.4s;

        &:hover,
        &.selected {
          @apply text-3xl border-b-4 text-white;
        }
      }
    }
  }

  & > .details-container {
    @apply flex-1 opacity-0;

    transition: 0.4s;
    max-width: 750px;

    &.details-visible {
      @apply opacity-100;
    }

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

@media (max-width: theme('screens.md')) {
  .side-list-container {
    @apply flex-col;

    & > .side-list {
      width: 90%;

      & > h3 {
        @apply text-lg;
      }
      & > ul {
        @apply text-base;

        & > li {
          &:hover,
          &.selected {
            @apply text-xl border-b-4 text-white;
          }
        }
      }
    }
    & > .details-container {
      & > ul {
        @apply pl-8;
      }

      & > .image-container {
        & > img {
          margin-top: 5%;
          margin-left: 5%;
          padding-top: 5%;
          padding-right: 0;
        }
      }
    }
  }
  .side-list-wrapper {
    &::after {
      height: 10%;
      bottom: -10%;
    }
  }
  .unavailable-container {
    @apply pt-12;
    & > .unavailable {
      @apply text-sm;
    }
  }
}
</style>
