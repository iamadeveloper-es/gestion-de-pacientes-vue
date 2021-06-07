<template>
  <div>
    <b-container>
      <b-row>
        <b-col>

        </b-col>
        <b-col>
          <search-bar
          @SearchItem="inptValue = $event"
          >
          </search-bar>
        </b-col>
      </b-row>
    </b-container>
      <b-container>
          <b-row v-if="getPatientList">
            <single-patient
                v-for="(patient, index) of filterPatient" 
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
import SearchBar from '../UI/SearchBar.vue'
import SinglePatient from './SinglePatient.vue'
export default {
  components: { SinglePatient, SearchBar },
    name: 'PatientList',
    data(){
      return{
        inptValue: ''
      }
    },
    computed:{
        filterPatient(){
        return this.getPatientList.filter((patient) => {
          return (
            patient.datos_paciente.nombre.toLowerCase().match(this.inptValue.toLowerCase().trim()) ||
            patient.datos_paciente.apellidos.toLowerCase().match(this.inptValue.toLowerCase().trim())
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