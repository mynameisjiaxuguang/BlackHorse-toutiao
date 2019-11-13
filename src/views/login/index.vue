<template>
  <div class="login">
    <el-card class="login-card"></el-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang='less' scoped>
.login {
  background-image: url("../../assets/login_bg.jpg");
  background-size: cover;
  //   占当前屏幕高度的100%
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-card {
    width: 400px;
    height: 300px;
  }
}
</style>
