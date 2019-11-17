<template>
  <div class="article">
    <!-- 表格 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>全部图文</span>
      </div>
      <el-form ref="form" label-width="80px">
        <el-form-item label="文章状态">
          <el-radio-group v-model="filterForm.status">
            <el-radio label="全部"></el-radio>
            <el-radio label="草稿"></el-radio>
            <el-radio label="待审核"></el-radio>
            <el-radio label="审核通过"></el-radio>
            <el-radio label="审核失败"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道列表">
          <el-select placeholder="请选择活动区域" v-model="filterForm.channel_id">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间选择 ">
          <div class="block">
            <span class="demonstration"></span>
            <el-date-picker
              v-model="rangeDate"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </div>
          <el-col class="line" :span="2"></el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 文章列表 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>共找到59806条符合条件的内容</span>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column  prop="date" label="封面" width="180">
          <!-- scope.row相当于我们自己的v-for的item -->
          <template slot-scope="scope"><img width='50' :src="scope.row.cover.images[0]"></template>
        </el-table-column>
        <el-table-column prop="title" label="标题" width="180"></el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
           <!-- <span>{{ articleStatus[scope.row.status].label }}</span> -->
           <el-tag 
           :type="articleStatus[scope.row.status]">{{ articleStatus[scope.row.status].label }}
           </el-tag>
            </template>
            </el-table-column>
        <el-table-column prop="pubdate" label="发布日期"></el-table-column>
        <el-table-column prop="address" label="操作">
          <template>
            <el-button type="danger" size="mini">删除</el-button>
            <el-button type="primary" size="mini">编辑</el-button>
            </template>  
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template> 

<script>
export default {
  name: "Article",
  data() {
    return {
      // 过滤数据的表单
      filterForm: {
        status: "",
        channel_id: "",
        begin_pubdate: "",
        end_pubdate: ""
        // page: '',
        // per_page: '',
        // response_type: ''
      },
      rangeDate: [],
       tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
          articles: [],//文章列表
          articleStatus: [
            {
              // value: 0,
              type:'',
              label: '草稿'
            },{
              // value: 1,
              type:'warning',
              label: '待审核'
            },{
              // value: 2,
              type:'success',
              label: '审核通过'
            },{
              // value: 3,
              type:'danger',
              label: '审核失败'
            },{
              // value: 4,
              type:'info',
              label: '已删除'
            }
          ]
    }
  },
  methods: {
    loadArticles () {
      const token = window.localStorage.getItem('my-token')
    this.$axios({
      method: 'GET',
      url: '/articles',
      headers: {
        //添加请求头，名字：值 后端要求把token放到请求头中
        Authorization:`Bearer ${token}`
      },
      // },
      // params: {
      //   page: 1,
      //   per_page: 10
      // }
    }).then(res =>{
      console.log(res)
      this.tableData = res.data.data.results
      console.log(this.articles)
      
    }).catch(err =>{
      console.log(err,'获取失败');
      
    })
    }
  },
  created () {
    this.loadArticles ()
  }
};
</script>

<style>
</style>
