const { request, get, post } = require('./utils')
const services = require('./services')

const Client = options => {
    this.creds = {
        tenantId: options.tenantId,
        apiKey: options.apiKey,
        apiSecret: options.apiSecret,
        zone: options.zone,
        authUrl: options.authUrl,
        appendVersionInPath: options.appendVersionInPath,
    }

    let self = this
    this.token = null
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
                    scope: {
                        project: {
                            id: this.creds.tenantId,
                        },
                    },
                },
            }

            try {
                const r = await request({
                    method: 'POST',
                    url: this.creds.authUrl + '/auth/tokens',
                    payload: JSON.stringify(payload),
                })

                if (!r.headers['x-subject-token']) {
                    reject(r.statusText)
                }
                this.token = r.headers['x-subject-token']

                //Setup url catalog
                r.data.token.catalog.forEach(c => {
                    const matched = c.endpoints.filter(e => e.interface === 'public')
                    if (matched.length > 0) {
                        self.urls[c.name] = matched[0].url

                        if (c.name === 'network' && this.creds.appendVersionInPath) {
                            console.log(c.name, this.creds.appendVersionInPath)
                            self.urls.network = self.urls.network + '/v2.0'
                        }
                    }
                })

                resolve(this.token)
            } catch (err) {
                reject(err)
            }
        })
    }

    services.forEach(s => {
        if (s.name.startsWith('list')) {
            self[s.name] = () => get(self.urls[s.type] + s.path, s.key, self.token)
        } else {
            //Anything other than list requires id
            self[s.name] = id => {
                const url = self.urls[s.type] + s.path.replace(':id', id)
                switch (s.method.toUpperCase()) {
                    case 'GET':
                        return get(url, s.key, self.token)
                        break
                    case 'POST':
                        return post(url, s.payload, self.token)
                        break
                    default:
                        console.log('Unsupported method in service: ', s)
                        break
                }
            }
        }
    })

    return new Promise(async (resolve, reject) => {
        try {
            await this.getToken()
            resolve(this)
        } catch (err) {
            reject(err)
        }
    })
}

module.exports = {
    Client,
}
