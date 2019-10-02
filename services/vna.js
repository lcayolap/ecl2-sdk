module.exports = [
    {
        name: 'listVNA',
        type: 'virtual-network-appliance',
        path: '/v1.0/virtual_network_appliances',
        key: 'virtual_network_appliances',
        method: 'GET',
        payload: null,
    },
    {
        name: 'listVNAOperations',
        type: 'virtual-network-appliance',
        path: '/v1.0/operations?resource_id=:resourceId',
        key: 'operations',
        method: 'GET',
    },
]
