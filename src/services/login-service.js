import { $apiService } from '../utils/api-services';

export default {

    Login: async (data) => {
        try {
            var res = await $apiService.post('/Auth/Login', data).then(data => data)
            return res.data;
        } catch (error) {
            return error;
        }
    }
}