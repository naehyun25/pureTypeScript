"use strict";
let num;
num = 8;
let str = "내현";
//number 타입의 배열 nums를 선언 후 임의 숫자를 할당
let nums;
nums = [1, 2, 3, 4];
console.log(nums); // [1,2,3,4]
//object타입 변수 obj를 선언하고 숫자타입속성 id , 문자타입속성 name을 작성하시오
let obj;
obj = {
    id: 15,
    name: "타입스크립트"
};
console.log(obj);
let member = ["나초", "푸초", "커피"];
console.log(member);
let reage = -0.5;
console.log(reage);
let named;
named = "뭐로할까요";
named = "두두둥😀";
console.log(named);
let confirmIs;
confirmIs = true;
console.log(confirmIs);
let groubA;
groubA = [3, 5, 6];
console.log(groubA);
let groubB;
groubB = [3, 5, 6, "k", "is", [], {}];
console.log(groubB);
let groubC = [{
        title: "first",
        section: 3
    }];
console.log(groubC);
let cats = {
    name: "푸",
    age: 5
};
console.log(cats);
let unionRe = ["1", "2"];
unionRe = "안녕";
unionRe = 1;
let cat;
cat = [{
        name: "나초",
        age: 10,
        scla: true
    },
    "우리집고양이"];
console.log(cat);
let catA = [
    {
        name: "나초",
        age: 10,
        scla: true
    },
    "우리집고양이"
];
console.log(catA);
function plus(a, b) {
    return a + b;
}
plus(1, 3);
const testIn = ["a", "b", "c"];
function insert(array, value) {
    const insertB = [value, ...array];
    console.log(insertB);
    //console.log(insertB[0].split(""))
    return insertB;
}
insert(testIn, 3);
