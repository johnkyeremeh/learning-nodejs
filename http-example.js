const {get} = require('https');

get('https://www.google.com', (resp)=> {
    resp.on('data', (chunk) => {
        console.log("Data is : ", chunk.toString())
    });
    resp.on('end', ()=> {
        console.log("no more data");
    })
})


