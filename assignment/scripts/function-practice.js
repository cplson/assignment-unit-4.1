console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello ${name}`;
}
// Remember to call the function to test
let myName = 'James';
console.log('2 -', helloName(myName) + '!');

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}

console.log(`3 - sum: ${addNumbers(2, 8)}`);

// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3){
  return num1 * num2 * num3;
}
console.log(` 3 - product: ${multiplyThree(3, 5, 2)}`)


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }else{
    return false;
  }
}console.log(`5 - Tests:`);
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if(array.length === 0){
    return undefined;
  }
    return array[array.length - 1];
  
}
let myArray = [];
console.log(`6 - Tests`);
console.log(`Result of an empty array: ${getLast(myArray)}`);
myArray.push(2);
myArray.push(5);
myArray.push(13);
console.log(`Result of populated array: ${getLast(myArray)}`);

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for(v of array){
    if(v === value){
      return true;
    }
  }
  return false;
}
console.log(`7 - Tests`);
console.log(`Result of 1: ${find(1, myArray)}`);
console.log(`Result of 2: ${find(2, myArray)}`);
console.log(`Result of 1: ${find(4, myArray)}`);
console.log(`Result of 1: ${find(13, myArray)}`);


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  return (letter === string[0] ? true : false); 
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( arr) {
  let sum = 0
  for(i of arr){
    sum += i;
  }
  // TODO: loop to add items
  return sum;
}
console.log(`9 - Test:`);
console.log(`Expected output is 20: ${sumAll(myArray)}`);
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
myArray.push(-10);
myArray.push(9);
myArray.unshift(-1);
myArray.push(0);
console.log('10- original array:', myArray);
console.log(`The new array with only positive numbers: ${filterPositive(myArray)}`);
function filterPositive(arr){
let newArray = [];
for(value of arr){
  if(value > 0){
    newArray.push(value);
  }
}
return newArray;
}



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// Given an array of strings complete the function landPerimeter 
// by calculating the total perimeter of all the islands. 
// Each piece of land will be marked with 'X' while the water fields 
// are represented as 'O'. Consider each tile being a perfect 1 x 1 piece of land.

let graph1 = [
 'XOOXO',
 'XOOXO',
 'OOOXO',
 'XXOXO',
 'OXOOO'
]

let graph2 = [
'XOOO',
'XOXO',
'XOXO',
'OOXX',
'OOOO'
]

function landPerimeter(array){
  perimeter = 0;
  for(let x = 0; x < array.length; x++){
    for(let y = 0; y < array[x].length; y++){
      if(array[x][y] === 'X'){
        perimeter += 4;
        //Checks for adjacent land values
        if(x-1 >= 0 && array[x-1][y] === 'X'){          
            perimeter--;      
        }
        if(x+1 < array.length && array[x+1][y] === 'X'){
          perimeter--;
        }
        if(y-1 >= 0 && array[x][y-1] === 'X'){
          perimeter--;
        }
        if(y+1 < array[x].length && array[x][y+1] === 'X'){
          perimeter--;
        }

      }
    }
  }
  return perimeter;
}

console.log('11 - Tests:');
console.log(`The expected output is 24: ${landPerimeter(graph1)}`);
console.log(`The expected output is 18: ${landPerimeter(graph2)}`);