// -------------- REST PARAMENTERS ------------------------------->


/* 
ES05
*/

function getOptions(url, options, callback){
    var args = Array.prototype.slice.call(arguments, f.length);
    var url = args[0]
    var callback = args[2]
    // …
}


/* 
ES06
*/

function getOptions(url, options, ...callbacks) {
    var callback1 = callbacks[0]
      var callback2 = callbacks[2]
    // ...
  }
