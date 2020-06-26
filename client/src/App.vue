<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from '@/views/Home'
export default {
  components: {
    Home
  }
}
</script>

<style lang="scss">
*{
    box-sizing: border-box;
}
a{
  text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
