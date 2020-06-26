import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    asideVisible: true,
    articleList: []
  },
  mutations: {
    setAsideVisible (state, value) {
      state.asideVisible = value
    },
    setArticleList (state, value) {
      state.articleList = value
      console.log(state.articleList)
    }
  },
  actions: {
    getArticleList ({ commit }, params) {
      let url = 'http://127.0.0.1:9527/api/article/'
      if (params) {
        url = `http://127.0.0.1:9527/api/article/?page=${params.page || 1}&limit=${params.limit || 5}&tag=${params.tag}`
      }
      fetch(url)
        .then(resp => resp.json())
        .then(resp => {
          commit('setArticleList', resp.data.datas)
        })
    }
  },
  modules: {
  }
})
