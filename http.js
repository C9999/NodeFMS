'use strict'
const http = require('http');

http.get({
    hostname: 'google.com',
    port: 80,
    path: '/',
    agent: false  
},(res) => {
    console.log(res)
});
