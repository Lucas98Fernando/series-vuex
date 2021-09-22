/* eslint-disable no-unused-vars */
import store from "../store"

export default request => {
    return ({
        status
    }) => {
        // Se o status da responsta da API for 401, ou seja, não autorizado, será chamado a action de SignOut
        if (status === 401) {
            store.dispatch('auth/ActionSignOut')
            window.vueInstance.$router.push({
                name: 'Login'
            })
        }
    }
}