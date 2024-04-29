//import { $apiService } from "../utils/api-services";

import axios from "axios";

const controller = 'api/Grado/'

export default {
    ObtenerGrados: async () => {
        try {
            let res = await axios.get(`https://kiddycheck-api.azurewebsites.net/${controller}ObtenerGrados`);
            return res.data;
        } catch (error) {
            console.error('Error al agregar grado' + error);
            return error;
        }
    },
    ObtenerGradoId: async (id) => {
        try {
            let res = await axios.get(`https://kiddycheck-api.azurewebsites.net/${controller}ObtenerGradoId?Id=${id}`);
            return res.data;
        } catch (error) {
            console.error('Error al agregar grado' + error);
            return error;
        }
    },
    AgregarGrados: async (persona) => {
        try {
            let res = await axios.post(`https://kiddycheck-api.azurewebsites.net/${controller}AgregarGrado`, persona)
            return res
        } catch (error) {
            console.log(error);
            return error
        }
    },

    EditarGrados: async (persona) => {
        try {
            let res = await axios.put(`https://kiddycheck-api.azurewebsites.net/${controller}ModificarGrado`, persona)
            return res
        } catch (error) {
            console.log(error);
            return error
        }
    },
    EliminarGrados: async (id) => {
        try {
            let res = await axios.delete(`https://kiddycheck-api.azurewebsites.net/${controller}EliminarGrado?id=${id}`)
            return res
        } catch (error) {
            console.log(error);
            return error
        }
    },
}