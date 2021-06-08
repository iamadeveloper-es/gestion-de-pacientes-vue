<template>
  <div class="search-bar">
      <input 
        class="form_input"
        type="text"
        :placeholder="placeholderText"
        v-model="search"
        @keyup="seachItem($event)"
        >
  </div>
</template>

<script>
export default {
    name: 'SearchBar',
    props:{
      placeholderText: String
    },
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

<style lang="scss" scoped>
.form_input{
  background-color: $lightWhite;
}
</style>