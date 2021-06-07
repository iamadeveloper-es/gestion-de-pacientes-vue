<template>
  <div class="search-bar">
      <input 
        type="text"
        v-model="search"
        @keyup="seachItem($event)"
        >
  </div>
</template>

<script>
export default {
    name: 'SearchBar',
    data(){
      return{
        search: ''
      }
    },
    methods:{
      seachItem(){
        this.$emit('SearchItem', this.search)
      }
    }
}
</script>

<style>

</style>