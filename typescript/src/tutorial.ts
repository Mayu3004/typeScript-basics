
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

//OBJECTS AND FUNCTIONS

let car: {brand:string,year:number} = {
    brand: 'toyota',
    year: 2024
}
car.brand = 'ford';

let car1: {brand:string,year:number} = {
    brand: 'audi',
    year: 2023
}

let book = {title:'book',cost:20};
let pen = {title:'pen',cost:10};
let notebook = {title:'notebook'};
let items:{readonly title: string,cost?:number}[]= [pen,book,notebook]; //? optional property  readonly=>can read cannot change value

//CHALLENGES
// 1.Create an object bike of type { brand: string, year: number } and assign it some values. Then, try to assign a string to the year property.
// 2.Create an object laptop of type { brand: string, year: number } and try to assign an object with missing year property to it.
// 3.Create an array products of type { title: string, price?: number }[] and assign it some values. Then, try to add an object with a price property of type string to it.

let bike: {brand:string,cost:number} = {
    brand:'Bullet',
     cost:150000
    }

// let laptop: {brand:string,year:number} = {
//     brand:'Dell',
//      year:2023
//     }

let productArray: {title:string,price?:number}[]=[
    {
        title:'Laptop',
        price:150000
    },
    {
        title:"Bike"
    }
];
let product1:{title:string,price?:number} = {title:'shoes',price:3500};
productArray.push(product1);

//FUNCTIONS

// function sayHi(name){
        
// } //if we dont give the type it gives error so there are three ways to define it.
//1.any
//2.config file changes
//type

function sayHi(name:string){
    console.log(`Hello,Gud mrng ${name.toUpperCase()}!!!`);
}
sayHi('Mayur')

function calculateDiscount(price:number):number {
    const hasDiscount = true;
    if(hasDiscount){
        // return 'Discount applied'; // gives error becoz this function can return only number
    }
    return price*0.9;

}

const ans = calculateDiscount(200);

function addThree(number: any){
    let anotherNumber: number = 3;
    return number+anotherNumber;
}
const res = addThree(10);
console.log(res);

//CHALLENGE
// 1.Create a new array of names.
// 2.Write a new function that checks if a name is in your array. This function should take a name as a parameter and return a boolean.
// 3.Use this function to check if various names are in your array and log the results.

let nameStudent:string[] = ['Mayur','Amit','Yuviraj','Arpita'];

function isNamePresent(nameStudent:string[]):boolean{

    for(let i = 0;i<nameStudent.length;i++){
        if(nameStudent[i] === 'Mayur'){
            return true;
        }
    }
    return false;
}

console.log(isNamePresent(nameStudent))

// Optional and default parameters

function calculatePrice(price:number,discount?:number):number{
    return price-(discount || 0);//giving optional parameters
}
let priceAfterDiscount = calculatePrice(100,80);

function calculateScore(initalScore:number,penaltyPoints:number=0):number{
    return initalScore-penaltyPoints;
}

let scoreAfterPenalty = calculateScore(100,20);
let scoreWithoutPenalty = calculateScore(100);

function sum(message:string, ...numbers:number[]):string{
    const doubled = numbers.map((num)=>num*2);
    let total = numbers.reduce((prev,curr)=>{
        return prev+curr;
    },0);
    return `${message}${total}`

}
let result = sum('The total is: ',1,2,3,4,5)

// returning nothing from the function i.e void returntype

function logMessage(message: string): void{
    console.log(message);
    // return "abc"// gives error as return type is void
}

logMessage("Hello World")

//CHALLENGES
// 1.Your task is to create a function named processInput that accepts a parameter of a union type string | number. The function should behave as follows:

// 2.If the input is of type number, the function should multiply the number by 2 and log the result to the console.
// If the input is of type string, the function should convert the string to uppercase and log the result to the console.

