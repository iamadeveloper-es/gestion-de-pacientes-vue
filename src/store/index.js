import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    patients: []
  },
  mutations: {
    GET_PATIENTS(state, res){
      state.patients = res.data.results
    }
  },
  actions: {
    getPatients({commit}){
      axios.get('pacientes.json')
        .then(
          res => commit('GET_PATIENTS', res)
        )
        .catch(
          err => console.log(err)
        )
    }
  },
  modules: {
  }
})
