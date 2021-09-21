import Vue from 'vue'
import VueResource from 'vue-resource'
import services from './services'

// O VueResource é parecido com o Axios, ele serve também para fazer requisições HTTP
Vue.use(VueResource)

const http = Vue.http

// Definindo o endereço base da API, esse será o prefixo para cada requisição
http.options.root = 'https://guarded-headland-11685.herokuapp.com/'

/*  Exemplo de utilização:
    - this.$http.get('/login') */

// Mapeando o objeto de services do módulo de autenticação e configurando a estrutura para as requisições HTTP
Object.keys(services).map(service => {
    services[service] = Vue.resource('', {}, services[service])
})

export {
    http
}

export default services