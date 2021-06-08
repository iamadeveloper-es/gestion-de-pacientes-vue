<template>
  <div class="title-component">
      <b-container>
          <b-row>
              <b-col>
                  <h2 class="title">{{ title }}</h2>
              </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
export default {
    name: 'TitleComponent',
    props:{
        title: String
    }
}
</script>

<style lang="scss" scoped>
.title-component{
    padding: 25px 0;
    background-color: $lightWhite;
    margin-bottom: 40px;
    .title{
        color: $darkBlue;
        margin-bottom: 0;
    }
}
</style>