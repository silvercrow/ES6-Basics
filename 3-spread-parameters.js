// -------------- SPREAD PARAMENTERS ------------------------------->


/* 
ES05
*/

function request(url, options, callback) { 
  // ...
}
var requestArgs = ['http://autoweb.com', {options:true}, function(data){console.log('callback',data)}]
request.apply(null, requestArgs)

/* 
ES06
*/

function request(url, options, callback) { 
  // ...
}
var requestArgs = ['http://autoweb.com', {options:true}, function(data){console.log('callback',data)}]
request(...requestArgs)