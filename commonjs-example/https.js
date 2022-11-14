const {send} = require('../commonjs-example/request')
const {reads} = require('../commonjs-example/response')
const {REQUEST_TIMEOUT} = require('../commonjs-example/request')

function makeRequest(url, data){
    send(url, data)
    return reads()   
}

const responseData = makeRequest('https://www.google.com', 'hello')
console.log(responseData)
console.log(require.cache)