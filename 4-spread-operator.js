// -------------- SPREAD OPERATOR ------------------------------->
// ...

/* 
ES06
*/

const hello = 'HELLOWORLD'; // Line 1
const characters = [ ...hello ]; // Line 2// [ 'H', 'E', 'L', 'L', 'O', 'W', 'O', 'R', 'L', 'D' ]


const items = ['This', 'is', 'a', 'sentence'];
console.log(items) // Line 1 // [ 'This', 'is', 'a', 'sentence' ]
console.log(...items) // Line 2 // This is a sentence 


const obj = { name: 'Foo', age: 22 };
const newObj = { ...obj }
console.log(newObj)// { name: 'Foo', age: 22 }


const obj1 = { firstName: 'Foo', age: 22 };
const obj2 = { lastName: 'Bar', gender: 'M' };
const newObj = { ...obj1, ...obj2, planet: 'Earth' };
console.log(newObj)// { firstName: 'Foo', age: 22, lastName: 'Bar', gender: 'M', planet: 'Earth' }


// -------------- DESTRUCTING ------------------------------>

const address = [221, 'Baker Street', 'London'];
const [ houseNo, , city ] = address;
console.log(houseNo, city)// 221 'London'


const details = { firstName: 'Code', lastName: 'Burst', age: 22 };
const { firstName, age } = details;
console.log(firstName, age);// Code 22