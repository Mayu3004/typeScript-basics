
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

requestStatus = "pending";

//any type

let notSure: any = 4;
notSure = "Mayur";
notSure = true;


let random; //this has type any

//real time example
const books = ['1984','Brave new world', 'farenhiet 451'];

let foundBook: string | undefined;
for(let book of books){
    if(book === '1983'){
        foundBook = book;
        break;
    }
}
foundBook?.length //?optional chaining
console.log(foundBook)

//CHALLENGE
// 1. Create a variable orderStatus of type 'processing' | 'shipped' | 'delivered' and assign it the value 'processing'. Then, try to assign it the values 'shipped' and 'delivered'.
// 2 .Create a variable discount of type number | string and assign it the value 20. Then, try to assign it the value '20%'.

let orderStatus: 'processing'|'delivered'|'shipped'='processing';
orderStatus = 'shipped';

let discount: string | number = 20;
discount = '20%';

// Setting types to array

let prices: number[] =[100,200,300]
let fruits: string[] = ['apple','mango','banana']

let emptyValues =  []; // givees type any[]

//setting using union
let array:(string | boolean)[] = ['apple','mango',true,false]

// CHALLENGE
// 1.Create an array temperatures of type number[] and assign it some values. Then, try to add a string value to it.
// 2.Create an array colors of type string[] and assign it some values. Then, try to add a boolean value to it.
// 3.Create an array mixedArray of type (number | string)[] and assign it some values. Then, try to add a boolean value to it.


let temperatures: number[] = [12.3,90.4,0,100];
let colors: string[] = ['red','blue','green'];
let mixedArray: (string|number)[] = ['red','blue',10.20];








