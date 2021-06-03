<template>
  <div>
    <div>
      <button class="button" @click="changeOrder">↑昇降変更↓</button>
    </div>
    <button class="button" @click="register">送信</button>
    <ul>
      <li v-for="(data, index) in sortedAndFiltert" :key="index">{{ index }} / {{ data.name }} / {{ data.count }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: 'new',
  data() {
    return {
      datas: "",
      sortOrder: 1,
    }
  },
  async asyncData({ $axios }) {
    const response = await $axios
      .$get("https://live.fc2.com/adult/contents/allchannellist.php")
      .catch(error => {
        console.log("response error", error);
        return false;
      });
    return { datas: response.channel };
  },
    computed: {
      sortedAndFiltert(){
        return this.datas.filter((filt) => filt.sex === "w" && filt.lang === "ja")
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
    register() {
      const response = this.$axios
      .$get("https://live.fc2.com/adult/contents/allchannellist.php", {
        withCredentials: true
      })
      .catch(error => {
        console.log("response error", error);
        return false;
      });
      this.$axios.defaults.withCredentials = true
      this.datas = response.channel
    }
  },
    fetch ({store}) {
      store.commit('resetMenu')
    }
};
</script>