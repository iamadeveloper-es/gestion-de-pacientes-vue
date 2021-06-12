import { axios } from "axios";

const ApiPatients = () => {
    axios.create({
        baseURL: '',
    })
}

export default ApiPatients