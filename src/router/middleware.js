import store from '../store'

export default async (to, from, next) => {
    document.title =  `${to.name} - Séries Loved`
    // Verificando se o usuário está logado
    if (to.name !== 'Login' && !store.getters['auth/hasToken']) {
        try {
            // Se as Promises das actions forem resolvidas corretamente
            await store.dispatch('auth/ActionCheckToken')
            // O usuário seguirá para próxima rota 
            next({
                path: to.path
            })
        }
        // Se ocorrer algum erro, o usuário será redirecionado para a rota de login 
        catch (erro) {
            next({
                name: 'Login'
            })
            console.log(erro)
        }
    } else {
        // Se o usuário tentar ir para rota de login, mas já estiver a autenticado com um token válido, ele será redirecionado para rota de home
        if (to.name === 'Login' && store.getters['auth/hasToken']) {
            next({
                name: 'Home'
            })
        }
        // Se não, ele continua o fluxo
        else {
            next()
        }
    }
}