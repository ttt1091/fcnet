<template>
  <main>
    <div>
      <div>
        現在海外からの配信も表示をしておりません。<br>
        ※海外からの配信は粗悪なものが多い為
      </div>
    </div>

    <div>
      <button class="button" @click="changeOrder">↑昇降変更↓</button>
    </div>

    <div style="display: flex;flex-wrap: wrap;">
    	<div v-for="(post, index) in sortedAndFiltert" :key="index" class="grs-card">
		    <div class="grs-hero">
            <a class="grs-hero-link" :href="'https://live.fc2.com/'+post.id+'/'" target="_blank">
          <img
            v-lazy="post.image"
            :alt="post.name"
          />
            </a>
		    </div>
		    <div class="grs-card-head">
			    <h2>{{ post.name }}</h2>
			    <div class="grs-card-subtitle">{{ post.title }}</div>
		    </div>
		    <div class="grs-card-body">
          <div>
            <span class="grs-batch grs-batch-small grs-light-red">{{ post.count }}人視聴中!!</span>
          </div>
          <div>
            <span v-if="post.pay === 0" class="grs-batch grs-batch-small">無料</span>
            <span v-else class="grs-batch grs-batch-small">有料</span>

            <span v-if="post.type == '1'" class="grs-batch grs-batch-small">LIVECHAT</span>
            <span v-else-if="post.type == '2'" class="grs-batch grs-batch-small">2SHOT</span>
            <span v-else class="grs-batch grs-batch-small">OPEN</span>
          </div>
		    </div>
        <div>
          {{ $dateTimeToJaDate(post.start_time) }}
        </div>
        <div>
          <div>
          </div>
        </div>
        <div class="grs-card-foot">
          <div><a :href="'https://live.fc2.com/'+post.id+'/'" target="_blank">ライブ配信へ</a></div>
        </div>
	    </div>
    </div>
  </main>
</template>

<script>
  export default {
    async asyncData({ $axios, error }) {
      try{
        const url = "https://live.fc2.com/adult/contents/allchannellist.php"
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

</style>