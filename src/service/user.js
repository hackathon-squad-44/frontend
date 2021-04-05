import { http } from './config'

export default {

    salvar:(userForm) => {
        return http.post('user', userForm)
    }

}