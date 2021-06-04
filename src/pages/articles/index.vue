<template>
  <div>
    <article class="post-items" v-for="b in articles" :key="b.slug">
      <nuxt-link :to="'/articles/'+ b.slug">{{b.title}} {{$dateTimeToJaDate(b.updated_at)}}</nuxt-link>
    </article>
  </div>
</template>
<script>
export default {
  async asyncData ({ $content, params }) {
    const query = await $content('articles' || 'index', { deep: true }).limit(10).sortBy('updated_at', 'desc')
    const articles = await query.fetch()
    return { articles }
  },
  fetch ({store}) {
    store.commit('resetMenu')
  }
}
</script>


<style lang="scss" scoped>
.post-items{
  margin: 8px;
  padding: 8px;
  border: solid 1px #ddd;
  a{
    display: block;
  }
}
</style>