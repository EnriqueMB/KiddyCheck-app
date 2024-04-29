//import { $apiService } from "../utils/api-services";

import axios from "axios";

const controller = 'api/Grupo/'

export default {
    ObtenerGrupo: async () => {
        try {
            let res = await axios.get(`https://kiddycheck-api.azurewebsites.net/${controller}ObtenerGrupos`);
            return res.data; 
        } catch (error) {
            console.error('Error al agregar grado'+ error);
            return null;
        }
    },
    // ObtenerGrupoId: async (id) => {
    //     try {
    //         let res = await axios.get(`https://kiddycheck-api.azurewebsites.net/${controller}ObtenerGradoId?Id=${id}`);
    //         return res.data; 
    //     } catch (error) {
    //         console.error('Error al agregar grado'+ error);
    //         return null;
    //     }
    // },
    AgregarGrupo: async (persona) => {
        try {
            let res = await axios.post(`https://kiddycheck-api.azurewebsites.net/${controller}AgregarGrupo`, persona)
            return res
        } catch (error) {
            console.log(error);
            return null
        }
    },

    EditarGrupo: async (persona) => {
        try {
            let res = await axios.put(`https://kiddycheck-api.azurewebsites.net/${controller}ModificarGrupo`, persona)
            return res
        } catch (error) {
            console.log(error);
            return null
        }
    },
    EliminarGrupo: async (id) => {
        try {
            let res = await  axios.delete(`https://kiddycheck-api.azurewebsites.net/${controller}EliminarGrupo?id=${id}`)
            return res
        } catch (error) {
            console.log(error);
            return null
        }
    },
}