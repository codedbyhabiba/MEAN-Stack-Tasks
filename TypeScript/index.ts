console.log('Day One TypeScript');
/*****************Types***********************/
let studentName: string ='habiba';
let age: number=20;
let isStudent: boolean = true;
console.log(studentName,age,isStudent);

/*******************Union Types*********************/
let id:number|string;
id = 10;
id = 'habiba';

/*************Function*******************/
function add(a: number, b: number): number {
    return a + b;
}

console.log(add(5, 10));

/*************Interface*******************/
interface Student {
    name: string;
    age: number;
    isStudent: boolean;
}

let student: Student = {
    name: "Habiba",
    age: 20,
    isStudent: true
};

/*************Generic******************/

function identity<T>(value:T):T{
    return value;
}
console.log(identity<string>("Hello"));
console.log(identity<number>(100));
console.log(identity<boolean>(true));

/*************Enum******************/

enum Direction {
    driver = "driver",
    owner = "owner",
    admin = "admin",
}
let direction: Direction = Direction.driver;

console.log(direction);

/*************Modules*****************/
import { multiply } from "./modules/export";

console.log(multiply(5, 4));

import { Rectangle } from "./task2";

let rectangle = new Rectangle(10, 5);

console.log("Rectangle:", rectangle);
console.log("Circumference:", rectangle.CalcCircumference());


// Decorato جاوبتها مع حضرتك ف السيشن









