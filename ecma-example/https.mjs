import {send} from '../ecma-example/request.mjs'
import {reads} from '../ecma-example/response.mjs'

function makeRequest(url, data){
    send(url, data)
    return reads()   
}

const responseData = makeRequest('https://www.google.com', 'hello')
console.log(responseData)