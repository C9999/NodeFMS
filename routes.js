'use strict'

const routes = require('express').Router();

const CalcValidation = require('./validations/calc.js');
const CalcController = require('./controllers/calc.js');
const CalcSave = require('./save/calc.js');

const calcValidation = new CalcValidation();
const calcController = new CalcController();
const calcSave = new CalcSave();

routes.post('/sum', calcValidation.sum.bind(calcValidation), 
                    calcController.sum.bind(calcController), 
                    calcSave.sum.bind(calcSave));

routes.post('/minus', calcValidation.minus.bind(calcValidation), 
                    calcController.minus.bind(calcController), 
                    calcSave.minus.bind(calcSave));

module.exports = routes;