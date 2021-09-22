// Os getters funcionam como o computed ou propriedades computadas do Vuex

// As duas (!) servem para devolver true se houver token e false se não houver
export const hasToken = ({
    token
}) => !!token