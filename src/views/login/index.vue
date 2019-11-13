<template>
  <div class="login">
    <el-card class="login-card">
       <div class="title">
            <img src="../../assets/logo_index.png" alt="">
        </div>
            <el-form style="margin-top:20px">
                <el-form-item>
                 <el-input placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input placeholder="请输入验证码" style="width:240px"></el-input>
                  <el-button style="float:right" plain>发送验证码</el-button>
                </el-form-item>
                <el-form-item>
                    <!-- 复选框 -->
                      <el-checkbox v-model="checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
                </el-form-item>
                <el-form-item  style="text-align:center">
                     <el-button type="primary" style="width:100%">登录</el-button>
                 </el-form-item>
            </el-form>
    </el-card>
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
    padding-bottom: 40px;
    .title {
        text-align: center;
        img {
            height: 45px;
        }
    }
  }
}
</style>
