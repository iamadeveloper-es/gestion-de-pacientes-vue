<template>
  <span
        class="state"
        :class="stateClass"
    >
        {{ patient.ficha_dental.estado | capitalize }}
    </span>
</template>

<script>
export default {
    name: 'PatientState',
    props:{
        patient: Object,
    },
    data(){
        return{
            stateClass: ''
        }
    },
    methods:{
        setStateClass(){
          const state = this.patient.ficha_dental.estado
          const stateToLower = state.toLowerCase()
          switch (stateToLower) {
              case 'planificando':
                  this.stateClass = 'bg-warning'
                  break;
            case 'facturado':
                  this.stateClass = 'bg-danger'
                  break;
            case 'solicitado':
                  this.stateClass = 'bg-primary-blue'
                  break;
            case 'enviado':
                  this.stateClass = 'bg-success'
                  break;
          }
      },
    },
    mounted(){
        this.setStateClass()
    }
}
</script>

<style lang="scss" scoped>
    .state{
        display: inline-block;
        text-align: center;
        padding: 9px 7px;
        min-width: 110px;
        border-radius: 25px;
        color: $white;
    }
@media screen and(min-width: $lg){
    .state{
        min-width: 150px;
    }
}
</style>