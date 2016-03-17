var person = require('./person');

var time = 'today';
var greeter = {
  version: 12,
  text: `Hello ${person.name}, how are you ${time}?`
};

module.exports = greeter;
