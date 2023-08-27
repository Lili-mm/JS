let users1 = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for (const user of users1){
    console.log(user)
};
let users2 = [
    {id : 1, age: 31, status: false},
    {id : 2, age: 30, status: true},
    {id : 3, age: 29, status: true},
    {id : 4, age: 28, status: false},
    {id : 5, age: 30, status: true},
    {id : 6, age: 31, status: false},
    {id : 7, age: 28, status: false},
    {id : 8, age: 29, status: true},
    {id : 9, age: 30, status: true},
    {id : 10, age: 31, status: false},
    {id : 11, age: 31, status: true}
];

function looper(array){
    for (const item of array){
        console.log(item)
    }
};
// looper(users1);
// looper(users2);
// function foo(a, b, c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
//
// }
// foo(3, 'dfs', true);

function a(){
    console.log(Array.from(arguments))
};
a(2,3,5,78,4);
a(4,5,9,1,44,67);
function f(str1, str2, ...rest){
    console.log(str1);
    console.log(str2);
    console.log(rest);
}

f('f', 'v', 'fff', '342')