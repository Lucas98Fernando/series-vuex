// Esse arquivo serve para chamar todos os endpoints que eu vou ter nesse módulo de autenticação

export default {
    login: {
        method: 'post',
        url: 'login'
    },
    loadSession: {
        method: 'get',
        url: 'load-session'
    }
}