// Utilizando o alias para as rotas importadas da pasta de auth dos módulos
import {
    routes as home
} from '../pages/home/'
import {
    routes as auth
} from '../modules/auth'

export default [
    ...home,
    ...auth,
]