'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });

class CalcSave {
    sum(req, res){
        const { body, params, result } = req;

        if(!params.save){
            return res.status(200).send(`${result}`);
        }
    }

    minus(req, res){

    }
}
module.exports = CalcSave;