function processInput(param:(string | number)):(string|number){
    if(typeof param ==='number'){
        return param*2;
    }else{
        return param.toUpperCase();
    }
}
//Object as parameter

function createEmployee({id}:{id: number}):{
    id:number,
    isActive:boolean
    } {
    return {id,isActive: id%2===0}
};

const first = createEmployee({id:1})
const second = createEmployee({id:2})
console.log(first,second)

//alternative

function createStudent(student:{id:number,name:string}):void{
    console.log(`WElcome to the course ${student.name.toUpperCase()}`)
}

createStudent({id:1,name:'Mayur'})

// CHALLENGE
//1. Your task is to create a function named processData that accepts two parameters:

// 2.The first parameter, input, should be a union type that can be either a string or a number.
// 3.The second parameter, config, should be an object with a reverse property of type boolean, by default it "reverse" should be false
// The function should behave as follows:

// 4.If input is of type number, the function should return the square of the number.
// 5.If input is of type string, the function should return the string in uppercase.
//6.If the reverse property on the config object is true, and input is a string, the function should return the reversed string in uppercase.

function processData(input:(string|number),config:{reverse:boolean}={reverse:false}):string|number{
    if(typeof input === 'number'){
        return input**2;
    }else{
        let res = input.toUpperCase();
        if(config.reverse){
            return res.split('').reverse().join('');
            
        }
        return res;
    }
}

console.log(processData(10))
console.log(processData('mayur'))
console.log(processData('amit',{reverse:true}))

// Alias and Interface
type User =  {id: number;name:string;isActive:boolean}
const john:User={
    id:1,
    name:'john',
    isActive: true
}
const sushan:User={
    id:1,
    name:'sushan',
    isActive: false
}

function createUser(user:User):User{
        console.log(`Hello there ${user.name.toUpperCase()}`)
        return user;
}
 
 type StringOrNumber = string | number;

 let value:StringOrNumber;
 value = 'hello';
 value = 123;
 type Theme = 'light' | 'Dark';

 let theme:Theme;
 theme = 'Dark';
 theme = 'light'

 function setTheme(t: Theme){

 }

 //Challenge
// 1. Define the Employee type: Create a type Employee with properties id (number), name (string), and department (string).

// 2.Define the Manager type: Create a type Manager with properties id (number), name (string), and employees (an array of Employee).

// 3.Create a Union Type: Define a type Staff that is a union of Employee and Manager.

// 4.Create the printStaffDetails function: This function should accept a parameter of type Staff. Inside the function, use a type guard to check if the 'employees' property exists in the passed object. If it does, print a message indicating that the person is a manager and the number of employees they manage. If it doesn't, print a message indicating that the person is an employee and the department they belong to.

//5. Create Employee and Manager objects: Create two Employee objects. One named alice and second named steve. Also create a Manager object named bob who manages alice and steve.

// 6.Test the function: Call the printStaffDetails function with alice and bob as arguments and verify the output.


type Employee = {id:number;name:string;department:string};
type Manager = {id:number;name:string; employees:Employee[]};

type Staff = Manager | Employee;

function printStaffDetails(staff:Staff):void{
    if('employees' in staff){
        console.log(`${staff.name} is an manager and has ${staff.employees.length} employees`)

    }else{
        console.log(`${staff.name} is an employee in the ${staff.department} department`)
    }
}

const mayur:Employee = {id:1,name:'Mayur',department:'Delivery'};
const amit:Employee = {id:1,name:'Amit',department:'Delivery'};
const yuviraj:Employee = {id:1,name:'Yuviraj',department:'Delivery'};

const aniruddha:Manager = {id:1,name:'Anirudhha',employees:[mayur,amit,yuviraj]};

printStaffDetails(aniruddha);
printStaffDetails(mayur);

type Book = {id: number;name:string;price:number};
type DiscountedBook = Book&{discount: number};

