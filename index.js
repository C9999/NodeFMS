'use strict'
const fs = require('fs');

fs.readFile('data.txt', (err, file) => {
    if(err){
        throw new Error(err);
    }
    console.log(file.toString());
})