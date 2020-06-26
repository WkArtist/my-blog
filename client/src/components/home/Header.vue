<template>
  <div class="header-container">
      <div :class="['header-container-fixed',{'shrink':$store.state.asideVisible}]">
        <h1 class="header-title">wk的博客</h1>
        <div class="header-logo">
            <router-link to="/">
                <img src="../../assets/img/avatar.jpg" alt="wk的博客">
            </router-link>
        </div>
        <div class="header-switch">
            <i :class="!$store.state.asideVisible?'el-icon-s-unfold':'el-icon-s-fold'" @click="asideToggle"></i>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    asideToggle () {
      this.$store.commit('setAsideVisible', !this.$store.state.asideVisible)
    }
  }
}
</script>

<style scoped>
    @media (max-width: 740px) {
        .header-container{
            display: block !important;
        }
    }
    .header-container{
        display: none;
        height: 50px;
    }
    .header-container .header-container-fixed{
        background: #323436;
        color: #ccc;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1;
        width: 100%;
        height: 50px;
        line-height: 50px;
        display: flex;
        padding: 0 10px;
        transition: .2s linear;
    }
    .header-container .header-container-fixed.shrink{
        left: 250px;
    }
    .header-container .header-container-fixed .header-title{
        flex: 1 1 auto;
        margin: 0;
        text-align: center;
        font-size: 1em;
        order: 2;
    }
    .header-container .header-container-fixed .header-logo{
        flex: 0 0 auto;
        order: 3;
    }
    .header-container .header-container-fixed .header-logo img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-top: 10px;
    }
    .header-container .header-container-fixed .header-switch{
        order: 1;
        flex: 0 0 auto;
        cursor: pointer;
        font-size: 1.7em;
    }
</style>
