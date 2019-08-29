const axios = require('axios')
const pRetry = require('p-retry')

const request = ({ method, url, payload, token }) => {
    const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }

    if (token && token !== '') {
        headers['X-Auth-Token'] = token
    }

    let data = payload || null

    return axios({ method, headers, url, data })
}

const get = (url, key, token, query, config) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (query) url = url + '?' + query

            let r
            if (config && config.retry) {
                r = await pRetry(() => request({ method: 'GET', url, token }), {
                    retries: 4,
                    factor: 4, //Exponential backoff factor
                    minTimeout: 3000, //First retry delay
                    randomize: true,
                    onFailedAttempt: err => {
                        const status = err && err.response && err.response.status
                        console.log(
                            `FAILED: ${url}, STATUS: ${status}\nRetry: ${err.attemptNumber}. ${
                                err.retriesLeft
                            } retries left.`,
                        )
                    },
                })
            } else {
                r = await request({
                    method: 'GET',
                    url: url,
                    token: token,
                })
            }
            if (key && key !== '') {
                if (r.data[key]) {
                    resolve(r.data[key])
                } else {
                    reject('Key: ' + key + ' not found in response')
                }
            } else {
                resolve(r.data)
            }
        } catch (err) {
            let msg = ''
            if (err.response && err.response.data && err.response.data.error) {
                msg += `ERR: ${err.response.data.error}\n`
            }
            if (err.request && err.request._header) {
                msg += `REQ: ${err.request._header}\n`
            }
            if (err.response && err.response.status) {
                msg += `STATUS: ${err.response.status}`
            }
            reject(msg)
        }
    })
}

const del = (url, token) => {
    return new Promise(async (resolve, reject) => {
        try {
            const r = await request({
                method: 'DELETE',
                url: url,
                token: token,
            })
            resolve('DONE')
        } catch (err) {
            let msg = ''
            if (err.response && err.response.data && err.response.data.error) {
                msg += `ERR: ${err.response.data.error}\n`
            }
            if (err.request && err.request._header) {
                msg += `REQ: ${err.request._header}\n`
            }
            if (err.response && err.response.status) {
                msg += `STATUS: ${err.response.status}`
            }
            reject(msg)
        }
    })
}
const put = (url, data, key, token) => {
    return new Promise(async (resolve, reject) => {
        try {
            let payload = {}
            payload[key] = data //This is for the expected request format
            const r = await request({
                method: 'PUT',
                url: url,
                token: token,
                payload: JSON.stringify(payload),
            })
            if (key && key !== '') {
                if (r.data[key]) {
                    resolve(r.data[key])
                } else {
                    reject('Key: ' + key + ' not found in response')
                }
            } else {
                resolve(r.data)
            }
        } catch (err) {
            let msg = ''
            if (err.response && err.response.data && err.response.data.error) {
                msg += `ERR: ${err.response.data.error}\n`
            }
            if (err.request && err.request._header) {
                msg += `REQ: ${err.request._header}\n`
            }
            if (err.response && err.response.status) {
                msg += `STATUS: ${err.response.status}`
            }
            reject(msg)
        }
    })
}
const post = (url, data, key, token) => {
    return new Promise(async (resolve, reject) => {
        try {
            const r = await request({
                method: 'POST',
                url: url,
                token: token,
                payload: JSON.stringify(data),
            })
            if (key && key !== '') {
                if (r.data[key]) {
                    resolve(r.data[key])
                } else {
                    reject('Key: ' + key + ' not found in response')
                }
            } else {
                resolve(r.data)
            }
        } catch (err) {
            let msg = ''
            if (err.response && err.response.data && err.response.data.error) {
                msg += `ERR: ${err.response.data.error}\n`
            }
            if (err.request && err.request._header) {
                msg += `REQ: ${err.request._header}\n`
            }
            if (err.response && err.response.status) {
                msg += `STATUS: ${err.response.status}`
            }
            reject(msg)
        }
    })
}
module.exports = {
    request,
    get,
    post,
    put,
    del,
}
