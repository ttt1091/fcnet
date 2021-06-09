<template>
  <section class="grs-section">
    <h2 class="ttl2">最新ライブチャット情報</h2>
    <div class="list-items-wrap">
      <article class="list-items" v-for="b in responseData" :key="b.slug">
        <nuxt-link :to="'/articles/'+ b.slug + '/'"><b-icon icon="new-box" /> {{b.title}}</nuxt-link>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  props:{
    responseData: {
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.grs-section{
  margin: 8px;
}
.ttl2{
  font-size: 1.1rem;
  padding: 4px;
}

.list-items{
  padding: 8px 4px;
  border: solid 1px #ccc;
  margin-bottom: -1px;
  a{
    display: block;
    color: #444;
  }
}
</style>