module.exports = [
    {
        name: 'listVolumes',
        type: 'volumev2',
        path: '/volumes/detail',
        method: 'GET',
        key: 'volumes',
        payload: null,
    },
    {
        name: 'getVolume',
        type: 'volumev2',
        path: '/volumes/:id',
        method: 'GET',
        key: 'volume',
        payload: null,
    },
    {
        name: 'deleteVolume',
        type: 'volumev2',
        path: '/volumes/:id',
        method: 'DELETE',
    },
    {
        name: 'listStorageVolumes',
        type: 'storage',
        path: '/volumes/detail',
        method: 'GET',
        key: 'volumes',
        payload: null,
    },
    {
        name: 'listSnapshots',
        type: 'image',
        path: 'v2/images', //glance ends with slash /
        key: 'images',
        method: 'GET',
        payload: null,
    },
    {
        name: 'getImageDetails',
        type: 'image',
        path: 'v2/images/:id', //glance ends with slash /
        method: 'GET',
        payload: null,
    },
    {
        name: 'getNovaImageDetails',
        type: 'compute',
        path: '/images/:id', //glance ends with slash /
        method: 'GET',
        payload: null,
        key: 'image',
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
        path: '/servers/:id/os-volume_attachments/:attachmentId',
        method: 'DELETE',
    },
]
