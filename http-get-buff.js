const http = require('http');

const url = 'http://1nodeprogram.com/';

http.get(url, (response) =>{
    let rawData = '';
    response.on('data',(chunk) => {
        rawData = rawData + chunk;
    });

    response.on('end', () => {
        console.log(rawData);
    });
}).on('error', (error) => {
    console.log(`Get Request errored out with ${error.message}`);
});