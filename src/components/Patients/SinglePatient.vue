<template>
  <b-col cols="12" :md="viewOpt ? '6' : '12'" :lg="viewOpt ? '3' : '12'">
    <div class="patient"
    @click="patientDetail(index, $event)"
    :class="viewOpt ? 'card' : 'list'">
      <div class="grid-container">
        <div class="grid-item">
          <div class="patient-info flex-container">
            <div class="flex-item">
              <div class="patient-img">
                <img :src="patientSrc" :alt="patient.datos_paciente.nombre" />
                <div class="patient-img-inner">
                  <div class="initials">
                    <span class="name-initial">{{patient.datos_paciente.nombre | first-char | uppercase}}</span>
                    <span class="lastname-initial">{{patient.datos_paciente.apellidos| first-char | uppercase}}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-item w-100">
              <div class="patient-personal-info">
                <span class="patient-name d-block">
                  {{
                    `${patient.datos_paciente.nombre} ${patient.datos_paciente.apellidos}`
                  }}
                </span>
                <span class="patient-bday cl-medium-grey d-block">
                  <span class="far fa-calendar-alt"></span>
                  {{ patient.datos_paciente.fecha_nacimiento }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="grid-item">
          <span class="clinic">
            {{ patient.ficha_dental.clinica }}
          </span>
        </div>
        <div class="grid-item">
          <span>
              {{ patient.ficha_dental.objetivo_tratamiento }}
          </span>
        </div>
        <div class="grid-item">
          <patient-state
          :patient="patient"
          >
          </patient-state>
        </div>
        <div class="grid-item">
          <select id="" class="form_select"
          v-model="actionSelected"
          @change="action()"
          >
            <option value="" disabled hidden>Acciones</option>
            <option
              v-for="(opt, index) in actions"
              :key="index"
              :value="opt.value.toLowerCase()"
            >
              {{ opt.value }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </b-col>
</template>

<script>
import PatientState from './PatientState.vue';
export default {
  components: { PatientState },
  name: "PatientSingle",
  props: ["patient", "viewOpt", "index"],
  data() {
    return {
      patientSrc: require("@/assets/user.jpeg"),
      actions: [
        { value: "Editar" },
        { value: "Finalizar"},
        { value: "Borrar" }
      ],
      actionSelected: '',
    }
  },
  methods:{
      action(){
        switch (this.actionSelected) {
          case 'editar':
            console.log(this.patient.datos_paciente.id, 'eliminado')
            break;
          case 'finalizar':
            this.patient.ficha_dental.estado = 'facturado'
            this.setStateClass()
            break;
          case 'borrar':
            console.log(this.patient.datos_paciente.id, 'eliminado')
            break;
        }
      },
      patientDetail(index, ev){
        let target = ev.target.getAttribute('class')
        if(target != 'form_select'){
          this.$router.push({ name: 'DetailPatientView', params: { id: index } })
        }
        else{
          return
        }
      }
  },
};
</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  align-items: center;
  width: 100%;
  .grid-item {
    text-align: center;
  }
}
.patient {
  border: 1px solid $dirtyWhite;
  border-radius: 3px;
  cursor: pointer;
  .patient-img {
    overflow: hidden;
    position: relative;
  }
  .patient-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  .patient-img-inner{
    background-color: orange;
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .initials{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
      color: white;
    }
  }
  .form_select{
    max-width: 120px;
  }
  &.list {
    margin-bottom: 5px;
    .grid-container {
      grid-template-columns: repeat(1, 1fr);
      padding: 10px;
    }
    .flex-container {
      align-items: center;
    }
    .patient-img {
      width: 150px;
      border-radius: 50%;
    }
    .patient-personal-info {
      text-align: center;
    }
    .state{
        margin: 15px 0;
    }
  }
  &.card {
    padding-bottom: 15px;
    margin-bottom: 25px;
    .flex-container {
      flex-direction: column;
    }
    .grid-container {
      grid-template-columns: repeat(1, 1fr);
    }
    .grid-item span:not(.state){
        margin: 5px;
    }
    .state{
        margin: 15px 0;
    }
    .patient-img {
      width: 100%;
      max-height: 300px;
    }
    .initials{
      span{
        font-size: 40px;
      }
    }
  }
}
@media screen and(min-width: 758px) {
  .patient {
    &.list {
      .grid-container {
        grid-template-columns: repeat(5, 1fr);
        padding: 10px;
      }
      .patient-img{
          width: 50px;
      }
    }
  }
}
@media screen and(min-width: $lg){
    .patient {
        transition: all .2s ease-in-out;
        &:hover{
            background-color: rgba(173, 173, 173, .2);
        }
        &.list {
            .patient-img{
                margin-right: 15px;
            }
            .patient-personal-info {
                text-align: left;
            }
            .state{
                margin: 0;
            }
        }
    }
}
</style>