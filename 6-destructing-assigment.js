// -------------- DESTRUCTING ASSIGNMENT ------------------------------->


/* 
ES05
*/

var json = require('body-parser').json

var body = req.body, // body has username and password
  username = body.username,
  password = body.password


/* 
ES06
*/

var { userId, accountNumber} = $('body').data() 
var {json} = require('body-parser')
var {username, password} = req.body

//Arrays

var [col1, col2]  = $('.column'),
  [line1, line2, line3, , line5] = file.split('\n')
  