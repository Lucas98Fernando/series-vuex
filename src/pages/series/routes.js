export default [{
    path: '/series',
    name: 'Todas séries',
    component: () => import( /* webpackChunkname: "series" */ "./Series.vue"),
    meta: {
        showNavbar: true,
        title: 'Todas séries',
        icon: 'dvr',
        label: 'Todas séries'
    },
}]