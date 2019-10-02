module.exports = [
    {
        name: 'listVolumes',
        type: 'cinderv2',
        path: '/volumes/detail',
        method: 'GET',
        key: 'volumes',
        payload: null,
    },
    {
        name: 'listSnapshots',
        type: 'glance',
        path: '/images',
        key: 'images',
        method: 'GET',
        payload: null,
    },
    {
        name: 'getImageDetails',
        type: 'glance',
        path: '/images/:id',
        method: 'GET',
        payload: null,
    },
    {
        name: 'getLoadbalancer',
        type: 'network',
        path: '/load_balancers/:id',
        key: 'load_balancer',
        method: 'GET',
        payload: null,
    },
    {
        name: 'attachVolume',
        type: 'nova',
        path: '/servers/:id/os-volume_attachments',
        method: 'POST',
    },
    {
        name: 'detachVolume',
        type: 'nova',
        path: '/servers/:id/os-volume_attachments',
        method: 'DELETE',
    },
]
