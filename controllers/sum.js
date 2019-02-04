'use strict'

function sum(request, response, next) {
    const numbers = request.body;
    console.log('body', numbers);

    const result = numbers.reduce((acc, item) => acc + item);
    console.log(result);
    response.status(200).send(`${result}`);
}

module.exports = sum;