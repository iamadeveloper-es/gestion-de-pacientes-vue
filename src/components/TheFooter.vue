<template>
  <div class="footer">
      <b-container>
          <b-row>
              <b-col class="text-center">
                  <p class="mb-0">{{ mssg }}</p>
              </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
export default {
    name: 'TheFooter',
    data(){
        return{
            mssg: 'Aplicación de Pacientes 2021'
        }
    }
}
</script>

<style lang="scss" scoped>
.footer{
    padding: 35px 0;
    background-color: $lightWhite;
    margin-top: 80px;
    p{
        color: $darkBlue;
    }
}
</style>