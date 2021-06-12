<template>
  <div class="patient-detail">
    <title-component
    :title="'Ficha de Paciente'"
    ></title-component>
    <b-container v-cloak>
      <b-row>
        <b-col cols="12" lg="8" class="mx-lg-auto">
          <div class="patient" v-if="singlePatient">
            <div class="flex-container">
              <div class="flex-item">
                <div class="patient-initials">
                  <div class="initials">
                    <span class="name-initial">{{singlePatient.datos_paciente.nombre | first-char | uppercase}}</span>
                    <span class="lastname-initial">{{singlePatient.datos_paciente.apellidos| first-char | uppercase}}</span>
                  </div>
                </div>
              </div>
              <div class="flex-item patient-info">
                <div class="patient-item">
                  <strong>Clínica:</strong>
                  <br>
                  <span>
                    {{ singlePatient.ficha_dental.clinica }}
                  </span>
                </div>
                <div class="patient-item">
                  <strong>Nombre:</strong>
                  <br>
                  <span>
                    {{ singlePatient.datos_paciente.nombre }}
                  </span>
                </div>
                <div class="patient-item">
                  <strong>Apellidos:</strong>
                  <br>
                  <span>
                    {{ singlePatient.datos_paciente.apellidos }}
                  </span>
                </div>
                <div class="patient-item">
                  <strong>Fecha de Nacimiento:</strong>
                  <br>
                  <span>
                    {{ singlePatient.datos_paciente.fecha_nacimiento }}
                  </span>
                </div>
              </div>
            </div>
            <div class="flex-container">
              <div class="flex-item patient-teeth">
                <div class="patient-img">
                  <img 
                    :src="teethSrc" 
                    alt=""
                    class="img-fluid"
                    >
                </div>
              </div>
              <div class="flex-item patient-info">
                <div class="patient-item">
                  <strong>Estado:</strong>
                  <br>
                  <patient-state
                    :patient="singlePatient"
                    :ref="'patientState'"
                  ></patient-state> 
                </div>
                <div class="patient-item">
                  <strong>Objetivo del Tratamiento:</strong>
                  <br>
                  <span>
                    {{ singlePatient.ficha_dental.objetivo_tratamiento }}
                  </span>
                </div>
                <div class="patient-item">
                  <strong>RECORTE DE ALINEADORES</strong>
                  <br>
                  <span>
                    {{ singlePatient.ficha_dental.otros_datos.recorte_alineadores }}
                  </span>
                </div>
                <div class="patient-item">
                  <strong>¿Desea alineadores pasivos?</strong>
                  <br>
                  <span v-if="singlePatient.ficha_dental.otros_datos.alineadores_pasivos === true ? aligners = 'Si' : aligners = 'No'">
                    {{ aligners }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TitleComponent from '../UI/TitleComponent.vue'
import PatientState from './PatientState.vue';
export default {
    components: { TitleComponent, PatientState },
    name: 'PatientDetail',
    data(){
      return{
        patient: {},
        aligners: '',
        teethSrc: require('@/assets/maxilar.png')
      }
    },
    computed:{
      singlePatient(){
        return this.$store.getters.getSingle;
      }
    },
   created(){
      let payload = this.$route.params.id
      this.$store.dispatch('getSinglePatient', payload)
      this.singlePatient
    }
}
</script>

<style lang="scss" scoped>
[v-cloak]{
  display: none
}
.patient{
  .flex-container{
    display: flex;
    border-radius: 5px;
    border: 1px solid $dirtyWhite;
    &:nth-child(2){
      margin-top: 25px;
    }
  }
  .flex-item{
    width: 100%;
  }
  .patient-info .patient-item{
    border-top: 1px solid $dirtyWhite;
    border-bottom: 1px solid $dirtyWhite;
    border-left: 1px solid $dirtyWhite;
    padding: 20px;
    &:last-child{
      border-bottom: none;
    }
    &:nth-child(odd){
      border-top: none;
      border-bottom: none;
    }
  }
  .patient-initials{
    overflow: hidden;
    position: relative;
    border-radius: 100%;
    background-color: $turquoise;
    color: $white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    @include MarginAuto;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .initials span{
      font-size: 50px;
  }
  .patient-img{
    max-width: 200px;
    @include MarginAuto;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  /* .patient-img-inner{
    width: 
  } */
}


@media screen and(min-width: $lg){
    .patient{
      .flex-container{
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
      .flex-item{
        width: 50%;
      }
    }
}
</style>