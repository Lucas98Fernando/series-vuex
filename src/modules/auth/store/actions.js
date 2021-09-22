// As actions acionam as mutations e as mutations alteram os states, as actions são as responsáveis por fazer as requisições HTTP também

// Importando todos os types das mutations
import services from '@/http'
import * as storage from '../storage'
import * as types from './mutation-types'

// O parâmetro dispatch serve para chamar uma action dentro de outra
export const ActionDoLogin = ({
    dispatch
}, payload) => {
    // Vai devolver uma promise
    return services.auth.login(payload).then((res) => {
        dispatch('ActionSetUser', res.data.user)
        dispatch('ActionSetToken', res.data.token)
    })
}

// Action para verificar o token do usuário
export const ActionCheckToken = ({
    dispatch,
    state
}) => {
    if (state.token) {
        return Promise.resolve(state.token)
    }

    const token = storage.getLocalToken()

    if (!token) {
        return Promise.reject(new Error('Token inválido!'))
    }

    dispatch('ActionSetToken', token)
    // Se tudo tiver ok, a sessão será carregada
    return dispatch('ActionLoadSession')
}

// Action para carregar a sessão
export const ActionLoadSession = ({
    dispatch
}) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        try {
            const {
                data: {
                    user
                }
            } = await services.auth.loadSession()
            dispatch('ActionSetUser', user)
            resolve()
        } catch (err) {
            dispatch('ActionSignOut')
            reject(err)
        }
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
    storage.setLocalToken(payload)
    storage.setHeaderToken(payload)
    commit(types.SET_TOKEN, payload)
}

// Action para excluir dados da sessão
export const ActionSignOut = ({
    dispatch
}) => {
    storage.setHeaderToken('')
    storage.deleteLocalToken()
    dispatch('ActionSetUser', {})
    dispatch('ActionSetToken', '')
}