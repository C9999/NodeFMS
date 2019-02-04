'use strict'

const routes = require('express').Router();
const controllers = require('./controllers');
const validations = require('./validations');

routes.post('/sum', validations.sum, controllers.sum);

module.exports = routes;