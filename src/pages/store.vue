<template>
  <main>
    <div>
      <div>
        <div>
          <p>記事の数: {{length}}</p>
        </div>
      </div>
      <div>
        <div>
          <div v-for="(article, i) in viewList" :key="i">
            <div>
              <p>userId:{{article.id}}</p>
              <div>{{ article.title }}</div>
              <div>{{ article.name }}</div>
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
      getList: "channellist/getList",
    }),
  },
  mounted: function () {
   this.getList(this);
  },
  computed: {
    ...mapState({
      viewList: (state) => state.posts.viewList,
      length: (state) => state.posts.length,
    }),
  },
};
</script>