// Importando os arquivos da store do módulo auth
import state from './state'
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'


export default {
    state,
    actions,
    getters,
    mutations,
    namespaced: true // Serve para garantir que o módulo auth, terá o prefixo auth
}