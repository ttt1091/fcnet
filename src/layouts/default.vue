<template>
  <div>
    <nav
      class="navbar header has-shadow is-success"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/"
        >
          <img
            src="~assets/buefy.png"
            alt="Buefy"
            height="28"
          >
        </a>

        <div class="navbar-burger" @click="$store.commit('toggleMenu')" :class="{'is-active': $store.state.isMenuActive}">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>

    <section class="main-content">

    <div style="top: 52px;display: flex;">
      <div class="is-mobile-menu" :class="{'is-view': $store.state.isMenuActive}">
        <Mainmenu />
      </div>
      <div @click="$store.commit('toggleMenu')"  :class="{'is-mobile-menu-opened': $store.state.isMenuActive}"></div>
    </div>

    <div class="is-hidden-mobile is-hidden-tablet-only is-desktop-menu">
      <Mainmenu />
    </div>
    <div class="container is-10">
      <nuxt />
    </div>
    </section>
  </div>
</template>

<script>
import Mainmenu from '~/components/Mainmenu'
export default {
  components: {
    Mainmenu
  },
  head() {
    return {
      link: [
        {
          rel: "canonical",
          href: `https://fc-net.web.app${this.$route.path}`,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.is-mobile-menu-opened{
  height: 100vh;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.6);
  flex-grow: 2;
}
</style>