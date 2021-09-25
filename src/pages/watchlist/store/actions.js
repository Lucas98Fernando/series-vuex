/* eslint-disable no-unused-vars */
// As actions acionam as mutations e as mutations alteram os states, as actions são as responsáveis por fazer as requisições HTTP também

import services from '@/http'
// Importando todos os types das mutations
import * as types from './mutation-types'

// O parâmetro dispatch serve para chamar uma action dentro de outra
export const ActionFindWatchlist = ({
    commit
}) => (
    services.watchlist.findWatchlist().then((res) => {
        // Colocando a resposta da requisição no state do watchlist
        commit(types.SET_WATCHLIST, res.data.data)
    })
)

export const ActionAddWatchlist = (context, payload) => {
    services.watchlist.addWatchlist(payload)
}

export const ActionDeleteFromWatchlist = (context, payload) => {
    services.watchlist.deleteFromWatchlist({
        id: payload
    })
}