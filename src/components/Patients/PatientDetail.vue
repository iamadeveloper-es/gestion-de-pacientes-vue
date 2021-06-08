<template>
  <div class="patient-detail">
    <title-component
    :title="'Ficha de Paciente'"
    ></title-component>
  </div>
</template>

<script>
import TitleComponent from '../UI/TitleComponent.vue'
export default {
  components: { TitleComponent },
    name: 'PatientDetail'
}
</script>

<style>

</style>