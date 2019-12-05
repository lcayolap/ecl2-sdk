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
