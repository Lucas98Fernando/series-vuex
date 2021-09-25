export default {
    findWatched: {
        method: 'get',
        url: 'user/watchedlist'
    },
    addWatchedList: {
        method: 'post',
        url: 'user/serie/watched'
    },
    deleteFromWatchedList: {
        method: 'delete',
        url: 'user/serie/watched{/id}'
    }
}