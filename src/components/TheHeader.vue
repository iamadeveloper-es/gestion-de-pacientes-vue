<template>
  <div class="header">
      <b-container>
          <b-row>
              <b-col>
                  <main-nav></main-nav>
              </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
import MainNav from './UI/MainNav.vue'
export default {
    name: 'TheHeader',
    components:{
        MainNav
    }
}

</script>

<style lang="scss" scoped>
.header{
    background-color: $turquoise;
    padding: 15px 0;
    box-shadow: 2px 0px 6px rgba(122, 122, 122, .8);
    z-index: 90;
    position: sticky;
    top: 0;
}
</style>