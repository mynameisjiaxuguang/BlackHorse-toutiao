<template>
  <!-- 头部组件 el-row布局 -->
  <el-row type='flex' justify="space-between" align="middle">
      <!-- 左侧 -->
      <el-col :span="6" class='left'>
          <!-- 左侧 -->
          <i class='el-icon-s-fold'></i>
          <span>江苏传智播客教育科技股份有限公司</span>
      </el-col>
      <!-- 右侧 -->
      <el-col :span="4" class='right'>
          <span style="margin-right:15px">消息</span>
          <!-- 头像 -->
          <img src="../assets/avatar.jpg" alt="">
          <!-- 下拉菜单 -->
          <el-dropdown trigger="click">
            <span>水若寒宇</span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>账户信息</el-dropdown-item>
                <el-dropdown-item>git地址</el-dropdown-item>
                <el-dropdown-item @click.native='onLogout'>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
      </el-col>

  </el-row>
</template>

<script>
export default {
    methods: {
        onLogout () {
          this.$confirm('确定退出吗?', '退出提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            window.localStorage.removeItem('user-token')
              this.$router.push('/login')
          this.$message({
            type: 'success',
            message: '退出成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消退出'
          })      
        })
        }
    }
}
</script>

<style lang='less' scoped>
 .left {
     display: flex;
     align-items: center;
     i {
         font-size:16px;
     }
     span {
         margin-left:4px;
     }
 }
 .right {
     display: flex;
     align-items: center;
     img {
         border-radius: 50%;
         margin-right:5px;
     }
 }
</style>
