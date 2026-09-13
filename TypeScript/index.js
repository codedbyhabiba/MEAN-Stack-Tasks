console.log('Day One TypeScript');
/*****************Types***********************/
let studentName = 'habiba';
let age = 20;
let isStudent = true;
console.log(studentName, age, isStudent);
/*******************Union Types*********************/
let id;
id = 10;
id = 'habiba';
/*************Function*******************/
function add(a, b) {
    return a + b;
}
console.log(add(5, 10));
let student = {
    name: "Habiba",
    age: 20,
    isStudent: true
};
/*************Generic******************/
function identity(value) {
    return value;
}
console.log(identity("Hello"));
console.log(identity(100));
console.log(identity(true));
/*************Enum******************/
var Direction;
(function (Direction) {
    Direction["driver"] = "driver";
    Direction["owner"] = "owner";
    Direction["admin"] = "admin";
})(Direction || (Direction = {}));
let direction = Direction.driver;
console.log(direction);
/*************Modules*****************/
import { multiply } from "./modules/export";
console.log(multiply(5, 4));
import { Rectangle } from "./task2";
let rectangle = new Rectangle(10, 5);
console.log("Rectangle:", rectangle);
console.log("Circumference:", rectangle.CalcCircumference());
//يعني بدل ما أغير الـ class نفسها مباشرة، أقدر أضيف عليها معلومات أو behavior باستخدام Decorator
//لـ Decorator ببساطة هو حاجة بنحطها بـ @ فوق حاجة تانية، زي:
// class
// method
// property
// علشان نقول لـ TypeScript:
// "اعمل حاجة إضافية على الحاجة دي / سجّل معلومات عنها.
