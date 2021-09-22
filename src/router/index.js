import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import middleware from './middleware'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

// Chamado o middleware como callback dentro da função beforeEach 
router.beforeEach(middleware)

export default router