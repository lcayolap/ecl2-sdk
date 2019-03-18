#Usage:

    const ECL2 = require('./index')

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

            c.listServers()
            c.getServer('server-id')

            c.listNetworks()
            c.getNetwork('nw-id')

            c.listLoadbalancers()
            c.getLoadbalancer('lb-id')

            c.listFirewalls()
            c.getFirewall('fw-id')

            c.listZones()
        } catch (err) {
            console.error(err)
        }
    }
    run()

#Supported methods

###Server

-   listServers
-   getServer

###Network

-   listNetworks
-   getNetwork

###Firewall

-   listFirewalls
-   getFirewall

###Loadbalancer

-   listLoadbalancers
-   getLoadbalancer
