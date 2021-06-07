<template>
  <article class="container mx-auto my-8 px-20 md:px-0">
    <h1 class="text-center text-3xl font-bold my-8">{{ article.title || '' }}</h1>
    <div class="content bg-white rounded">
      <nuxt-content :document="article" />
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const query = $content('articles', params.slug)
    const article = await query.fetch()
    return { article }
  },
  head() {
    return {
      title: this.article.title,
    }
  },
  fetch ({store}) {
    store.commit('resetMenu')
  }
}
</script>

<style lang="scss" scoped>
h1{ font-size: 1.1rem; }
th{
  font-size: .8rem;
}
tr{
  td:first-child{
    font-size: .8rem;
  }
}
</style>