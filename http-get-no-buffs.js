const http = require('http');

const url = 'http://nodeprogram.com/';

http.get(url, (response) =>{
    let numOfChunks = 0;
    response.on('data', (chunk) =>{
        numOfChunks++;
        console.log(chunk.toString('utf8'));
    });
    
    response.on('end', () =>{
        console.log(`Response has ended with ${numOfChunks} chunks`);
    });
}).on('error', (error) => {
    console.log(`Got error: ${error.message}`);
})