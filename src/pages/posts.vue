<template>
  <main>
    <div>
      <div>
        <button @click="filterUser(1)">user 1</button>
        <button @click="filterUser(2)">user 2</button>
        <button @click="filterUser(3)">user 3</button>
        <div>
          <p>記事の数: {{length}}</p>
        </div>
      </div>
      <div>
        <div>
          <div v-for="(article, i) in viewList" :key="i">
            <div>
              <p>userId:{{article.userId}}</p>
              <div>{{ article.title }}</div>
              <div>{{ article.body }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "news",
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      getList: "posts/getList",
      filterUser: "posts/filterUser",
    }),
  },
  mounted: function () {
   this.getList(this.categories);
  },
  computed: {
    ...mapState({
      viewList: (state) => state.posts.viewList,
      length: (state) => state.posts.length,
    }),
  },
};
</script>