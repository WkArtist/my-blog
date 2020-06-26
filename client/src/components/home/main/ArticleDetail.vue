<template>
  <div class="artdetail-container">
    <div class="artdetail-text">
      <h1>vue-socket.io3.08，3.09有bug接收不到数据</h1>
      <div class="artdetail-describe">
        <span>发布日期：2020/5/3</span>
        <span>更新日期：2020/5/3</span>
        <span>
          分类：
          <router-link to="/">Vue</router-link>
        </span>
      </div>
      <div class="artdetail-content" v-html="content"></div>
      <div class="artdetail-over">&lt;&lt;完&gt;&gt;</div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import hljs from 'highlight.js'
export default {
  data () {
    return {
      content: ''
    }
  },
  methods: {
    getData () {
      fetch(`http://127.0.0.1:9527/api/article/detail/${this.$route.params.id}`)
        .then(resp => resp.json())
        .then(resp => {
          this.content = this.mdToHTML(resp.data)
        })
    },
    mdToHTML (str) {
      marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: function (code) {
          return hljs.highlightAuto(code).value
        },
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false
      })
      return marked(str)
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style scoped>
.artdetail-container {
  line-height: 1.7;
}
.artdetail-container a {
  color: #2479cc;
}
.artdetail-container .artdetail-text h1 {
  color: #333;
  font-weight: 400;
}
.artdetail-container .artdetail-text .artdetail-describe {
  color: #999;
  font-size: 0.9em;
  margin-bottom: 2em;
}
.artdetail-container .artdetail-text .artdetail-describe span {
  margin-right: 15px;
}
.artdetail-container .artdetail-text .artdetail-over {
  margin: 2em 0;
  letter-spacing: 0.3em;
  color: #999;
  text-align: center;
}
</style>
