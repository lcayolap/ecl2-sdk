module.exports = [
    {
        name: 'listKeypairs',
        type: 'nova',
        path: '/os-keypairs',
        key: 'keypairs',
        method: 'GET',
    },
    {
        name: 'listCatalog',
        type: 'auth',
        path: '/auth/catalog',
        key: 'catalog',
        method: 'GET',
    },
    {
        name: 'listZones',
        type: 'nova',
        path: '/os-availability-zone',
        key: 'availabilityZoneInfo',
        method: 'GET',
        payload: null,
    },

    //Baremetal
    {
        name: 'listBaremetalServers',
        type: 'baremetal-server',
        path: '/servers/detail',
        key: 'servers',
        method: 'GET',
        payload: null,
    },
    {
        name: 'getBaremetalServer',
        type: 'baremetal-server',
        path: '/servers/:id',
        key: 'server',
        method: 'GET',
        payload: null,
    },
    {
        name: 'deleteBaremetalServer',
        type: 'baremetal-server',
        path: '/servers/:id',
        method: 'DELETE',
        payload: null,
    },
    {
        name: 'getBaremetalConsole',
        type: 'baremetal-server',
        path: '/servers/:id/action',
        method: 'POST',
        key: 'console',
        payload: { 'os-getManagementConsole': null },
    },
    {
        name: 'startBaremetalServer',
        type: 'baremetal-server',
        path: '/servers/:id/action',
        method: 'POST',
        payload: { 'os-start': { boot_mode: 'DISK' } },
    },
    {
        name: 'rebootBaremetalServer',
        type: 'baremetal-server',
        path: '/servers/:id/action',
        method: 'POST',
        payload: {
            reboot: {
                type: 'SOFT',
                boot_mode: 'disk',
            },
        },
    },
    {
        name: 'listBaremetalZones',
        type: 'baremetal-server',
        path: '/os-availability-zone',
        key: 'availabilityZoneInfo',
        method: 'GET',
        payload: null,
    },
    {
        name: 'listBaremetalFlavors',
        type: 'baremetal-server',
        path: '/flavors/detail',
        key: 'flavors',
        method: 'GET',
        payload: null,
    },
    {
        name: 'listBaremetalKeypairs',
        type: 'baremetal-server',
        path: '/os-keypairs',
        key: 'keypairs',
        method: 'GET',
        payload: null,
    },
    {
        name: 'listBaremetalLimits',
        type: 'baremetal-server',
        path: '/limits',
        key: 'limits',
        method: 'GET',
        payload: null,
    },
    {
        name: 'listBaremetalServerMetadata',
        type: 'baremetal-server',
        path: '/servers/:id/metadata',
        key: 'metadata',
        method: 'GET',
        payload: null,
    },

    //Compute
    {
        name: 'listServers',
        type: 'nova',
        path: '/servers/detail',
        method: 'GET',
        payload: null,
    },
    {
        name: 'getServer',
        type: 'nova',
        path: '/servers/:id',
        key: 'server',
        method: 'GET',
        payload: null,
    },
    {
        name: 'listBaremetalServers',
        type: 'baremetal-server',
        path: '/servers/detail',
        method: 'GET',
        payload: null,
    },
    {
        name: 'listBaremetalFlavors',
        type: 'baremetal-server',
        path: '/flavors/detail',
        method: 'GET',
        payload: null,
    },
    {
        name: 'listSSS',
        type: 'sss',
        path: '/billing/:query',
        key: 'sss',
        method: 'GET',
        payload: null,
    },
    {
        name: 'listVolumes',
        type: 'cinderv2',
        path: '/volumes/detail',
        method: 'GET',
        payload: null,
    },
    {
        name: 'listMeterQuery',
        type: 'monitoring',
        path: '/meters/:query',
        key: 'meters',
        method: 'GET',
        payload: null,
    },
    {
        name: 'getConsole',
        type: 'nova',
        path: '/servers/:id/action',
        method: 'POST',
        key: 'console',
        payload: { 'os-getVNCConsole': { type: 'novnc' } },
    },
    {
        name: 'startServer',
        type: 'nova',
        path: '/servers/:id/action',
        method: 'POST',
        payload: { 'os-start': null },
    },
    {
        name: 'stopServer',
        type: 'nova',
        path: '/servers/:id/action',
        method: 'POST',
        payload: { 'os-stop': null },
    },
    {
        name: 'resizeServer',
        type: 'nova',
        path: '/servers/:id/action',
        method: 'POST',
    },
    {
        name: 'deleteServer',
        type: 'nova',
        path: '/servers/:id',
        method: 'DELETE',
    },
    {
        name: 'listNetworks',
        type: 'network',
        path: '/networks',
        key: 'networks',
        method: 'GET',
        payload: null,
    },
    {
        name: 'getNetwork',
        type: 'network',
        path: '/networks/:id',
        key: 'network',
        method: 'GET',
        payload: null,
    },
    {
        name: 'createNetwork',
        type: 'network',
        path: '/networks',
        key: 'network',
        method: 'POST',
    },
    {
        name: 'updateNetwork',
        type: 'network',
        path: '/networks/:id',
        key: 'network',
        method: 'PUT',
    },
    {
        name: 'deleteNetwork',
        type: 'network',
        path: '/networks/:id',
        method: 'DELETE',
    },
    {
        name: 'listFirewalls',
        type: 'network',
        path: '/firewalls',
        method: 'GET',
        payload: null,
    },
    {
        name: 'getFirewall',
        type: 'network',
        path: '/firewalls/:id',
        key: 'firewall',
        method: 'GET',
        payload: null,
    },
    {
        name: 'listLoadbalancers',
        type: 'network',
        path: '/load_balancers',
        method: 'GET',
        payload: null,
    },
    {
        name: 'listInternetGateways',
        type: 'network',
        path: '/internet_gateways',
        method: 'GET',
        payload: null,
    },
    {
        name: 'listVPNGateways',
        type: 'network',
        path: '/vpn_gateways',
        method: 'GET',
        payload: null,
    },
    {
        name: 'listSnapshots',
        type: 'glance',
        path: '/images',
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
]
