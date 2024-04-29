import { $apiService } from '../../utils/api-services';

export default {

    Materias: async () => {
        try {
            var res = await $apiService.get('Materias/Listar').then(data => data)
            return res.data;
        } catch (error) {
            return error;
        }
    },

    Agregar: async (data) => {
        try {
            var res = await $apiService.post('Materias/Agregar', data).then(data => data)
            return res;
        } catch (error) {
            return error;
        }
    },

    Actualizar: async (data) => {
        try {
            var res = await $apiService.put('Materias/Editar', data).then(data => data)
            return res;
        } catch (error) {
            return error;
        }
    },
    Eliminar: async (id) => {
        try {
            var res = await $apiService.delete('Materias/Eliminar?id=' + id).then(data => data)
            return res;
        } catch (error) {
            return error;
        }
    },
    ObtenerXId: async (id) => {
        try {
            var res = await $apiService.get('Materias/ObtenerXId?id=' + id).then(data => data)
            return res.data;
        } catch (error) {
            return error;
        }
    }
};