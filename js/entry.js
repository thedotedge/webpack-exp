require('./../css/style.css')

var $ = require('jquery')

import Greeter from './greeter.js'

$('#greeting').html(Greeter.text)
