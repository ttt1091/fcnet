<template>
  <div>
    <ul>
      <li v-if="is_publish === 1">配信中</li>
      <li v-else>配信休止中</li>
      <li>{{ twitter || 'twitter登録無し' }}</li>
    </ul>
    {{ name }}<br>
    {{ age }}<br>
    {{ info }}<br>
    {{ icon }}<br>
    {{ image }}<br>
    {{ channelid }}<br>
    {{ fc2id }}<br>
    {{ $dateTimeToJaDate(start) }}<br>
    {{ is_publish }}<br>
    <div>
      <div>
        <input type="text" :value="name" placeholder="name">
      </div>
      <div>
        <input type="text" :value="age" placeholder="age">
      </div>
      <div>
        <textarea name="" id="" :value="info"></textarea>
      </div>
      <div>
        <textarea name="" id="" :value="channel_info"></textarea>
      </div>
      <div>
        <img :src="icon" alt="">
        <input type="text" :value="icon" placeholder="icon">
      </div>
      <div>
        <img :src="image" alt="">
        <input type="text" :value="image" placeholder="image">
      </div>
      <div>
        <img :src="channel_image" alt="">
        <input type="text" :value="channel_image" placeholder="channel_image">
      </div>
      <div>
        <input type="text" :value="channelid" placeholder="channelid">
      </div>
      <div>
        <input type="text" :value="fc2id" placeholder="fc2id">
      </div>
      <div>
        <input type="text" :value="$dateTimeToJaDate(start)" placeholder="start">
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
        twitter: channelResponse.data.channel_data.tname
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