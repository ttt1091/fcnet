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
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <img :src="post.image" alt="" class="list-thumb">
        <a :href="post.id" target="_blank" rel="noopener noreferrer">{{ post.title }}</a><br>
        名前：{{ post.name }}<br>
        視聴数：{{ post.count }}<br>
        性別：{{ post.sex }}<br>
        放送開始日時：{{ $dateTimeToJaDate(post.start_time) }}<br>
        チャンネルタイプ：{{ post.type }}<br>
        制限：{{ post.login }}<br>
        価格：{{ post.pay }}<br>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    async asyncData({ $axios }) {
      // 取得先のURL
      const url = "https://live.fc2.com/adult/contents/allchannellist.php";
      // リクエスト（Get）
      const response = await $axios.$get(url);
      // 配列で返ってくるのでJSONにして返却
      return {
        posts: response.channel
      };
    }
  }
</script>

<style scoped>
.list-thumb{
  width: 50px;
}
</style>