const book1:Book ={
    id: 1,
    name:"How to cook a dragon",
    price:15
};
const book2:Book ={
    id: 2,
    name:"The secret life of unicorns",
    price:15
};
const discountedBook:DiscountedBook={
    id: 3,
    name:"Gnomes vs. Goblins: The Ulimate Guide",
    price:15,
    discount:0.15
};


const propName = 'age';
type Animal = {
    [propName]: number;
};
let tiger:Animal = {[propName]: 5};


//# iNTERFACE fudamental

interface Books {
    readonly isbn: number;
    title: string;
    author: string;
    genre?:string;
    printAuthor():void;
    printTitle(message:string):string;
    printSomething: (someValue: number)=>number;
}

const deepWork:Books = {
    isbn:123,
    title: 'Deep Work',
    author: 'Cal Newport',
    genre: 'Self-help',
    // printAuthor(){
    //     console.log(this.author)
    // },
    printTitle(message){
        return `${this.title} ${message}`
    },
    //first option
    // printSomething:function(someValue){
    //     return someValue;
    // }
    //second option
    // printSomething:(someValue)=>{
    //     console.log(deepWork.author) // requires this parameter as arrow function captures global
    //     return someValue;
    // }
    //third option
    printSomething(someValue){
        return someValue;
    },
    printAuthor:()=>{
        console.log(deepWork.author)
    },
}

deepWork.printAuthor()
console.log(deepWork.printTitle('is a awesome book'));
console.log(deepWork.printSomething(34));

//CHALLENGE
// 1.Start by defining an interface Computer using the interface keyword. This will serve as a blueprint for objects that will be of this type.
// 2.Inside the interface, define the properties that the object should have. In this case, we have id, brand, ram, and storage.
// 3.Use the readonly keyword before the id property to indicate that it cannot be changed once it's set.
// 4.Use the ? after the storage property to indicate that this property is optional and may not exist on all objects of this type.
// 5.Also inside the interface, define any methods that the object should have. In this case, we have upgradeRam, which is a function that takes a number and returns a number.
// 6.Now that we have our interface, we can create an object that adheres to this interface. This object should have all the properties defined in the interface (except for optional ones, which are... optional), and the methods should be implemented.
// 7.Finally, we can use our object. We can call its upgradeRam method to increase its RAM.

interface Computer{
    readonly id:number;
    brand:string;
    ram:number;
    upgradeRam(increase: number):number;
    storage?:number;
}
const laptop: Computer={
    id:1,
    brand:'random brand',
    ram:8, 
    upgradeRam(amount: number){
        this.ram = this.ram+amount
        return this.ram;
    },
};
laptop.storage = 256;

console.log(laptop.upgradeRam(4)); 
console.log(laptop);

// interface Person{
//     name:string;
//     getDetails():string;
// }
// interface DogOwner{
//     dogName: string;
//     getDogDetails():string;
// }
// interface Person{
//     age: number
// }

// const person:Person ={
//     name:'MAyur',
//     age:30,
//     getDetails() {
//         return `Name: ${this.name}, Age: ${this.age}`
//     },
// }

// console.log(person.getDetails())

// interface Employees extends Person{
//     employeeId: number;
// }

// const employee:Employees ={
//     name:"Mayur",
//     age:30,
//     employeeId: 123,
//     getDetails(){
//         return `Name: ${this.name}, Age: ${this.age} EmployeeID: ${this.employeeId}`
//     }
// }
// console.log(employee.getDetails())

// interface Managers extends Person,DogOwner{
//     managePeople():void;
// }

// const manager:Managers = {
//     name: 'Aniruddha',
//     age:35,
//     dogName: 'rex',
//     getDetails(){
//         return `Name: ${this.name}, Age: ${this.age}`
//     },
//     getDogDetails(){
//         return `Dog Name: ${this.dogName}`
//     },
//     managePeople(){
//         console.log("managing people..")
//     },
    
// }
// console.log(manager.managePeople())

