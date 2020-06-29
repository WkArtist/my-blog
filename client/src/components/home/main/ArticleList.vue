<template>
  <div class="article-list-container">
    <div class="article-list">
      <ArticleCard v-for="(item, index) in $store.state.articleList" :propsData="$store.state.articleList[index]" :key="item.id"/>
    </div>
    <div class="pager-container">
      <el-pagination layout="prev, pager, next" :total="3"></el-pagination>
    </div>
  </div>
</template>

<script>
import ArticleCard from './ArticleCard'
export default {
  components: {
    ArticleCard
  },
  methods: {

  },
  mounted () {

  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$store.dispatch('getArticleList', { tag: vm.$route.params.tag ? vm.$route.params.tag : '' })
    })
  }
}
</script>

<style scoped lang="scss">
.article-list-container .pager-container {
  display: flex;
  justify-content: center;
  padding-top: 20px;
  border-top: 1px solid #ddd;
}
</style>
