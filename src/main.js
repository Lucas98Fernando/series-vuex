import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

// Estilos customizados
import '../src/assets/sass/app.scss'

Vue.use(Buefy)

Vue.config.productionTip = false

window.vueInstance = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')