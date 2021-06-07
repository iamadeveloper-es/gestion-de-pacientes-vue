<template>
  <div id="app">
    <main class="main">
      <home></home>
    </main>
  </div>
</template>
<script>
import Home from './views/Home.vue'
export default{
  components:{
    Home
  }
}
</script>
<style lang="scss">
@import '@/scss/main.scss';
</style>
