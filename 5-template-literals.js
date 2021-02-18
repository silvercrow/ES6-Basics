// -------------- TEMPLATE LITERALS ------------------------------->


/* 
ES05
*/

var name = 'Your name is ' + first + ' ' + last + '.'
var url = 'http://localhost:3000/api/messages/' + id


/* 
ES06
*/
var name = `Your name is ${first} ${last}.`
var url = `http://localhost:3000/api/messages/${id}`



/* 
ES05
*/

var roadPoem = 'Then took the other, as just as fair,\n\t'
    + 'And having perhaps the better claim\n\t'
    + 'Because it was grassy and wanted wear,\n\t'
    + 'Though as for that the passing there\n\t'
    + 'Had worn them really about the same,\n\t'

  
/* 
ES06
*/
//backticks 

var roadPoem = `Then took the other, as just as fair,
    And having perhaps the better claim
    Because it was grassy and wanted wear,
    Though as for that the passing there
    Had worn them really about the same,`