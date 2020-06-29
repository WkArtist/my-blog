<template>
  <div :class="['aside-container',{'hide':!$store.state.asideVisible}]">
    <div class="aside-profile">
      <router-link to="/">
        <img src="../../assets/img/avatar.jpg" alt="wk的博客" />
      </router-link>
      <span class="aside-profile-title">wk的博客</span>
      <span class="aside-profile-description">初级工程师一枚</span>
    </div>
    <ul class="aside-buttons">
      <li class="active">
        <router-link to="/" exact-active-class="router-active">
          <span>首页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/tag/vue" exact-active-class="router-active">
          <span>Vue</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {},
  mounted () {}
}
</script>

<style scoped lang="scss">
.aside-container {
  position: fixed;
  width: 250px;
  height: 100%;
  background: #202020;
  color: #ccc;
  left: 0;
  top: 0;
  transition: 0.2s linear;

  &.hide {
    left: -250px;
  }

  .aside-profile{
    padding: 40px 0 10px;
    text-align: center;

    img{
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
  }

  .aside-profile span {
    display: block;
    padding: 10px 0;

    &.aside-profile-description {
      color: #666;
      font-size: 14px;
    }

    &.aside-profile-title {
      font-size: 18px;
    }
  }

  .aside-buttons {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      height: 45px;
      line-height: 45px;
      text-align: center;

      a {
        display: block;
        color: #999;
        &:hover{
          color: #fff;
        }
      }

      .router-active{
        color: #fff;
        text-decoration: underline;
      }
    }
  }
}

</style>
