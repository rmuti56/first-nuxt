export default {
  actions: {
    nuxtServerInit({ dispatch }, context) {
      dispatch('post/fetchPosts')
    },
  },
}
