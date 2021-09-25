export default [{
    path: '/watchlist',
    name: 'Quero assistir',
    component: () => import( /* webpackChunkname: "watchlist" */ "./Watchlist.vue"),
    meta: {
        showNavbar: true,
        title: 'Quero assistir',
        icon: 'playlist_play',
        label: 'Quero assistir'
    },
}]