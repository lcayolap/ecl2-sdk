const keypair = require('./keypair')
const auth = require('./auth')
const baremetal = require('./baremetal')
const compute = require('./compute')
const monitoring = require('./monitoring')
const network = require('./network')
const fic = require('./fic')
const sss = require('./sss')
const vna = require('./vna')
const volume = require('./volume')

module.exports = [
    ...auth,
    ...compute,
    ...baremetal,
    ...network,
    ...volume,
    ...keypair,
    ...fic,
    ...vna,
    ...monitoring,
    ...sss,
]
