<template>
  <main>
    <div>
      <div>
        現在海外からの配信も表示をしておりません。<br>
        ※海外からの配信は粗悪なものが多い為
      </div>
    </div>

    <div style="display: flex;flex-wrap: wrap;padding: 8px;">
      <div v-for="(post, index) in sortedItemsByCount" :key="index">
    	<div class="grs-card" v-if="post.sex === 'w' & post.lang == 'ja'">
		    <div class="grs-hero">
            <a class="grs-hero-link" :href="'https://live.fc2.com/'+post.id+'/'" target="_blank">
          <nuxt-img
            :src="post.image"
            quality="70"
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
            <span v-if="post.pay === 0" class="grs-batch">無料</span>
            <span v-else class="grs-batch">有料</span>

            <span v-if="post.type == '1'" class="grs-batch">LIVECHAT</span>
            <span v-else-if="post.type == '2'" class="grs-batch">2SHOT</span>
            <span v-else class="grs-batch">OPEN</span>
          </div>
		    </div>
        <div>
          {{ $dateTimeToJaDate(post.start_time) }}
        </div>
        <div>
          <div>
            <NuxtLink
              :to="'/girls/'+post.id"
            >
              配信者情報
            </NuxtLink>
          </div>
        </div>
        <div class="grs-card-foot">
          <div><a :href="'https://live.fc2.com/'+post.id+'/'" target="_blank">ライブ配信へ</a></div>
        </div>
	    </div>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    async asyncData({ $axios }) {
      const url = "https://live.fc2.com/adult/contents/allchannellist.php"
      const response = await $axios.$get(url)
      return {
        posts: response.channel,
      }
    },
    data(){
      return{
        posts: this.posts
      }
    },
    computed: {
      sortedItemsByCount(){
        return this.posts.sort((a, b) => {
          return (a.count < b.count) ? 1 : (a.count > b.count) ? -1 : 0;
        });;
      },
    },
    fetch ({store}) {
      store.commit('resetMenu')
    }
  }
</script>

<style lang="scss" scoped>

</style>