//Цикли
// let x = 0;
// x++;
// console.log(x);
// ++x;
// console.log(x);
let users = [
    {name : 'ht', id: 1},
    {name : 'ht', id: 1},
    {name : 'rswte', id: 1},
    {name : 'hrseg', id: 1},
    {name : 'whgse', id: 1},
    {name : '4tey', id: 1},
];
// document.write(users[0].name);
//
// //for
// for (let index = 0; index<users.length;index++){
//     document.write(<div>${users[index].name}</div> );
// }
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//
// }
// for (let i = users.length - 1; i >= 0; i--) {
//     const user = users[i];
//     console.log(user);
//
// }
// // цикл йде від початку і до кінця без умов
// for (const user of users){
//     // if (user.id == 1){
//     //     console.log(user);
//     // }
//     for (const field in user){
//         console.log(field)
//     }
//     console.log('---------')
// }
//while
let i = 0;
while(i<users.length){
    let user = users[i];
    console.log(user);
    i++;
}
do{
    console.log('do')
}while(false)