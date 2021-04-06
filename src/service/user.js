import { http } from './config'

export default {

    salvar:(userForm) => {
        return http.post('user', userForm)
    },

    autorizar:(loginForm) => {
        return http.post('user/auth', loginForm)
    }

}