// CHALLENGE PART 1

// 1.Define the Person interface Start by defining a Person interface with a name property of type string.
// 2.Define the DogOwner interface Next, define a DogOwner interface that extends Person and adds a dogName property of type string.
// 3.Define the Manager interface Then, define a Manager interface that extends Person and adds two methods: managePeople and delegateTasks. Both methods should have a return type of void.
// 4.Define the getEmployee function Now, define a function called getEmployee that returns a Person, DogOwner, or Manager. Inside this function, generate a random number and use it to decide which type of object to return. If the number is less than 0.33, return a Person. If it's less than 0.66, return a DogOwner. Otherwise, return a Manager.
// 5.Finally, create a variable called employee that can be a Person, DogOwner, or Manager, and assign it the return value of getEmployee. Then, log employee to the console.

interface Person{
    name: string;
}

interface DogOwner extends Person{
    dogName: string;
}
interface Managers extends Person{
    managePeople():void;
    delegateTasks():void;
}


const employee1: Person|DogOwner|Managers = getEmployee();

function getEmployee(): Person|DogOwner|Managers {
    const random = Math.random();
    if(random<0.33){
        return{
            name:'Mayur',
        };
    }else if(random <0.66){
        return{
            name:'Amit',
            dogName:'Rex',
        };
    }else{
        return{
            name:'Anirrudha',
            managePeople:()=>console.log('Managing people...'),
            delegateTasks:()=>console.log('Delegating tasks...'),
        };
    }
}

// Tuples

let person:[string,number] = ['Mayur',21];
let date: readonly[number,number,number]=[12,17,2001];
// date.push(43); not allowed brcoz readonly
function getPerson():[string,number]{
    return ['Mayur',21]
}
let randomPerson = getPerson();
console.log(randomPerson[0]);

//Enum => named constant
enum serverResponseStatus{
    Success = 200,
    Error = 500,
}
Object.values(serverResponseStatus).forEach((value)=>{
    if(typeof value === 'number'){
        console.log(value);
    }
});

interface ServerResponse{
    result: serverResponseStatus;
    data: string[];
}

function getServerResponse():ServerResponse{
    return{
        result:serverResponseStatus.Error,
        data:['first','second'],
    }
}

let response:ServerResponse = getServerResponse()
console.log(response)

//CHALLENGE
// 1.Define an enum named UserRole with members Admin, Manager, and Employee.
// 2.Define a type alias named User with properties id (number), name (string), role (UserRole), and contact (a tuple with two elements: email as string and phone as string).
// 3.Define a function named createUser that takes a User object as its parameter and returns a User object.
// 4.Call the createUser function with an object that matches the User type, store the result in a variable, and log the variable to the console.


enum userRole{
    Admin,
    Manager,
    Employee
}

type User1 ={
    id: number;
    name: string;
    role:userRole;
    contact:[string,string]
};

function createUsers(user:User1):User1{
    return user;
}
const user:User1 = createUsers({
    id:1,name:'Mayur',role:userRole.Admin, contact:['Mayu@gmail.com','123-345']
})
console.log(user)

// Type decision

// let someValue: any = 'this is string';
// let strLength: number = (someValue as string).length;

// type Bird = {
//     name: string;
// };

// let bridString = '{name: "Eagle"}';
// let dogString = '{breed: "Poodle"}';
// let birdObject  = JSON.parse(bridString);
// let dogObject  = JSON.parse(dogString);

// let bird = birdObject as Bird;
// let dog = dogObject as Bird;

// console.log(bird.name);
// console.log(dog.name);

enum Status{
    Pending = 'pending',
    Declined = 'declined',
}

type User2 = {
    name: string;
    status: Status;
}

const  statusValue = 'pending';
const user1:User2 = {name:'Mayur',status:statusValue as Status}

// TYPE UNKOWN

let unkownValue: unknown;

