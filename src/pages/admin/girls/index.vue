<template>
  <main>
    <div>
      <button class="button" @click="changeOrder">↑昇降変更↓</button>
    </div>

    <div style="display: flex;flex-wrap: wrap;">
    	<div v-for="(post, index) in sortedAndFiltert" :key="index" class="grs-card">
		    <div class="grs-hero">
            <a class="grs-hero-link" :href="'https://live.fc2.com/'+post.id+'/'" target="_blank">
              <img v-lazy="post.image" :alt="post.name">
            </a>
		    </div>
		    <div class="grs-card-head">
			    <h2>{{ post.name }}</h2>
			    <div class="grs-card-subtitle">{{ post.title }}</div>
		    </div>
		    <div class="grs-card-body">
		    </div>
        <div class="grs-card-foot">
          <NuxtLink
            class="button"
            :to="'/admin/girls/'+post.id"
          >
            配信者情報
          </NuxtLink>
        </div>
	    </div>
    </div>
  </main>
</template>

<script>
  export default {
    async asyncData({ $axios, error }) {
      try{
        const response = await $axios.$get("/api/")
        return {
          posts: response.channel,
        }
      } catch (err) {
        console.log(error)
      }
    },
    data(){
      return{
        posts: [],
        sortOrder: 1,
        sortRule: 'sortedAndFiltert'
      }
    },
    computed: {
      sortedItemsByCount(){
        return this.posts.sort((a, b) => {
          return (a.count < b.count) ? 1 : (a.count > b.count) ? -1 : 0
        })
      },
      sortedAndFiltert(){
        return this.posts.filter((filt) => filt.sex === "w" && filt.lang === "ja")
        .slice()
        .sort((a, b) => {
          return (a.count < b.count) ? this.sortOrder : (a.count > b.count) ? -this.sortOrder : 0
        })
      },
    },
    methods: {
      changeOrder(){
        this.sortOrder = this.sortOrder > 0 ? -1 : 1;
      },
    },
    fetch ({store}) {
      store.commit('resetMenu')
    }
  }
</script>

<style lang="scss" scoped>
.grs-card {
    width: 155.5px;
}
</style>