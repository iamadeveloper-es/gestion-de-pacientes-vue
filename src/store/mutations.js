export default {
    GET_PATIENTS(state, res){
        state.patients = res.data.results
      },
      GET_SINGLE_PATIENT(state, {res, id}){
        let idToNum = parseInt(id)
        state.singlePatient = res.data.results[idToNum]
      }
}