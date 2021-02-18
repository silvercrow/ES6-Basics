// ------------------------ DATA STRUCTURE ------------------------------->

// Imperative old way
const sumOfArrayElements = (arr) => {
    let result = 0; 
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
    }  
    return result;
}

// Declarative 
const sumOfArrayElements = (arr) => arr.reduce((total, item) => total += item, 0);


// --------------------------Declarative-------------------------------->

// -------------------------- MAP ---------------/

// definition 
collection.map((currentValue, index) => {
    // Return element for newArray
});
// example
const arr = [1,2,3,4,5];
const newArray = arr.map(i => i*10);
// return a new array with all value as multiple of 10;

// -------------------------- REDUCE ---------------/

// definition 
collection.reduce((accumulator, item, index) => {
    // logic to perform to get accumulator as a return value
}, 0);// 0 is the initial value
const arr = [1,2,3,4,5];
const total = arr.reduce((acc, item) => acc+= item, 0);
// return a total as 15

// -------------------------- FIND ---------------/
// definition 
collection.find((item) => {
    // return first element that satisfy the condition
});// example
const arr = [1,2,8,4,5];
const value = arr.find(i => i%4 == 0);
// return the first value i.e 8 

// ------------------------- FILTER -------------/

// definition 
collection.filter((currentValue, index) => {
    // logic to filter array on
});
// example
const arr = [1,2,3,4,5];
const newArray = arr.filter(i => i%2 == 0); //  %  	Modulus (Division Remainder)
// return a new array with value [2, 4]
