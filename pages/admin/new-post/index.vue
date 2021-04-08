<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <PostForm @onSave="onSave" @onCancel="onCancel" />
    </section>
  </div>
</template>
<script>
export default {
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
