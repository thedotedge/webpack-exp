const person = require('./person'),
    moment = require('moment'),
    _ = require('lodash/core')

moment.locale('th')

var greeter = {
    version: 12,
    text: `Hello ${person.name}, how are you? FYI, local time in Oslo now is ${moment().format('LLL')}.`
}

console.log(_.map([1, 2, 3], n => {
    return n * 3
}))

module.exports = greeter

