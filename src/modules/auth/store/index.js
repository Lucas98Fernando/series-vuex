// Importando os arquivos da store do módulo auth
import * as actions from './actions'
import state from './state'
import mutations from './mutations'

export default {
    actions,
    state,
    mutations,
    namespaced: true // Serve para garantir que o módulo auth, terá o prefixo auth
}