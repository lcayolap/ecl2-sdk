#Usage:

    const ECL2 = require('ecl2-sdk')

    const options = {
        apiKey: 'your-api-key',
        apiSecret: 'your-api-secret',
        tenantId: 'your-tenant-id',
        zone: 'your-zone',
        authUrl: 'your-auth-url',
        appendVersionInPath: false,
    }

    const run = async () => {
        try {
            const c = await ECL2.Client(options)

            //Or instantiate with an existing token
            //const withToken = {
            //    token: "existing-token",
            //    tenantId: 'your-tenant-id',
            //    zone: 'your-zone',
            //    authUrl: 'your-auth-url',
            //    appendVersionInPath: false,
            //}
            //const c = await ECL2.Client(withToken)

            c.listServers()
            c.getServer({ id: 'server-id' })

            c.listNetworks()
            c.getNetwork({ id: 'net-id' })
            c.updateNetwork({ id: 'net-id', payload: { name: 'newName' } })
            c.createNetwork({ payload: { name: 'newName' } })
            c.deleteNetwork({ id: 'net-id' })

            c.listLoadbalancers()
            c.getLoadbalancer({ id: 'lb-id' })

            c.listFirewalls()
            c.getFirewall({ id: 'fw-id' })

            c.listZones()
            c.listCatalog()
        } catch (err) {
            console.error(err)
        }
    }
    run()

# Supported methods

### Server

-   listServers
-   getServer
-   startServer
-   stopServer
-   deleteServer
-   getConsole
-   resizeServer


### Baremetal Server

-   listBaremetalServers
-   listBaremetalFlavors
-   getBaremetalServer
-   deleteBaremetalServer
-   getBaremetalConsole
-   startBaremetalServer
-   stopBaremetalServer
-   rebootBaremetalServer
-   listBaremetalZones
-   listBaremetalKeypairs
-   listBaremetalServerMetadata
-   listBaremetalLimits

### Network

-   listNetworks
-   getNetwork
-   createNetwork
-   updateNetwork
-   deleteNetwork
-   listSubnets
-   getSubnet


### Firewall

-   listFirewalls
-   getFirewall
-   listFirewallInterfaces
-   getFirewallPlan

### Loadbalancer

-   listLoadbalancers
-   getLoadbalancer
-   getLoadBalancerPlan
-   listLoadbalancerInterfaces


### Availability Zone

-   listZones


### Catalog

-   listCatalog


### Keypairs

-   listKeypairs
-   deleteKeypair


### Zones

-   listZones


### Monitoring

-   listSamples
-   listMeters


### Internet Gateway

-   listInternetGateways
-   getInternetService
-   listGlobalIps
-   listGatewayInterfaces
-   listStaticRoutes


### VPN Gateway

-   listVPNGateways


### Snapshots

-   listSnapshots
-   getImageDetails


### Volumes

-   listVolumes
-   attachVolume
-   dettachVolume


### VNA

-   listVNA
-   listVNAOperations
-   getVNAPlan


### FIC

-   ficListRouters
-   ficListOperations
-   ficListRouterFirewalls
-   ficListRouterNATs
-   ficListNATGIPAddressSet
-   ficListLOAs
-   ficListConnections
-   ficListPorts


### SSS

-   listSSS
-   sssListTenants
-   sssGetContractBill
