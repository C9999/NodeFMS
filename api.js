'use strict'
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const App = express();
App.port = 3000;
App.use(bodyParser.json());

const route = express.Router();

route.get('/car', (req, res, next) => {
    console.log(req.body);
    console.log(res);
    next();
});

App.use('/api', route)
http.createServer(App).listen(App.port)

console.log(`Run at ${App.port}`)