unkownValue = 'helloworld';
unkownValue = [1,2,3];
unkownValue = 42.33;

if(typeof unkownValue ==='number'){
    unkownValue.toFixed(3);
}
function runSomeCode(){
    const random = Math.random();
    if(random<0.5){
        throw new Error('There was a error..')
    }else{
        throw 'string'
    }
}

try {
    runSomeCode();
} catch (error) {
    if(error instanceof Error){
        console.log(error.message);
    }else{
        console.log(error)
    }
}

//  type never

// let someValue1:never = 0;

type Theme1 = 'light'|'Dark'

function checkTheme(theme: Theme1):void{
    if(theme === 'light'){
        console.log('light Theme');
        return
    } 
    if(theme === 'Dark'){
        console.log('Dark Theme');
        return
    } 
    theme;
}

enum Color{
    red,
    Blue,
    Green
}

function getColorName(color:Color){
    switch(color){
        case Color.red:
            return 'Red';
        case Color.Blue:
            return 'Blue';
        case Color.Green:
            return 'Green';
        default:
            let unexpectedColor:never = color;

            throw new Error(`Unexpected color value: ${color}`)
    }
}

console.log(getColorName(Color.red));
console.log(getColorName(Color.Blue));



import newStudent, {sayHello,person2, type Student} from "./action";

sayHello('TypeScript');
console.log(newStudent);
console.log(person);

const stud:Student = {
    name: 'Chetan',
    age: 18
}

console.log(stud);


//Type Guarding

// CHALLENGE
// 1.Define the function checkValue that takes one parameter value of type ValueType.
// 2.Inside the function, use an if statement to check if value is of type string. If it is, log value converted to lowercase and then return from the function.
// 3.If value is not a string, use another if statement to check if value is of type number. If it is, log value formatted to two decimal places and then return from the function.
// 4.If value is neither a string nor a number, it must be a boolean. Log the string "boolean: " followed by the boolean value.
// Finally, call the checkValue function with value as the argument.

type ValueType = string|number|boolean;

let value1: ValueType;
const random1 = Math.random();
value1 = random1<0.33 ? 'Hello' : random1<0.66 ? 123.456 : true;

function checkValue(value: ValueType):void{
    if(typeof value === 'string'){
        console.log(value.toLowerCase());
        return;
    }
    if(typeof value === 'number'){
        console.log(value.toFixed(2));
        return;
    }
    console.log(`boolean: ${value}`);
}
checkValue(12);

// Equality Narrowing

// 1.Define a function named makeSound that takes one parameter animal of type Animal.
// 2.Inside the function, use an if statement to check if animal.type is 'dog'.
// 3.If animal.type is 'dog', TypeScript knows that animal is a Dog in this block. In this case, call the bark method of animal.
// 4.If animal.type is not 'dog', TypeScript knows that animal is a Cat in the else block. In this case, call the meow method of animal.
// 5.Now you can call the makeSound function with an Animal as the argument. The function will call the appropriate method (bark or meow) depending on the type of the animal.

type Dog = {
    type:'dog';
    name:string;
    bark:()=>void
}
type Cat = {
    type:'cat';
    name:string;
    meow:()=>void
}
type Animal1 = Dog|Cat;

// function makeSound(animal:Animal1){
//     if(animal.type === 'dog'){
//         animal.bark();
//     }else{
//         animal.meow();
//     }
// }

function makeSound(animal:Animal1){
    if('bark' in animal){
        animal.bark();
    }else{
        animal.meow();
    }
}

// CHALLENGE
// 1.Define a function named printLength that takes one parameter str which can be of type string, null, or undefined.
// 2.Inside the function, use an if statement to check if str is truthy. In JavaScript and TypeScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN).
// 3.If str is truthy, it means it's a string (since null and undefined are falsy). In this case, log the length of str using the length property of the string.
// 4.If str is not truthy (i.e., it's either null or undefined), log the string 'No string provided'.
// 5.Now you can call the printLength function with a string, null, or undefined as the argument. The function will print the length of the string if a string is provided, or 'No string provided' otherwise.

