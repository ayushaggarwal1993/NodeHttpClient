const http = require('http');

const url = 'http://nodeprogram.com';

http.get(url, (response) =>{
    response.on('data', (chunk) =>{
        console.log(chunk);
    })
    response.on('end', () =>{
        console.log('Response has ended');
    })
}).on('error', (error) => {
    console.log(`Got error: ${error}`);
})