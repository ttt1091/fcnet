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
    }
  },
  fetch ({store}) {
    store.commit('resetMenu')
  }
}
</script>

<style lang="scss" scoped>
h1{ font-size: 1.1rem; }
th{ font-size: .8rem; }
tr{
  td:first-child{
    font-size: .8rem;
  }
}

.grs-box-right{ text-align: right; }
.article-body{
  margin: 8px;
}
</style>