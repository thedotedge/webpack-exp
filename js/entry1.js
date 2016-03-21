require('./../css/style.css')

var $ = require('jquery')

import Greeter from './greeter.js'
import io from './io.js'

$('#greeting').html(Greeter.text)
