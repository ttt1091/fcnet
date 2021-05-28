
export const state = () => ({
  list: [],
  viewList: [],
  length: 0
});

export const mutations = {
  setList(state, list) {
    state.list = list;
  },
  setViewList(state, viewList) {
    state.viewList = viewList;
  },
  setLength(state, length) {
    state.length = length;
  }
};

export const actions = {
  // APIから記事を取得する
  async getList({ commit }, categories) {
    const list = await this.$axios.$get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    // 記事数が100件だとサンプルとして紹介しにくいので3分の1に絞りこむ
    const oddIdList = list.filter(article => article.id % 3 === 0);

    commit("setList", oddIdList);
    commit("setViewList", oddIdList);
    commit("setLength", oddIdList.length);
  },

  // 選択されたカテゴリに一致する記事を絞り込む
  filterUser({ commit, state }, selectedId) {
    const viewList = state.list.filter(
      article => article.userId === selectedId
    );
    commit("setViewList", viewList);
    commit("setLength", viewList.length);
  }
};
