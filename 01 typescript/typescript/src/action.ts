
export function sayHello(name: string): void{
    console.log(`Hello ${name}`)
}
export let person2 = 'susan';

export type Student = {
    name: string;
    age: number;
}
const newStudent:Student = {
    name: 'Mayur',
    age: 21
}

export default newStudent;