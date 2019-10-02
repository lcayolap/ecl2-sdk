module.exports = [

    {
        name: 'listKeypairs',
        type: 'nova',
        path: '/os-keypairs',
        key: 'keypairs',
        method: 'GET',
    },
    {
        name: 'deleteKeypair',
        type: 'nova',
        path: '/os-keypairs/:id',
        key: 'keypairs',
        method: 'DELETE',
    },
]
