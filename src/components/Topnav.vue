<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg v-if="currentRoute === '/vue-xd'" class="icon">
        <use xlink:href="#icon-king2"></use>
      </svg>
      <svg v-else-if="currentRoute === '/doc/intro'" class="icon">
        <use xlink:href="#icon-king3"></use>
      </svg>
      <svg v-else-if="currentRoute === '/seatsfinder'" class="icon">
        <use xlink:href="#icon-king4"></use>
      </svg>
      <svg v-else class="icon">
        <use xlink:href="#icon-king"></use>
      </svg>
    </router-link>

    <!-- <ul class="menu">
      <a href="https://www.deexiao.com">旧版主页</a> -->
    <!-- <li>
        <router-link to="/doc">旧版主页</router-link>
      </li> -->
    <!-- </ul> -->
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible') // get
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value
    }
    const route = useRoute()
    const path = computed(() => route.path)
    const currentRoute = path.value
    console.log(currentRoute)
    return {
      toggleMenu,
      currentRoute,
    }
  },
}
</script>

<style lang="scss" scoped>
$color: #6d7faf;

.topnav {
  color: $color;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;

  > .logo {
    max-width: 6em;
    margin-right: auto;

    > svg {
      width: 32px;
      height: 32px;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  > .toggleAside {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }

    > .logo {
      margin: 0 auto;
    }

    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
