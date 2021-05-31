<template>
  <main>
    <div>
    	<div>
        {{name}}
        {{age}}
        <div>
          <nuxt-img
            :src="image"
            quality="70"
            :alt="name"
          />
        </div>
	    </div>
    </div>
  </main>
</template>

<script>
  export default {
    async asyncData({ $axios }) {
      const url = "https://live.fc2.com/api/memberApi.php?streamid=36345418&profile=1"
      const response = await $axios.$get(url)
      return {
        name: response.data.profile_data.name,
        age: response.data.profile_data.age,
        image: response.data.profile_data.image
      }
    },
    data(){
      return{
        users: this.users
      }
    },
    fetch ({store}) {
      store.commit('resetMenu')
    }
  }
</script>

<style lang="scss" scoped>

</style>