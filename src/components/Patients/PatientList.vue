<template>
  <div>
      <b-container>
          <b-row v-if="getPatientList">
            <single-patient
                v-for="(patient, index) of getPatientList" 
                :key="index"
                :patient="patient"
                :viewOpt="viewOpt"
                :index="index"
            ></single-patient>
          </b-row>
      </b-container>
  </div>
</template>

<script>
import SinglePatient from './SinglePatient.vue'
export default {
  components: { SinglePatient },
    name: 'PatientList',
    computed:{
        filterPatient(){
        return this.getPatientList.filter((patient) => {
          return (
            patient.datos_paciente.nombre.toLowerCase().match(this.searchPatient.toLowerCase().trim()) ||
            patient.datos_paciente.apellidos.toLowerCase().match(this.searchPatient.toLowerCase().trim())
          )
        })
      },
        getPatientList(){
            return this.$store.state.patients
        }
    },
    created(){
        this.$store.dispatch('getPatients')
    }
}
</script>

<style>

</style>