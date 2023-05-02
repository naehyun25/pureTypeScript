let num : number;
num = 8;

let str : string = "내현";

//number 타입의 배열 nums를 선언 후 임의 숫자를 할당
let nums : number [];
nums = [1,2,3,4];
console.log(nums) // [1,2,3,4]

//object타입 변수 obj를 선언하고 숫자타입속성 id , 문자타입속성 name을 작성하시오
let obj :{
    id : number,
    name : string
};
obj = {
    id:15,
    name : "타입스크립트"
}
console.log(obj)

let member:string[] = ["나초","푸초","커피"];
console.log(member)

let reage:number = -0.5;
console.log(reage);

let named:string ;
named = "뭐로할까요";
named = "두두둥😀";
console.log(named);

let confirmIs : boolean;
confirmIs = true;
console.log(confirmIs);

let groubA : number[];
groubA=[3,5,6];
console.log(groubA);
let groubB : any[];
groubB=[3,5,6,"k","is",[],{}];
console.log(groubB);

let groubC : {title:string, section:number}[]=
[{
    title:"first",
    section:3
}]
console.log(groubC);

let cats :{ name : string , age:number}=
{
    name:"푸",
    age:5
}

console.log(cats);
