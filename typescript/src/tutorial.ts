
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


const susan = 'mayur'