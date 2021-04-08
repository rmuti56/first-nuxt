<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <PostForm :post="post" @onSave="onSave" @onCancel="onCancel" />
    </section>
  </div>
</template>
<script>
import PostForm from '@/components/PostForm.vue'
export default {
  components: { PostForm },
  data() {
    return {
      post: {
        author: 'ssss',
        title: 'dddd',
        thumbnailLink: 'ffff',
        content: 'sssss',
      },
    }
  },
  methods: {
    onSave() {
      console.log(this.editedPost)
    },
    onCancel() {
      this.$router.push('/admin')
    },
  },
}
</script>
