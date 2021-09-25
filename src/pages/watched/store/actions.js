/* eslint-disable no-unused-vars */
// As actions acionam as mutations e as mutations alteram os states, as actions são as responsáveis por fazer as requisições HTTP também

import services from '@/http'
// Importando todos os types das mutations
import * as types from './mutation-types'

// O parâmetro dispatch serve para chamar uma action dentro de outra
export const ActionFindWatched = ({
    commit
}) => (
    services.watched.findWatched().then((res) => {
        // Colocando a resposta da requisição no state do watched
        commit(types.SET_WATCHED, res.data.data)
    })
)

export const ActionAddWatched = (context, payload) => {
    services.watched.addWatchedList(payload)
}

export const ActionDeleteFromWatched = (context, payload) => {
    services.watched.deleteFromWatchedList({
        id: payload
    })
}