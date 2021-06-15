<template>
  <div>
    {{ name }}<br>
    {{ age }}<br>
    {{ info }}<br>
    {{ icon }}<br>
    {{ image }}<br>
    {{ channelid }}<br>
    {{ fc2id }}<br>
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
      const response = await $axios.$get(url)
      const channelUrl = '/girl/?streamid='+params.slug+'&channel=1'
      const channelResponse = await $axios.$get(channelUrl)
      return {
        name: response.data.profile_data.name,
        age: response.data.profile_data.age,
        info: response.data.profile_data.info,
        icon: response.data.profile_data.icon,
        image: response.data.profile_data.image,
        channelid: channelResponse.data.channel_data.channelid,
        fc2id: response.data.profile_datafc2id
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