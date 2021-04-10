export default {
  state: () => ({
    loadedPosts: [],
  }),
  getters: {
    loadedPosts(state) {
      return state.loadedPosts
    },
    getPostById(state) {
      return function (postId) {
        return state.loadedPosts.find((post) => post.id === postId)
      }
    },
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.loadedPosts = posts
    },
  },
  actions: {
    fetchPosts({ commit }) {
      commit('SET_POSTS', [
        {
          id: '1',
          title: 'First Post',
          previewText: 'This is our first post!',
        },
        {
          id: '2',
          title: 'Second Post',
          previewText: 'This is our second post!',
        },
        {
          id: '3',
          title: 'Third Post',
          previewText: 'This is our third post!',
        },
        {
          id: '4',
          title: 'Fourth Post',
          previewText: 'This is our fourth post!',
        },
      ])
    },
  },
}
