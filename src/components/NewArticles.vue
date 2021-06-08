<template>
  <section>
    <h2>最新ライブチャット情報</h2>
    <div>
      <article class="post-items" v-for="b in articles" :key="b.slug">
        <nuxt-link :to="'/articles/'+ b.slug + '/'"><b-icon icon="new-box" /> {{b.title}}</nuxt-link>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const query = await $content('articles' || 'index', { deep: true }).limit(10).sortBy('updated_at', 'desc')
    const articles = await query.fetch()
    return { articles }
  },
}
</script>

<style lang="scss" scoped>

</style>