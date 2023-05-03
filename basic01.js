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
let dog03;
dog03 = { name: "망고", age: 5 };
let doggy03;
doggy03 = [
    dog03,
    { name: "망고", age: 5 }
];
console.log(doggy03);
//type추론과 union타입(type inference, union type)
let topic = "타입스크립트";
//기본적으로 타입을 지정하지 않으면 any type 이 지정이 되는데 , 값을 할당한 경우 값에 따라 number, string 등 타입이 할당된다.
//유니온타입
let union = "유니온타입";
// string, number, boolean 3개 중 한개만 들어와도 된다.
union = 1234;
union = true;
//본캐 dog
// let dog : {
//     name : string;
//     age : number;
// };
let dog; //aliases는 중괄호를 포함한 부분이다. 
let dogs; //{}[] 
//Generic
function add(a, b) {
    return a + b;
}
//void 함수의 타입 : return 값이 비었음을 의미한다(=null, undefined)
function output(value) {
    console.log(value);
    return value;
}
output("출력");
// function insertAtBeginning(array:any[],value:any ){
//     const newArr=[value, ...array]
//     return newArr;
// }
//const testArr=[1,2,3]; //:number[]
//const updateArr=insertAtBeginning(testArr,-1) //:any[]
//-1,1,2,3
//any를 쓰면 반환값이 모두any 타입이다.
//console.log(updateArr[0].split(""));
//split은 string에만 쓸수 있는 문법, 이렇게 쓰면 컴파일전에 오류 발견이되어야 타입스크립트를 쓰는 의미가 있는데 컴파일 후에 오류가 발생한다. -> 이걸 generic 으로 바꿔보자.
//T를 쓰면 제네릭 타입을 쓰겠다는 명령어 : 사용자지정타입
//T 아니고 다른거 써도 됨 A 같은거  : 근데 보통 T를쓴다.
function insertAtBeginning(array, value) {
    const newArr = [value, ...array];
    return newArr;
}
const testArr = [1, 2, 3]; //number[]
const updateArr = insertAtBeginning(testArr, -1); //number[]
//console.log(updateArr[0].split(""))
const stringArr = insertAtBeginning(["a", "b"], "c");
console.log(stringArr[0].split(""));
