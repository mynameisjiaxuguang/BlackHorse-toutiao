<template>
  <div class="publish">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>发布文章</span>
      </div>
      <el-form ref="form" :model="article" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="article.title"></el-input>
        </el-form-item>
        <quill-editor
          v-model="article.content"
          ref="myQuillEditor"
          :options="editorOption"
        ></quill-editor>
        <el-form-item label="频道">
          <el-select v-model="article.channel_id" placeholder="请选择">
            <el-option label="所有频道" :value='null'></el-option>
            <el-option :label='channel.name' :value="channel.id" v-for="channel in channels" :key="channel.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="封面">
          <el-radio-group>
            <el-radio label="单图"></el-radio>
            <el-radio label="双图"></el-radio>
            <el-radio label="三图"></el-radio>
            <el-radio label="自动"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit(false)">发表</el-button>
          <el-button @click="onSubmit(true)">存入草稿</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
// 引入富文本编辑器的样式文件
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
// 加载富文本编辑器的核心组件
import { quillEditor } from "vue-quill-editor";
export default {
  name: "PublishArticle",
  components: {
    quillEditor
  },
  data() {
    return {
      article: {
        title: "",
        content: "",
        cover: {
          type: 0, //无图
          images: []
        },
        channel_id: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      channels: [],
      editorOption:{}
    };
  },
  created() {
    this.loadChannels();
  },
  methods: {
    onSubmit(draft) {
      this.$axios({
        method: 'POST',
        path: '/articles',
        // Headers参数
        headers: {
          Authorization:`Bearer ${window.localStorage.getItem('user-token')}`
        },
        // Query参数
        params: {
          draft
        },
        // Body参数
        data: this.article
      }).then(res =>{
        console.log(res);
        
      }).catch(err =>{
        console.log(err,'保存失败');
        
      })
    },
    onEditorBlur(quill) {
      console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      console.log("editor ready!", quill);
    },
    onEditorChange({ quill, html, text }) {
      console.log("editor change!", quill, html, text);
      this.content = html;
    },
    loadChannels() {
      this.$axios({
        method: "GET",
        url: "/channels"
      })
        .then(res => {
          this.channels = res.data.data.channels;
        })
        .catch(err => {
          console.log(err, "获取数据失败");
        });
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },
  mounted() {
    console.log("this is current quill instance object", this.editor);
  }
};
</script>

<style>
</style>
