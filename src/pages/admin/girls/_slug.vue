<template>
  <div class="m-4">
    <div>
      <NuxtLink
        class="button"
        to="/admin/girls/"
      >
        戻る
      </NuxtLink>
    </div>
    <ul>
      <li v-if="is_publish === 1">配信中</li>
      <li v-else>配信休止中</li>
      <li>{{ twitter || 'twitter登録無し' }}</li>
    </ul>
    <div>
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" :value="name" placeholder="name">
        </div>
      </div>
      
      <div class="field">
        <label class="label">Age</label>
        <div class="control">
          <input class="input" type="text" :value="age" placeholder="age">
        </div>
      </div>
      
      <div class="field">
        <label class="label">info</label>
        <div class="control">
          <textarea name="" id="" class="textarea" :value="info"></textarea>
        </div>
      </div>
      
      <div class="field">
        <label class="label">channel_info</label>
        <div class="control">
          <textarea name="" id="" class="textarea" :value="channel_info"></textarea>
        </div>
      </div>
      
      <div class="field">
        <label class="label">icon</label>
        <div class="control">
          <img :src="icon" alt="">
          <input class="input" type="text" :value="icon" placeholder="icon">
        </div>
      </div>
      
      <div class="field">
        <label class="label">image</label>
        <div class="control">
          <img :src="image" alt="">
          <input class="input" type="text" :value="image" placeholder="image">
        </div>
      </div>
      
      <div class="field">
        <label class="label">channel_image</label>
        <div class="control">
          <img :src="channel_image" alt="">
          <input class="input" type="text" :value="channel_image" placeholder="channel_image">
        </div>
      </div>
      
      <div class="field">
        <label class="label">channelid</label>
        <div class="control">
          <input class="input" type="text" :value="channelid" placeholder="channelid">
        </div>
      </div>
      
      <div class="field">
        <label class="label">fc2id</label>
        <div class="control">
          <input class="input" type="text" :value="fc2id" placeholder="fc2id">
        </div>
      </div>
      
      <div class="field">
        <label class="label">start</label>
        <div class="control">
          <input class="input" type="text" :value="$dateTimeToJaDate(start)" placeholder="start">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    async asyncData({ params }) {
      const slug = params.slug
      return { slug }
    },
    async asyncData({ $axios, params }) {
      const url = '/girl/?streamid='+params.slug+'&profile=1'
      const profile = await $axios.$get(url)
      const channelUrl = '/girl/?streamid='+params.slug+'&channel=1'
      const channelResponse = await $axios.$get(channelUrl)
      return {
        name: profile.data.profile_data.name,
        age: profile.data.profile_data.age,
        info: profile.data.profile_data.info,
        channel_info: channelResponse.data.channel_data.info,
        icon: profile.data.profile_data.icon,
        image: profile.data.profile_data.image,
        channel_image: channelResponse.data.channel_data.image,
        channelid: channelResponse.data.channel_data.channelid,
        fc2id: profile.data.profile_datafc2id,
        start: channelResponse.data.channel_data.start,
        is_publish: channelResponse.data.channel_data.is_publish,
        twitter: channelResponse.data.channel_data.tname,
        fee:  channelResponse.data.channel_data.fee, // 放送種別 [0=無料] [1=有料]
        amount: channelResponse.data.channel_data.amount, // 有料放送時の消費ポイント
        interval: channelResponse.data.channel_data.interval, // 有料放送時の消費インターバル
        count: channelResponse.data.channel_data.count // 視聴人数
      }
    },
    data(){
      return{
        ins: this.slug
      }
    },
    fetch ({store}) {
      store.commit('resetMenu')
    }
  }
</script>

<style lang="scss" scoped>
input{
  width: 100%;
}
textarea{
  width: 100%;
  height: 100px;
}
</style>