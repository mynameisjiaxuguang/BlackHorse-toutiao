<template>
  <div class="login">
    <el-card class="login-card">
      <div class="title">
        <img src="../../assets/logo_index.png" alt />
      </div>
      <el-form ref="formObj" :model="loginForm" :rules="loginRules" style="margin-top:20px">
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:240px"></el-input>
          <el-button style="float:right" plain>发送验证码</el-button>
        </el-form-item>
        <!-- <el-form-item prop="checked"> -->
        <!-- 复选框 -->
        <!-- <el-checkbox>我已阅读并同意用户协议和隐私条款</el-checkbox> -->
        <!-- </el-form-item> -->
        <el-form-item prop="type">
          <el-checkbox-group v-model="loginForm.type">
            <el-checkbox label="请同意协议" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item style="text-align:center">
          <el-button type="primary" @click="login" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
// import { log } from 'util'
// import func from '../../../vue-temp/vue-editor-bridge'
export default {
  data () {
    return {
      loginForm: {
        mobile: '',
        code: '',
        checked: false,
        type: []
      },
      loginRules: {
        // key:value
        mobile: [
          { required: true, message: '请输入您的手机号' },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: '请输入正确的手机号'
          }
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: '不同意不行',
            trigger: 'change'
          }
        ],
        code: [
          { required: true, message: '请输入您的验证码' },
          {
            pattern: /^\d{6}$/,
            message: '请输入6位数字'
          }
        ],
        checked: [
          {
            validator: function (rule, value, callback) {
              // rule:当前规则  value：当前表单域的值  callback：回调函数
              if (value) {
                callback()
              } else {
                callback(new Error('您必须无条件同意被我们坑'))
              }
            }
          }
        ]
        // { min: 3, max: 5, message: '长度在3到5个字符', trigger: 'blur' }
      }
    }
  },
  methods: {
    login () {
      this.$refs.formObj.validate(function (isOK) {
        if (isOK) {
          this.$axios({
            url: '/authorizations',
            data: this.loginForm,
            method: 'post'
          })
            .then(result => {
              // console.log(result.data.data.token)
              window.localStorage.setItem('user-token', result.data.data.token)
              this.$router.push('/home')
            })
            .catch(() => {
              this.$message({
                type: 'warning',
                message: '手机号或者验证码错误'
              })
            })
        }
      })
    }
  }
}
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
