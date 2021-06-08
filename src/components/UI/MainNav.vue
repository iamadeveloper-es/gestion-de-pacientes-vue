<template>
  <div class="nav">
      <ul>
          <li
          v-for="route in routes"
          :key="route.url"
          >
              <router-link
              :class="'nav_link'"
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
    .nav_link{
        color: $white;
        text-decoration: none;
        padding: 10px;
        display: inline-block;
    }
}
</style>