console.log("rig ");
let a1;
// a1 = 'hello Okten'; //string
a1 = 123; //number
console.log(a1);

const c1 = 'fhkgjh,'; //не можна перевизначити, констранта
var v1 = 'hello'; // старий метод - краще не юзати
// типи даних :
//string ^
let s1 = 'hello';
let s2 = "okten";
let s3 = `!!!!`;

//let result = s1+ ' '+s2+ ' '+ s3;
let result = `${s1} ${s2} ${s3}`;
console.log(result);

//number :
let n1 = 10;
let n2 = 3;
let nRes = n1 % n2;
console.log(nRes);
//boolen :
// < > <= >= == != === !== true false
let b1 = 5;
let b2 = 10;
let bRes =  b1>b2;
console.log(bRes);

console.log(typeof b1) // тип змінної в консолі

let s = 'hello';
let n = 10500;
let b = true;
console.log(s+n);
console.log(s+n+b);//number + string = string

console.log(10+20+'xxx');

//конвертнути стрінгу в число :
console.log(+'123');
//конвертувати стрінгу в bool :

console.log(!!'absd'); // true
console.log(!!'');//false - бо пустий рядок також (!!0), (!!undefined), (!!false), (!!NaN), (!!null)

// масив :
let arr = [111, 'uhgurlhg', true];
console.log(arr[0]);
console.log(arr[1]);

let user = {
    name : 'vasya',
    age : 13,
    status : true
};
console.log(user.name)