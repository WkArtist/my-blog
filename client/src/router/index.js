import Vue from 'vue'
import VueRouter from 'vue-router'
import ArticleList from '../components/home/main/ArticleList.vue'
import ArticleDetail from '../components/home/main/ArticleDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ArticleList',
    component: ArticleList
  },
  {
    path: '/article/:id',
    name: 'ArticleDetail',
    component: ArticleDetail
  },
  {
    path: '/tag/:tag',
    name: 'Tag',
    component: ArticleList
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'router-active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
