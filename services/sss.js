module.exports = [
    {
        name: 'listSSS',
        type: 'sss',
        path: '/billing',
        key: 'sss',
        method: 'GET',
        payload: null,
    },
    {
        name: 'sssListTenants',
        type: 'sss',
        key: 'tenants',
        path: '/tenants',
        method: 'GET',
    },
    {
        name: 'sssGetContractBill',
        type: 'sss',
        path: '/contracts/:contractId/billing/:month',
        method: 'GET',
        payload: null,
    },
]
