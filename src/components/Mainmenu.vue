<template>
      <aside class="is-2 section">
        <p class="menu-label">
          MENU
        </p>
        <ul class="menu-list">
          <li
            v-for="(item, key) of items"
            :key="key"
          >
            <nuxt-link
              :to="item.to"
              exact-active-class="is-active"
            >
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'AllChannel',
          icon: 'video-vintage',
          to: { name: 'channellist' }
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
div{
  width: auto;
}
</style>