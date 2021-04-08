<template>
  <div class="post-list">
    <PostPreview
      v-for="post of posts"
      :key="post.id"
      :is-admin="isAdmin"
      :post-id="post.id"
      :title="post.title"
      :preview-text="post.previewText"
    />
  </div>
</template>
<script>
import PostPreview from '@/components/PostPreview.vue'
export default {
  components: {
    PostPreview,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>
<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
