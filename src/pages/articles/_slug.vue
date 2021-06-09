<template>
  <article class="article-view">
    <div class="article-head">
      <h1 class="ttl">{{ article.title || '' }}</h1>
      <div class="grs-box-right">
        <div v-if="article.created_at === article.updated_at">作成日：<span>{{ $dateToJaDate(article.created_at) }}</span></div>
        <div v-else>更新日：<span>{{ $dateToJaDate(article.updated_at) }}</span></div>
      </div>
    </div>
    <div class="article-body">
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
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: this.article.description }
      ]
    }
  },
  fetch ({store}) {
    store.commit('resetMenu')
  }
}
</script>

<style lang="scss" scoped>
h1 {
  margin: 8px;
  font-size: 1.1rem;
  position: relative;
  padding: 0.5em;
  background: #a6d3c8;
  color: white;
}
h1::before {
  position: absolute;
  content: '';
  top: 100%;
  left: 0;
  border: none;
  border-bottom: solid 15px transparent;
  border-right: solid 20px rgb(149, 158, 155);
}
th{ font-size: .8rem; }
tr{
  td:first-child{
    font-size: .8rem;
  }
}

</style>