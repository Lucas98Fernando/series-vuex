export default [{
    path: '/watched',
    name: 'Já assisti',
    component: () => import( /* webpackChunkname: "watched" */ "./Watched.vue"),
    meta: {
        showNavbar: true,
        title: 'Já assisti',
        icon: 'playlist_add_check',
        label: 'Já assisti'
    },
}]