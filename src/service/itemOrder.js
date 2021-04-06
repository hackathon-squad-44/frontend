import { http } from './config'

export default {

    salvar:(itemOrderForm) => {
        return http.post('item-order', itemOrderForm)
    },

}