function printLength(str: string|null|undefined){
    if(str){
        console.log(str.length)
    }else{
        console.log('no string')
    }
}

try {
    throw new Error('Tis is error')
} catch (error) {
    if(error instanceof Error){
        console.log(`Caught an error object: ${error.message}`);
    }else{
        console.log('unkown error..');  
    }
}

function checkInput(input:Date|string):string{
    if(input instanceof Date){
        return input.getFullYear().toString();
    }
    return input;
}
console.log(checkInput(new Date()));
console.log(checkInput('2020-04-09'));

//Type Predection

// 1.Define the Person and Student types. Student should have a study method and Person should have a login method.
// 2.Create a function named isStudent that takes a parameter person of type Person.
// 3.In the function signature, specify a return type that is a type predicate: person is Student.
// 4.In the function body, use a type assertion to treat person as a Student, and check if the study - method is not undefined. This will return true if person is a Student, and false otherwise.
// 5.Use the isStudent function in an if statement with person as the argument.
// 6.In the if block (where isStudent(person) is true), call the study method on person. TypeScript knows that person is a Student in this block, so this is safe.
// 7.In the else block (where isStudent(person) is false), call the login method on person. This is safe because if person is not a Student, it must be a Person, and all Person objects have a login method.

type Student = {
    name: string;
    study: ()=> void;
};

type User3 ={
    name: string;
    login: ()=>void;
};
type Person1 = Student|User3;

const randomPerson1 = (): Person1 =>{
    return Math.random() > 0.5
    ? {name:'Mayur',study:()=>console.log('studying')}
    :{name:'amit',login: ()=> console.log('Logging in')}
}

const person3 = randomPerson1()
function isStudent(person:Person1):person is Student{
    // return 'study' in person;
    return (person as Student).study !== undefined;
}

if(isStudent(person3)){
    person3.study()
}else{
    person3.login()
}

//Challenge - Discrimated Union and exhaustive check using the never type

type IncrementAction ={
    type: 'increment';
    amount: number;
    timestamp: number;
    user:string;
};
type DecrementAction ={
    type: 'decrement';
    amount: number;
    timestamp: number;
    user:string;
}

type Action = IncrementAction|DecrementAction;

function reducer(state:number,action:Action){
    switch(action.type){
        case 'increment':
            return state+action.amount;
        case 'decrement':
            return state-action.amount;
        default:
            const unexpectedAction:never = action
            throw new Error(`unexpected action: ${unexpectedAction}`);
    }
}
const newState = reducer(15,{
    user:'Mayur',
    type:"increment",
    amount:5,
    timestamp: 123456
})

// Arrays
// let array1: string[] = ['apple','mango','banana'];
// let array2: number[] = [1,2,3];
// let array3: boolean[] = [true,false];

let array1: Array<string> = ['apple','mango','banana'];


// function createString(arg:string):string{
//     return arg;
// }
// function createNumber(arg:number):number{
//     return arg;
// }

function genricFunction<T>(arg:T):T{
    return arg
}

const someStringValue = genricFunction<string>('Hello World');
const someNumberValue = genricFunction<number>(123);

interface GenericInteface<T>{
    value: T;
    getValue: ()=>T;
}

const genericString: GenericInteface<string> = {
    value: 'Hello world',
    getValue(){
        return this.value;
    }
}

async function someFunc():Promise<string> {
    return 'hello world'
}
const resultValue = someFunc();

function generateStringArray(length: number,value: string):string[]{
    let result: string[] = []
    result = Array(length).fill(value);
    return result;
}

function createArray<T>(length:number,value:T):Array<T>{
    let result: T[] = [];
    result = Array(length).fill(value);
    return result;
}
let arrayString = createArray<string>(10,'hello');
let numberString = createArray<number>(10,2);

