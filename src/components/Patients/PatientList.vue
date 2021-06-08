<template>
  <div>
    <title-component
      :title="'Listado de Pacientes'"
    ></title-component>
    <b-container class="mb-3">
      <b-row class="align-items-center">
        <b-col cols="12" lg="3" class="mb-4 mb-lg-0">
          <button-component
          :text="'Nuevo Paciente'"
          :type="['btn-lg', 'outline-turquoise']"
          >
          </button-component>
        </b-col>
        <b-col cols="12" lg="3" class="mb-4 mb-lg-0">
          <button-component
          :text="'Descargar CSV'"
          :type="['btn-lg', 'outline-turquoise']"
          >
          </button-component>
        </b-col>
        <b-col cols="12" lg="6">
          <search-bar
          :placeholderText="'...Buscar'"
          @SearchItem="inptValue = $event"
          >
          </search-bar>
        </b-col>
      </b-row>
    </b-container>
    <patient-bottom-menu
    :title="'Selecciona el modo de vista'"
    @viewOptList="changeviewOpt($event)"
    @viewOptCard="changeviewOpt($event)"
    ></patient-bottom-menu>
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
import PatientBottomMenu from './PatientBottomMenu.vue'
import TitleComponent from '../UI/TitleComponent.vue'
import ButtonComponent from '../UI/ButtonComponent.vue'
export default {
  components: { SinglePatient, SearchBar, PatientBottomMenu, TitleComponent,  ButtonComponent  },
    name: 'PatientList',
    data(){
      return{
        inptValue: '',
        viewOpt: false
      }
    },
    methods:{
      changeviewOpt(ev){
        this.viewOpt = ev
      },
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