<template>
  <header :style="`height:${headerHeight}px;`">
    <div class="header-center">
      <nav class="desktop-nav">
        <nuxt-link
          v-for="item of menuItemsLeft"
          :key="item.path"
          :to="{ path: item.path }"
          @click.native="hideMenu"
        >
          {{ item.name }}
        </nuxt-link>
        <nuxt-link
          :to="localePath('/')"
          tag="div"
          class="logo clickable"
          :style="`height:${logoHeight}px`"
          @click.native="hideMenu"
        ></nuxt-link>
        <nuxt-link
          v-for="item of menuItemsRight"
          :key="item.path"
          :to="localePath(item.path)"
          @click.native="hideMenu"
        >
          {{ item.name }}
        </nuxt-link>
      </nav>
      <nav class="mobile-menu">
        <nuxt-link
          :to="localePath('/')"
          tag="div"
          :style="`height:${logoHeight}px`"
          class="logo clickable"
          @click.native="hideMenu"
        ></nuxt-link>
        <div
          class="menu-bt clickable"
          :style="`top:${burgerTopDistance}px`"
          :class="{ opened: isMenuOpened }"
          @click="toggleMenu"
        >
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <!-- </div> -->
        <div class="menu" :class="{ visible: isMenuOpened }">
          <div class="center relative h-full">
            <ul>
              <nuxt-link
                v-for="item of menuItems"
                :key="item.hash"
                :to="{ path: item.path }"
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
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpened: false,
      logoHeight: 60,
      headerHeight: 80,
      burgerTopDistance: 24,
    }
  },

  computed: {
    menuItemsLeft() {
      return [
        {
          name: this.$t('header.whatWeDo'),
          path: '#whatWeDo',
        },
        {
          name: this.$t('header.ourTech'),
          path: '#ourTech',
        },
      ]
    },
    menuItemsRight() {
      return [
        {
          name: this.$t('header.us'),
          path: '#us',
        },
        {
          name: this.$t('header.ourLocation'),
          path: '#ourLocation',
        },
      ]
    },
    menuItems() {
      return [...this.menuItemsLeft, ...this.menuItemsRight]
    },
  },
  mounted() {
    window.onscroll = () => {
      this.scrollFunction()
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpened = !this.isMenuOpened
    },
    hideMenu() {
      this.isMenuOpened = false
    },
    scrollFunction() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        this.logoHeight = 48
        this.headerHeight = 60
        this.burgerTopDistance = 16
      } else {
        this.logoHeight = 60
        this.headerHeight = 80
        this.burgerTopDistance = 24
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
header {
  @apply fixed bg-secondary text-primary w-full top-0 z-20;

  transition: 0.4s;
}

.header-center {
  width: 100%;
  height: inherit;
  margin: 0 auto;
  text-align: center;
}

.logo {
  @apply inline-block bg-no-repeat;

  transition: 0.4s;
  background-image: url(~assets/image/Logo_Prolas.svg?inline);
  background-position: center;
  background-size: auto 100%;
}

nav {
  @apply flex justify-evenly items-center h-full;

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
    @apply bg-primary;

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

.mobile-menu {
  @apply hidden;
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

.desktop-nav {
  & > * {
    width: calc(100% / 6);
  }
  & > a {
    font-size: 1vw;
  }
}

@media only screen and (max-width: theme('screens.md')) {
  nav {
    @apply hidden;
  }

  .menu-bt {
    @apply block mr-2;

    transition: 0.4s;
  }

  .menu {
    & ul {
      @apply flex flex-col;
      & li {
        @apply text-2xl;

        filter: blur(0);
      }
    }

    &.visible {
      @apply opacity-100 pointer-events-auto;
    }
  }
  .logo {
    @apply ml-3;

    width: 250px;
    background-position: left center;
  }
  .header-center {
    text-align: left;
  }
  .desktop-nav {
    display: none;
  }

  .mobile-menu {
    @apply flex items-center justify-start h-full;
  }
}
</style>
