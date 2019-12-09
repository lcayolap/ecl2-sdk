module.exports = [
    {
        name: 'listNetworks',
        type: 'network',
        path: '/networks',
        key: 'networks',
        method: 'GET',
        payload: null,
    },
    {
        name: 'listSubnets',
        type: 'network',
        path: '/subnets',
        key: 'subnets',
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
        name: 'getSubnet',
        type: 'network',
        path: '/subnets/:id',
        key: 'subnet',
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
        key: 'firewalls',
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
        name: 'listFirewallInterfaces',
        type: 'network',
        path: '/firewall_interfaces',
        key: 'firewall_interfaces',
        method: 'GET',
        payload: null,
    },
    {
        name: 'getFirewallPlan',
        type: 'network',
        path: '/firewall_plans/:id',
        key: 'firewall_plan',
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
        name: 'deleteLoadbalancer',
        type: 'network',
        path: '/load_balancers/:id',
        method: 'DELETE',
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
        name: 'listInternetGateways',
        type: 'network',
        path: '/internet_gateways',
        key: 'internet_gateways',
        method: 'GET',
        payload: null,
    },
    {
        name: 'getInternetGateway',
        type: 'network',
        path: '/internet_gateways/:id',
        key: 'internet_gateway',
        method: 'GET',
        payload: null,
    },
    {
        name: 'deleteInternetGateway',
        type: 'network',
        path: '/internet_gateway/:id',
        method: 'DELETE',
    },
    {
        name: 'getInternetService',
        type: 'network',
        path: '/internet_services/:id',
        key: 'internet_service',
        method: 'GET',
        payload: null,
    },
    {
        name: 'listGlobalIps',
        type: 'network',
        path: '/public_ips',
        key: 'public_ips',
        method: 'GET',
        payload: null,
    },
    {
        name: 'listGatewayInterfaces',
        type: 'network',
        path: '/gw_interfaces',
        key: 'gw_interfaces',
        method: 'GET',
        payload: null,
    },
    {
        name: 'listStaticRoutes',
        type: 'network',
        path: '/static_routes',
        key: 'static_routes',
        method: 'GET',
        payload: null,
    },
    {
        name: 'listVPNGateways',
        type: 'network',
        path: '/vpn_gateways',
        method: 'GET',
        key: 'vpn_gateways',
        payload: null,
    },
    {
        name: 'getVPNService',
        type: 'network',
        path: '/vpn_services/:id',
        key: 'vpn_service',
        method: 'GET',
        payload: null,
    },
    {
        name: 'listVPNInterfaces',
        type: 'network',
        path: '/vpn_interfaces',
        key: 'vpn_interfaces',
        method: 'GET',
        payload: null,
    },
]
