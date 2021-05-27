<template>
  <div>
    <ul>
      <!-- member apiはチャンネルID必須っぽい -->
      <li v-for="(member, index) in members" :key="index">
        <img src="" alt="">
        <a :href="member.userid" target="_blank" rel="noopener noreferrer">{{ member.name }}</a><br>
        視聴数({{ member.count }})
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    async asyncData({ $axios }) {
      // 取得先のURL
      const url = "https://live.fc2.com/api/memberApi.php";
      // リクエスト（Get）
      const response = await $axios.$get(url);
      // 配列で返ってくるのでJSONにして返却
      return {
        members: response.data.profile_data
      };
    }
  }
</script>

<style lang="scss" scoped>

</style>