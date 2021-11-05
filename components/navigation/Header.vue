<template>
  <header>
    <div class="center">
      <nuxt-link
        :to="localePath('/')"
        tag="div"
        class="logo clickable"
        @click.native="hideMenu"
      ></nuxt-link>
      <nav>
        <ul>
          <li v-for="(item, index) of menuItems" :key="index" class="clickable">
            <nuxt-link :to="localePath(item.path)" @click.native="hideMenu">
              {{ item.name }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <div
        class="menu-bt clickable"
        :class="{ opened: isMenuOpened }"
        @click="toggleMenu"
      >
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
    <div class="menu" :class="{ visible: isMenuOpened }">
      <div class="center relative h-full">
        <ul>
          <nuxt-link
            v-for="item of menuItems"
            :key="item.path"
            :to="localePath(item.path)"
            class="clickable"
            @click.native="hideMenu"
          >
            <li>
              {{ item.name }}
            </li>
          </nuxt-link>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpened: false,
    }
  },

  computed: {
    menuItems() {
      return [
        {
          name: this.$t('header.wecan'),
          path: '/#wecan',
        },
        {
          name: this.$t('header.our'),
          path: '/#our',
        },
        {
          name: this.$t('header.us'),
          path: '/#us',
        },
        {
          name: this.$t('header.ourlocation'),
          path: '/#location',
        },
      ]
    },
  },

  methods: {
    toggleMenu() {
      this.isMenuOpened = !this.isMenuOpened
    },
    hideMenu() {
      this.isMenuOpened = false
    },
  },
}
</script>

<style lang="postcss" scoped>
header {
  @apply fixed bg-secondary text-primary w-full top-0 z-20;

  height: 60px;
  font-size: 0;
  line-height: 60px;
}

.logo {
  @apply inline-block bg-no-repeat;

  width: 250px;
  height: 30px;
  margin-top: 13px;
  background-image: url(~assets/image/Logo_Prolas.svg?inline);
  background-position: left center;
  background-size: auto 100%;
}

nav {
  @apply inline-block text-right align-top;

  width: calc(100% - 250px);

  & li {
    @apply inline-block px-6 uppercase text-base;
  }
}

.menu-bt {
  @apply absolute z-10 hidden;

  top: 16px;
  right: 15px;
  width: 34px;
  height: 39px;
  transition: transform 0.5s ease;

  & > .line {
    @apply bg-white;

    height: 2px;
    margin-bottom: 10px;
    border-radius: 1px;
    transform-origin: 50%;
    transition: transform 0.5s ease, opacity 0.5s ease;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &.opened {
    transform: translateX(15px);

    & > .line {
      &:first-child {
        transform: rotate(45deg) translateY(17px);
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:last-child {
        transform: rotate(-45deg) translateY(-17px);
      }
    }
  }
}

.menu {
  @apply fixed right-0 bottom-0 left-0 bg-secondary opacity-0 pointer-events-none pt-10;

  top: 50px;
  transition: opacity 0.3s ease;

  & ul {
    & li {
      @apply py-4 text-4xl;
    }
  }

  &.visible {
    @apply opacity-100 pointer-events-auto;
  }
}

@media only screen and (max-width: 980px) {
  nav {
    @apply hidden;
  }

  .menu-bt {
    @apply block;
  }

  .menu {
    & ul {
      & > li {
        @apply text-4xl;

        filter: blur(0);
      }
    }

    &.visible {
      @apply opacity-100 pointer-events-auto;
    }
  }
}
</style>
