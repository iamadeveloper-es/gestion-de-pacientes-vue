<template>
  <div class="nav">
      <ul>
          <li
          v-for="route in routes"
          :key="route.url"
          >
              <router-link
              :class="'nav-link'"
              :to="route.url"
              >
              {{ route.pathName }}
              </router-link>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'MainNav',
    data(){
        return{
            routes: [
                {
                    pathName: 'Inicio',
                    url: '/'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.nav{
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .nav-link{
        color: $white;
    }
}
</style>