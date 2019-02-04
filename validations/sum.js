'use strict'
const Joi = require('joi');

const schema = Joi.array().items(Joi.number());

function sum(request, response, next) {
    const body = request.body;
    
    Joi.validate(body, schema, (err, result) => {
        if (err){
            console.log(err);
            response.status(400);
            return response.send(err.details[0].message);
        }
        next();
    });
}

module.exports = sum;