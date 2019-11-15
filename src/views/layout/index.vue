<template>
  <!-- 布局 -->
  <el-container>
    <!-- 左右布局 -->
    <el-aside width="220px" class="left">
      <!-- 左侧菜单 -->
      <div style="background-color:#000" class="menu-title" >
        <img src="../../assets/logo_admin.png" alt="">
      </div>
      <!-- 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 -->
      <el-menu router style="width:221px" background-color="#353b4e" text-color='#adafb5' active-text-color='#ffd04b'>
        <el-menu-item index="/">首页</el-menu-item>
        <el-submenu index='0'>
          <!-- 加slot=‘title’是为了让其成为一级菜单 -->
          <template slot="title">内容管理</template>
          <!-- 设置index是为了点击跳转时候高亮 -->
          <el-menu-item index="/publish">发布文章</el-menu-item>
          <el-menu-item index="/article">内容列表</el-menu-item>
          <el-menu-item>评论列表</el-menu-item>
          <el-menu-item>素材管理</el-menu-item>
        </el-submenu>
        <el-submenu index='1'>
          <template slot="title">粉丝管理</template>
          <el-menu-item>图文数据</el-menu-item>
          <el-menu-item>粉丝概况</el-menu-item>
          <el-menu-item>粉丝画像</el-menu-item>
          <el-menu-item>粉丝列表</el-menu-item>
        </el-submenu>
         <el-menu-item>账户信息</el-menu-item>
      </el-menu>
    </el-aside>
    <!-- 大容器 -->
    <el-container>
        <el-header>
          <layout-header></layout-header>
        </el-header>
      <el-main>
        <!-- 二级路由容器 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import layoutHeader from '../../components/layout-header.vue'
export default {
  name: 'home',
  components: {
    'layout-header': layoutHeader
  }
}
</script>
<style lang="less" scoped>
  .left {
    height: 100vh;
    background-color: #353b4e;
    overflow: hidden;
    .menu-title {
    padding: 15px 0;
    text-align: center;
    img {
      height: 30px;
    }
  }
}
</style>
