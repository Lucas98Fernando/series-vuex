// As actions acionam as mutations e as mutations alteram os states, as actions são as responsáveis por fazer as requisições HTTP também

// Importando todos os types das mutations
import services from '@/http'
import * as types from './mutation-types'

// O parâmetro dispatch serve para chamar um action dentro de outra
export const ActionDoLogin = ({
    dispatch
}, payload) => {
    // Vai devolver uma promise
    return services.auth.login(payload).then((res) => {
        dispatch('ActionSetUser', res.data.user)
        dispatch('ActionSetToken', res.data.token)
    })
}

// O parâmetro commit chama a mutation
// Action para realizar a mutation de setar os dados do usuário
export const ActionSetUser = ({
    commit
}, payload) => {
    commit(types.SET_USER, payload)
}

// Action para realizar a mutation de setar o token de autenticação do usuário
export const ActionSetToken = ({
    commit
}, payload) => {
    commit(types.SET_TOKEN, payload)
}