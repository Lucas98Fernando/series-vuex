// As mutations servem para alterar as propriedas definidas no state e dessa forma, mudar algum estado, não devemos alterar o estado de alguma propriedade diretamente, isso deve ocorrre somente pelos mutations

// Importando todos os types das mutations
import * as types from './mutation-types'

export default {
    [types.SET_SERIES](state, payload) {
        // Configurando os dados do usuário com os valores que virão
        state.series = payload
    }
}