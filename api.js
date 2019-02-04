'use strict'

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes.js');

const App = express();

App.port = 3000;

App.use(bodyParser.json());
App.use('/api/v1', routes)

http.createServer(App).listen(App.port)

console.log(`Run at ${App.port}`)