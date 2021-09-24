export default [{
    path: '/watchlist',
    name: 'Watchlist',
    component: () => import( /* webpackChunkname: "watchlist" */ "./Watchlist.vue"),
    meta: {
        showNavbar: true,
        title: 'Watchlist',
        icon: 'playlist_play',
        label: 'Quero assistir'
    },
}]