<template>
  <div id="app">
    <the-header></the-header>
    <main class="main">
      <router-view/>
    </main>
    <the-footer></the-footer>
  </div>
</template>
<script>
import TheFooter from './components/TheFooter.vue'
import TheHeader from './components/TheHeader.vue'
export default{
  components:{
    TheHeader,
    TheFooter
  }
}
</script>
<style lang="scss">
@import '@/scss/main.scss';
</style>
