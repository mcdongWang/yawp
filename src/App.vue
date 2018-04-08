<template>
  <div id="app">
    <header-wrap></header-wrap>
    <router-view/>
    <footer-wrap></footer-wrap>
  </div>
</template>

<script>
import headerWrap from './components/header'
import footerWrap from './components/footer'
export default {
  name: 'App',
  components: {
    headerWrap,
    footerWrap
  }
}
</script>
<style>
#app{
  background-color: #f9f9f9;
}
</style>
