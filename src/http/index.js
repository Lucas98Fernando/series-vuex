import Vue from 'vue'
import VueResource from 'vue-resource'
import services from './services'
import interceptors from './interceptors'

// O VueResource é parecido com o Axios, ele serve também para fazer requisições HTTP

// Inserindo o VueResource na instância do Vue
Vue.use(VueResource)

const http = Vue.http

// Definindo o endereço base da API, esse será o prefixo para cada requisição
http.options.root = 'https://guarded-headland-11685.herokuapp.com/'

/*  Exemplo de utilização:
    - this.$http.get('/login') */

// Chamando o interceptor para caso ocorra um erro de acesso não autorizado
http.interceptors.push(interceptors)

// Mapeando o objeto de services do módulo de autenticação e configurando a estrutura para as requisições HTTP
Object.keys(services).map(service => {
    services[service] = Vue.resource('', {}, services[service])
})

// Configurar o token para ser passado no header das requisições
const setBearerToken = token => {
    http.headers.common['Authorization'] = `Bearer ${token}`
}

export default services

export {
    http,
    setBearerToken
}