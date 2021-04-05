import { http } from './config'

export default {

    salvar:(studentForm) => {
        return http.post('student', studentForm)
    }

}