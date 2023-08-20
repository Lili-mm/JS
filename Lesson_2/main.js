let songs = ['pink', 'acdc', 'shidedown'];
console.log(songs);
//length = lastIndex + 1
console.log(songs.length);
//lastIndex = length - 1

console.log(songs[songs.length-1]);
songs[3] = 'joe0';
songs.push('deep');
console.log(songs)
songs[songs.length]= '????';

let musicFolder = [
    ['a', 'b', 'c'],
    ['f1', 'f3', 'f4'],
    ['jef', 'lrjd', 'ijfkd'],
];

console.log(musicFolder[0][2]);
musicFolder[0].push('hhdsf');


//Об'єкти
let user = {
    id :1,
    name : 'vasys',
    age : 34,
    status : true
};
console.log(user);
console.log(user.id);

let users = [
    {id:0, name:'rf', age : 0, status:false},
    {id:2, name:'fksg', age : 34, status:true},
    {id:3, name:'re', age : 3, status:false},
    {id:4, name:'rfew', age : 40, status:false}
];

console.log(users[2].age);

user['skils'] = ['js', 'html', 'css'];
console.log(user.skils[2]);
user.skils.push('java');
console.log(user);

//user.wife = {
//    name: ia,
//    age:23,
//};

//primitive :

let origin = {};

let clone = origin;

clone.id = 10040;
console.log(clone);
console.log(origin);

let arr = [
    [],
    [],
    [],
]

let arrEle = arr[1];

arrEle.push('a');

console.log(arr);

//логічні розгалуження
if (5>4) {
    console.log('hello');
} else{
    console.log('by');
}
//
// let age = +prompt("enter your name : ");
// if (age>18){
//     console.log('adult');
// } else {
//     console.log('cartoon')
// }

let color = prompt('which color &');
// let ifRoadClear = confirm('road is clear?')
// if (color==='green'){
//     if(ifRoadClear){
//         console.log('gojjjjj')
//     }
//     console.log('go')
// } else if(color==='red'){
//     console.log('stop')
// } else {
//     console.log('run')
// }

switch (color){
    case 'green':
        console.log('go');
        break;

    case 'yellow' :
        console.log('wait');
        break;
    default :
        console.log('feee')
}