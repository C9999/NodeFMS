'use strict'

class CallController {
    sum(request, response, next) {
        const numbers = request.body;
        const result = numbers.reduce((acc, item) => acc + item);
        
        request.result = result;
        next()
    }

    minus(request, response, next) {
        const numbers = request.body;
        const result = numbers.reduce((acc, item) => acc - item);
        next()
    }
}

module.exports = CallController;