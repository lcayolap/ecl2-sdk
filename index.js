const utils = require('./utils')
const services = require('./services')

const Client = options => {
    this.creds = {
        tenantId: options.tenantId,
        apiKey: options.apiKey,
        apiSecret: options.apiSecret,
        zone: options.zone,
        authUrl: options.authUrl,
        appendVersionInPath: options.appendVersionInPath,
        adminUrl: options.adminUrl,
    }

    let self = this
    this.token = options.token || null
    this.urls = {}

    this.getToken = () => {
        return new Promise(async (resolve, reject) => {
            const payload = {
                auth: {
                    identity: {
                        methods: ['password'],
                        password: {
                            user: {
                                domain: {
                                    id: 'default',
                                },
                                name: this.creds.apiKey,
                                password: this.creds.apiSecret,
                            },
                        },
                    },
                },
            }

            if (this.creds.tenantId) {
                payload.auth.scope = {
                    project: {
                        id: this.creds.tenantId,
                    },
                }
            }

            try {
                const r = await utils.request({
                    method: 'POST',
                    url: this.creds.authUrl + '/auth/tokens',
                    payload: JSON.stringify(payload),
                })
                if (!r.headers['x-subject-token']) {
                    reject(r.statusText)
                }
                this.token = r.headers['x-subject-token']

                //Setup url catalog
                r.data.token.catalog &&
                    r.data.token.catalog.forEach(c => {
                        const matched = c.endpoints.filter(e => e.interface === 'public')

                        if (matched.length > 0) {
                            self.urls[c.name] = matched[0].url

                            if (c.name === 'network' && this.creds.appendVersionInPath) {
                                self.urls.network = self.urls.network + '/v2.0'
                            }
                            if (c.name === 'glance' && this.creds.appendVersionInPath) {
                                self.urls.glance = self.urls.glance + '/v2'
                            }
                        }
                    })

                resolve(this.token)
            } catch (err) {
                console.log(err.response.data)
                reject(err)
            }
        })
    }

    services.forEach(s => {
        self[s.name] = args => {
            let payload = s.payload
            if (args && args.payload) {
                payload = args.payload
            }

            let url = ''

            if (s.type === 'auth') {
                url = this.creds.authUrl + s.path
            } else {
                url = self.urls[s.type] + s.path

                //SSS overrides
                if (s.name.startsWith('sss') && this.creds.adminUrl) {
                    url = this.creds.adminUrl + s.path
                }
            }

            if (args) {
                Object.keys(args).forEach(key => {
                    const str = `:${key}`
                    if (url.includes(str)) {
                        url = url.replace(str, args[key])
                    }
                })
            }

            switch (s.method.toUpperCase()) {
                case 'GET':
                    return utils.get(url, s.key, self.token)
                case 'PUT':
                    return utils.put(url, payload, s.key, self.token)
                case 'POST':
                    return utils.post(url, payload, s.key, self.token)
                case 'DELETE':
                    return utils.del(url, self.token)
                default:
                    console.log('Unsupported method in service: ', s)
                    break
            }
        }
    })

    return new Promise(async (resolve, reject) => {
        try {
            if (this.token) {
                let catalog = await this.listCatalog()
                catalog.forEach(c => {
                    const matched = c.endpoints.filter(e => e.interface === 'public')

                    if (matched.length > 0) {
                        self.urls[c.name] = matched[0].url

                        if (c.name === 'network' && this.creds.appendVersionInPath) {
                            self.urls.network = self.urls.network + '/v2.0'
                        }
                    }
                })
            } else {
                await this.getToken()
            }
            resolve(this)
        } catch (err) {
            reject(err)
        }
    })
}

module.exports = {
    Client,
}
