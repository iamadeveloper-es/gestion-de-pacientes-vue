<template>
  <div class="home">
    <patient-list></patient-list>
  </div>
</template>

<script>
import PatientList from '../components/Patients/PatientList.vue'
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    PatientList
    
  }
}
</script>