console.log(arrayString);
console.log(numberString);

function pair<T,U>(param1:T,param2:U):[T,U]{
    return [param1,param2]
}

let resutantValue = pair<string,number>('hello',123);

function processValue<T extends string>(value: T):T{
    console.log(value);
    return value;
}

type Car = {
    brand: string;
    model: string;
};
const cars:Car = {
    brand: 'ford',
    model: 'mustang'
}

type Product = {
    name: string;
    price: number;
};
const products:Product = {
    name: 'shoes',
    price: 1.99
}

type Students = {
    name: string;
    age:number
}
const students:Students ={
    name: 'Mayur',
    age:21
}

function printName<T extends {name: string}>(input:T):void{
    console.log(input.name);
    
}
printName(students)
printName(products)

interface StoreData<T = any>{
    data:T[];
}
const storeNumbers:StoreData<number> = {
    data:[1,2,3,4]
}
const randomStuff:StoreData ={
    data: ['random',1],
}

// FETCH DATA

import {z} from 'zod';


const url = 'https://www.course-api.com/react-tours-project';

const tourSchema = z.object({
    id: z.string(),
    name: z.string(),
    info: z.string(),
    image: z.string(),
    price: z.string(),
})
type Tour = z.infer<typeof tourSchema>

// type Tour = {
//     id: string;
//     name: string;
//     info: string;
//     image: string;
//     price: string;

// }

async function fetchData(url: string):Promise<Tour[]>{
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // const data:Tour[] = await response.json();
        const rawData:Tour[] = await response.json();
        const result = tourSchema.array().safeParse(rawData);
        if(!result.success){
            throw new Error(`Invalid data: ${result.error}`)
        }
        console.log(result)
        return rawData;
    }catch(error){
        const errorMsg = error instanceof Error ? error.message : 'there was an error.';
        console.log(errorMsg);
        return[];
    }
}


const tours = await fetchData(url)
tours.map((tour)=>{
    console.log(tour.name);
    
})

import { Random } from "./types";


import bcryptjs from 'bcryptjs'

// CLasses

// class Books{
//     public readonly title:string;
//     public author:string;
//     private checkedOut:boolean = false;
//     constructor(title:string,author:string){
//         this.title = title;
//         this.author = author;
//     }
//     public checkOut(){
//         this.checkedOut = this.toggleCheckedOutStatus();
//     }
//     public isCheckedOut(){
//         return this.checkedOut;
//     }
//     private toggleCheckedOutStatus(){
//         return !this.checkedOut;
//     }
// }
// const deepWorks = new Books('Deep Work' , 'cal NewPort');
// console.log(deepWorks)
// deepWorks.checkOut();
// console.log(deepWorks);
//code redundancy happens

class Books{
    private checkedOut: boolean = false;
    constructor(readonly title: string,public author:string,private someValue:number){
    }
    public getSomeValue(){
        return this.someValue;
    }
    get info(){
        return `${this.title} by ${this.author}`
    }
    private set checkOut(checkedOut:boolean){
        this.checkedOut = checkedOut;
    }
    get checkOut(){
        return this.checkedOut;
    }
    public get someInfo(){
        this.checkOut = true;
        return `${this.title} by ${this.author}`
    }
}
const deepWorks = new Books('Deep Work','cal NewPort',123);
console.log(deepWorks.getSomeValue());
console.log(deepWorks.info);
// deepWorks.checkOut = true;
console.log(deepWorks);
console.log(deepWorks.someInfo);
console.log(deepWorks);


interface IPerson{
    name: string;
    age:number;
    greet(): void;
}

class Person implements IPerson{
    constructor(public name: string,public age:number){

    }
    greet():void{
        console.log(`Hello my name is ${this.name} and i am ${this.age} yrs old`);
        
    }
}

const mayuresh = new Person('Mayur',21)
mayuresh.greet();