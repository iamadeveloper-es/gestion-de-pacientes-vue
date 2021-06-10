<template>
  <form @submit.prevent="submit($event)" class="form">
    <div class="form_group">
        <label for="name">Nombre</label>
        <input type="text" name="name" id="name" class="form_input" required v-model="formData.datos_paciente.nombre">
    </div>
    <div class="form_group">
        <label for="surnames">Apellidos</label>
        <input type="text" name="surnames" id="surnames" class="form_input" required v-model="formData.datos_paciente.apellidos">
    </div>
    <div class="form_group">
        <label for="bday">Fecha de Nacimiento</label>
        <input type="date" name="bday" id="bday" class="form_input" required v-model="formData.datos_paciente.fecha_nacimiento">
    </div>
    <div class="form_group">
        <label class="label-title">Sexo</label>
        <input type="radio" name="gender" id="male" value="M" required v-model="formData.datos_paciente.sexo">
        <label class="label-padding" for="gender">Hombre</label>
        <input type="radio" name="gender" id="female" value="F" v-model="formData.datos_paciente.sexo">
        <label class="label-padding" for="gender">Mujer</label>
    </div>
    <div class="form_group">
        <label for="clinic">Clínica</label>
        <input type="text" name="clinic" id="clinic" class="form_input" required v-model="formData.ficha_dental.clinic">
    </div>
    <div class="form_group">
        <select name="objetive" id="objetive" class="form_select" required v-model="formData.ficha_dental.objetivo_tratamiento">
            <option value="" disabled hidden>Objetivo del Tratamiento</option>
            <option value="Estética y Oclusión">Estética y Oclusión</option>
            <option value="Estética">Estética</option>
        </select>
    </div>
    <div class="form_group">
        <label class="label-title" for="clinic">Recorte Alineadores</label>
        <fieldset id="recorte">
            <input type="radio" name="recorte" id="encia" value="Recortar dejando 1-3 mm de encía" required v-model="formData.ficha_dental.otros_datos.recorte_alineadores">
            <label class="label-padding" for="recorte">Recortar dejando 1-3 mm de encía</label>
            <input type="radio" name="recorte" id="cuellos" value="Recortar a nivel de los cuellos" v-model="formData.ficha_dental.otros_datos.recorte_alineadores">
            <label class="label-padding" for="recorte">Recortar a nivel de los cuellos</label>
        </fieldset>
    </div>
    <div class="form_group">
        <label class="label-title" for="clinic">¿Alineadores pasivos?</label>
        <input type="radio" name="aligners" id="aligners" value="true" required v-model="formData.ficha_dental.otros_datos.alineadores_pasivos">
        <label class="label-padding" for="aligners">Si</label>
        <input type="radio" name="aligners" id="no-aligners" value="false" v-model="formData.ficha_dental.otros_datos.alineadores_pasivos">
        <label class="label-padding" for="aligners">No</label>
    </div>
    <button-component
        :btnType="'submit'"
        :type="['btn-success']"
        :text="'Crear'"
    ></button-component>
    <button-component
        :btnType="'reset'"
        :type="['btn-warning']"
        :text="'Limpiar'"
    ></button-component>
  </form>
</template>

<script>
import ButtonComponent from '../UI/ButtonComponent.vue'
export default {
  components: { ButtonComponent },
    name: 'NewPatientForm',
    data(){
        return{
            formData: {
                datos_paciente:{
                    nombre: '',
                    apellidos: '',
                    fecha_nacimiento: '',
                    sexo: ''
                },
                ficha_dental:{
                    estado: 'Solicitado',
                    clinic: '',
                    objetivo_tratamiento: '',
                    otros_datos: {
                        recorte_alineadores: '',
                        alineadores_pasivos: ''
                    }
                }
            }
        }
    },
    methods:{
        submit(){
            this.$emit('Submit', this.formData)
        },
        /* cleanForm(data){
            for(let obj in data){
                Object.values(obj[data]) = ''
                console.log(this.formData)
            }
        } */
    }
}
</script>

<style>

</style>