export default [{
    path: '/serie/:id',
    name: 'Visualizar série',
    component: () => import( /* webpackChunkName: "show-serie" */ "./ShowSerie")
}]