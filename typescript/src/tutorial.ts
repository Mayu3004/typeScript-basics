
let awesomeName: string = 'shakeAndBake';
awesomeName = 'something'; // Valid becoz type still reamins string

awesomeName = awesomeName.toUpperCase();//will show all the methods releated to string only

console.log(awesomeName);
//awesomeName = 20; //gives error

let amount: number = 20;
amount = 12 - 1;
//amount = 'pant' //gives error

let isAwesome: boolean = true;
isAwesome = false;
// isAwesome = 'shakeAndBake' //error

// CHALLENGE
// 1.Create a variable of type string and try to invoke a string method on it.
// 2.Create a variable of type number and try to perform a mathematical operation on it.
// 3.Create a variable of type boolean and try to perform a logical operation on it.
// 4.Try to assign a value of a different type to each of these variables and observe the TypeScript compiler's response.
// You can use type annotation or inference


let newString: string = "Mayur";
newString = newString.toUpperCase();
console.log(newString);

let newNumber: number = 123;
newNumber += newNumber;
console.log(newNumber);

let newBoolean: boolean = true;
if(newBoolean){
    console.log("Inside if")
}

//
let tax: number | string = 10;
tax = 100;
tax = '$10';

let requestStatus: 'pending'|'error'|'success' = 'pending';

requestStatus = "pending"