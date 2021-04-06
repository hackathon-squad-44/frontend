import { http } from './config'

export default {

    getById:(id) => {
        return http.get('parent/' + id)
    }

}