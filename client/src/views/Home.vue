<template>
  <div class="home">
    <Aside />
    <Header />
    <Main />
  </div>
</template>

<script>
import Aside from '@/components/home/Aside'
import Header from '@/components/home/Header'
import Main from '@/components/home/Main'
export default {
  name: 'Home',
  components: {
    Aside,
    Header,
    Main
  },
  data () {
    return {
      headerIsVisible: false
    }
  },
  methods: {
    mediaListen () {
      const mediaResult = window.matchMedia('(max-width: 740px)')
      mediaResult.addEventListener('change', e => {
        if (e.matches) {
        // 小于740
          this.$store.commit('setAsideVisible', false)
        } else {
        // 大于740
          this.$store.commit('setAsideVisible', true)
        }
      })
    }
  },
  mounted () {
    this.mediaListen()
  }
}
</script>

<style>

</style>
