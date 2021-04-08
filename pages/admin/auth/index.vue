<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form>
        <BaseControlInput type="email">E-Mail Address</BaseControlInput>
        <BaseControlInput type="password">Password</BaseControlInput>
        <BaseButton type="submit">{{
          isLogin ? 'Login' : 'Sign Up'
        }}</BaseButton>
        <BaseButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin"
          >Switch to {{ isLogin ? 'Signup' : 'Login' }}</BaseButton
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      isLogin: true,
    }
  },
}
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>
