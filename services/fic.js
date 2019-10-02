module.exports = [
    {
        name: 'ficListRouters',
        type: 'fic',
        path: '/v1/routers',
        method: 'GET',
    },
    {
        name: 'ficListOperations',
        type: 'fic',
        path: '/v1/operations?resourceId=:resourceId',
        method: 'GET',
    },
    {
        name: 'ficListRouterFirewalls',
        type: 'fic',
        path: '/v1/routers/:routerId/firewalls/:firewallId',
        method: 'GET',
    },
    {
        name: 'ficListRouterNATs',
        type: 'fic',
        path: '/v1/routers/:routerId/nats/:natId',
        method: 'GET',
    },
    {
        name: 'ficListNATGIPAddressSet',
        type: 'fic',
        path: '/v1/routers/:routerId/nats/:natId/global-ip-address-sets',
        method: 'GET',
    },
    {
        name: 'ficListLOAs',
        type: 'fic',
        path: '/v1/loas',
        method: 'GET',
    },
    {
        name: 'ficListConnections',
        type: 'fic',
        path: '/v1/:type',
        method: 'GET',
    },
    {
        name: 'ficListPorts',
        type: 'fic',
        path: '/v1.0/ports',
        method: 'GET',
    },
]
