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

    <div style="top: 52px;" :class="{'is-mobile-menu-open': $store.state.isMenuActive}" @click="$store.commit('toggleMenu')">
      <div class="is-mobile-menu" :class="{'is-view': $store.state.isMenuActive}">
        <Mainmenu />
      </div>
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
</style>