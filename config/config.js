const fs = require('fs')
const path = require('path')
const NODE_ENV = process.env.NODE_ENV
let configbuffer = null
console.log(NODE_ENV)

switch (NODE_ENV) {
    case 'production':
    case 'prod':
        configbuffer = fs.readFileSync(path.resolve(__dirname, 'production.json'), 'utf-8')
        break
    case 'stage':
    case 'qa':
        configbuffer = fs.readFileSync(path.resolve(__dirname, 'qa.json'), 'utf-8')
        break
    case 'dev':
    case 'development':
        configbuffer = fs.readFileSync(path.resolve(__dirname, 'dev.json'), 'utf-8')
        break
    default:
        configbuffer = fs.readFileSync(path.resolve(__dirname, 'default.json'), 'utf-8')
}

let config = JSON.parse(configbuffer)
module.exports = config