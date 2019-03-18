const axios = require('axios')

const request = ({ method, url, payload, token }) => {
    const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }

    if (token && token !== '') {
        headers['X-Auth-Token'] = token
    }

    let data = null
    if (method === 'POST' && payload != null) {
        data = payload
    }

    return axios({ method, headers, url, data })
}

const get = (url, key, token) => {
    return new Promise(async (resolve, reject) => {
        try {
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
            reject('Error in request: ' + err.message + ', \nrequest: ' + err.request._header)
        }
    })
}

const post = (url, data, token) => {
    return new Promise(async (resolve, reject) => {
        try {
            const r = await request({
                method: 'POST',
                url: url,
                token: token,
                data: JSON.stringify(data),
            })
            resolve(r.data)
        } catch (err) {
            reject('Error in request: ' + err.message + ', \nrequest: ' + err.request._header)
        }
    })
}
module.exports = {
    request,
    get,
    post,
}
