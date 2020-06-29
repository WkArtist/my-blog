<template>
  <div class="artdetail-container">
    <div class="artdetail-text">
      <h1>{{title}}</h1>
      <div class="artdetail-describe">
        <span>发布日期：{{createdAt}}</span>
        <span>更新日期：{{updatedAt}}</span>
        <span>
          分类：
          <router-link :to="tagPath">{{tag}}</router-link>
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
      title: '',
      createdAt: '',
      updatedAt: '',
      tag: '',
      content: ''
    }
  },
  computed: {
    tagPath () {
      return `/tag/${this.tag.toLowerCase()}`
    }
  },
  methods: {
    getData () {
      fetch(`http://wkartist.com/api/article/detail/${this.$route.params.id}`)
        .then(resp => resp.json())
        .then(resp => {
          console.log(`article[${this.$route.params.id}]detail数据`, resp.data)
          this.title = resp.data.title
          this.createdAt = this.$moment(new Date(resp.data.createdAt)).format('llll')
          this.updatedAt = this.$moment(new Date(resp.data.updatedAt)).format('llll')
          this.tag = resp.data.tag
          this.content = this.mdToHTML(resp.data.content)
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

<style scoped lang="scss">
.artdetail-container {
  line-height: 1.7;

  a {
    color: #2479cc;
  }

  .artdetail-text {
    h1 {
      color: #333;
      font-weight: 400;
    }

    .artdetail-describe {
      color: #999;
      font-size: 0.9em;
      margin-bottom: 2em;

      span {
        margin-right: 15px;
      }
    }

    .artdetail-over {
      margin: 2em 0;
      letter-spacing: 0.3em;
      color: #999;
      text-align: center;
    }
  }
}

</style>
