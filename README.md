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

### Network

-   listNetworks
-   getNetwork
-   createNetwork
-   updateNetwork
-   deleteNetwork

### Firewall

-   listFirewalls
-   getFirewall

### Loadbalancer

-   listLoadbalancers
-   getLoadbalancer


### Availability Zone

-   listZones

### Catalog

-   listCatalog
