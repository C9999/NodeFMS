'use strict'
const Joi = require('joi');

const schema = Joi.array().items(Joi.number());

class CalcValidation {
    sum(request, response, next) {
        const { body } = request;

        this.response = response;
        this.validation(body, schema, next);
    }
    
    minus() {
        const { body } = request;

        this.response = response;
        this.validation(body, schema, next);
    }

    validation(body, schema, next){
        Joi.validate(body, schema, (err, result) => {
            if (err) {
                console.log(err);
                this.response.status(400);
                return this.response.send(err.details[0].message);
            }
            next();
        });    
    }
}

module.exports = CalcValidation;