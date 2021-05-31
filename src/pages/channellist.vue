<template>
  <div>
    <div>
      <ul>
        <li>
          チャンネルタイプ：[	0:オープンチャット, 1:多人数チャット, 2:2ショットチャット ]
        </li>
        <li>
          制限：[	0:制限なし, 1:ログイン限定, 2:ポイント所持限定 ]
        </li>
        <li>
          価格：[	0:無料, 1:有料 ]
        </li>
      </ul>
    </div>

    <div v-for="(post, index) in posts" :key="index">
    	<div class="grs-card" v-if="post.sex === 'w'">
		    <div class="grs-hero">
          <!--
          <nuxt-img
            :src="post.image"
            quality="70"
            :alt="post.name"
          />
          -->
		    </div>
		    <div class="grs-card-head">
			    <h2>{{ post.name }}</h2>
		    </div>
		    <div class="grs-card-body">
			    <div>配信タイトル:{{ post.title }}</div>
          <div>
            <span v-if="post.type == '1'">LIVECHAT</span>
            <span v-else-if="post.type == '2'">2SHOT</span>
            <span v-else>OPEN</span>
          </div>
          <div>
            {{ post.lang }}
          </div>
		    </div>
        <div class="grs-card-foot">
          <div><a :href="'https://live.fc2.com/'+post.id+'/'" target="_blank">ライブ配信へ</a></div>
        </div>
	    </div>
    </div>

    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <div v-if="post.sex === 'w'">
        <img :src="post.image" alt="" class="list-thumb">
        <a :href="post.id" target="_blank" rel="noopener noreferrer">{{ post.title }}</a><br>
        名前：{{ post.name }}<br>
        視聴数：{{ post.count }}<br>
        性別：{{ post.sex }}<br>
        放送開始日時：{{ $dateTimeToJaDate(post.start_time) }}<br>
        チャンネルタイプ：{{ post.type }}<br>
        制限：{{ post.login }}<br>
        価格：{{ post.pay }}<br>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    async asyncData({ $axios }) {
      const url = "https://live.fc2.com/adult/contents/allchannellist.php";
      const response = await $axios.$get(url);
      return {
        posts: response.channel
      };
    },
    fetch ({store}) {
      store.commit('resetMenu')
    }
  }
</script>

<style lang="scss" scoped>

</style>