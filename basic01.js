"use strict";
//기본자료형(Primitive) : number, string, boolean, null, undefined...
//1. number
let age;
age = 12;
age = 1.3; //소수점가능
age = -1.5; //음수가능
age = 0;
console.log(age);
let ages;
ages = 12;
ages = 1.3; //소수점가능
ages = -1.5; //음수가능
console.log(ages);
//Number, number 둘 다 사용 가능하지만, typeScript는 오류줄이고, 유지보수용이의 목적이므로 js의  Number함수가 있으므로 사용하지말자.
//ex. string : String 
//2. string
let myName;
myName = "mango";
console.log(myName);
let yourName;
yourName = "형섭";
//3.boolean
let isInstructor = true;
console.log(isInstructor);
//배열과 객체 (complex types)
//자료형의 구조(작성방식)
let hobbies; //배열인데 string으로만 이루어진 배열
hobbies = ["수영", "축구" /* ,5,50 */]; //숫자는 안들어가짐
//객체
//자료형 선언안하면 any타입이 된다.(string, number 모두가능)
//let dog; -> 아래처럼 작성해주면 됩니다. 
// let dog : any ; 
// dog ={
//     name : "망고",
//     age : 5
// }
// let dog : any ={
//     name : "망고",
//     age : 5
// };
// = 값을 할당하는 것
// : 타입을 지정하는 구분자
// 객체안에서 사용하는 타입지정
// dog의 타입은 {}객체이다.
let dog;
dog = { name: "망고", age: 5 };
let doggy;
doggy = [
    dog,
    { name: "망고", age: 5 }
];
console.log(doggy);
//type추론과 union타입
