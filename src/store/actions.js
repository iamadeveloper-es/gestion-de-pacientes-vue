import axios from "axios"

export default {
    getPatients({commit}){
      axios.get('pacientes.json')
        .then(
          res => commit('GET_PATIENTS', res)
        )
        .catch(
          err => console.log(err)
        )
    },
    getSinglePatient({commit}, id){
      axios.get('pacientes.json')
        .then(
          res => commit('GET_SINGLE_PATIENT', {res, id})
        )
        .catch(
          err => console.log(err)
        )
    }
  }