const axios = require('axios')

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

const get = (url, key, token, query) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (query) url = url + '?' + query
            const r = await request({
                method: 'GET',
                url: url,
                token: token,
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
            reject(
                'Error: ' +
                    err.response.data.error +
                    ', \nREQUEST: ' +
                    err.request._header +
                    '\n STATUS: ' +
                    err.response.status,
            )
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
            reject(
                'Error: ' +
                    err.response.data.error +
                    ', \nREQUEST: ' +
                    err.request._header +
                    '\n STATUS: ' +
                    err.response.status,
            )
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
            reject(
                'Error: ' +
                    err.response.data.error +
                    ', \nREQUEST: ' +
                    err.request._header +
                    '\n STATUS: ' +
                    err.response.status,
            )
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
            reject(
                'Error: ' +
                    err.response.data.error +
                    ', \nREQUEST: ' +
                    err.request._header +
                    '\n STATUS: ' +
                    err.response.status,
            )
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
