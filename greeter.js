var person = require('./person'),
    moment = require('./node_modules/moment');

moment.locale('th');
var greeter = {
    version: 12,
    text: `Hello ${person.name}, how are you? FYI, local time in Oslo now is ${moment().format('LLL')}.`
};

module.exports = greeter;
