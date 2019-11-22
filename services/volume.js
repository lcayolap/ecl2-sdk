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
        name: 'getVolume',
        type: 'cinderv2',
        path: '/volumes/:id',
        method: 'GET',
        key: 'volume',
        payload: null,
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
        name: 'listLoadbalancers',
        type: 'network',
        path: '/load_balancers',
        key: 'load_balancers',
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
        name: 'getLoadbalancerPlan',
        type: 'network',
        path: '/load_balancer_plans/:id',
        key: 'load_balancer_plan',
        method: 'GET',
        payload: null,
    },
    {
        name: 'listLoadbalancerInterfaces',
        type: 'network',
        path: '/load_balancer_interfaces',
        key: 'load_balancer_interfaces',
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
