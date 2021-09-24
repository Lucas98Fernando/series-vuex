/* eslint-disable no-unused-vars */
// As actions acionam as mutations e as mutations alteram os states, as actions são as responsáveis por fazer as requisições HTTP também

import services from '@/http'
// Importando todos os types das mutations
import * as types from './mutation-types'

// O parâmetro dispatch serve para chamar uma action dentro de outra
export const ActionFindSerie = ({
    commit
}, payload) => (
    services.showSerie.findSerie({
        id: payload
    }).then((res) => {
        // Colocando a resposta da requisição no state do show serie
        commit(types.SET_SERIE, res.data.data)
    })
)