<template>
  <div>
    <input v-model="userId" /> <button @click="onLoadUser">load user</button>
    <nuxt-child />
  </div>
</template>
<script>
export default {
  layout: 'users',
  data() {
    return {
      userId: '',
    }
  },
  methods: {
    onLoadUser() {
      this.$router.push(`/users/${this.userId}`)
    },
  },
}
</script>
<style scoped>
.test {
  color: red;
}
</style>
