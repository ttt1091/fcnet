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
  async getList({ commit }) {
    const list = await this.$axios.$get(
      "https://live.fc2.com/adult/contents/allchannellist.php"
    ).channel;

    commit("setList", list);
    commit("setViewList", list);
    commit("setLength", list.length);
  },
};
