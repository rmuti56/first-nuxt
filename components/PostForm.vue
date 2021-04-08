<template>
  <form @submit.prevent="onSave">
    <ControlInput v-model="editedPost.author">Author Name </ControlInput>
    <ControlInput v-model="editedPost.title"> Title </ControlInput>
    <ControlInput v-model="editedPost.thumbnailLink"
      >Thumbnail Link
    </ControlInput>
    <ControlInput v-model="editedPost.content" control-type="textarea"
      >Content
    </ControlInput>
    <Button type="submit"> Content </Button>
    <Button
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel"
      >Cancel
    </Button>
  </form>
</template>
<script>
import ControlInput from '@/components/Base/ControlInput.vue'
import Button from '~/components/Base/Button.vue'
export default {
  components: {
    Button,
    ControlInput,
  },
  props: {
    post: {
      type: Object,
      required: false,
      default: undefined,
    },
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: '',
            title: '',
            thumbnailLink: '',
            content: '',
          },
    }
  },
  methods: {
    onSave() {
      this.$emit('onSave')
    },
    onCancel() {
      this.$emit('onCancel')
    },
  },
}
</script>
