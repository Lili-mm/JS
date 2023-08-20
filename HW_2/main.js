//Масиви та об'єкти :
//Task 1 :
let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
//Task 2:
let book1 = {
    title : 'It',
    pageCount : 1344,
    genre: 'horror'
};
let book2 = {
    title : 'Witcher',
    pageCount : 275,
    genre: 'fantasy'
};
let book3 = {
    title : 'Атлант розправив плечі',
    pageCount : 390,
    genre: 'роман'
};
//Task 3 :
let book1_1 = {
    title : 'It',
    pageCount : 1344,
    genre: 'horror',
    authors :[{
        name : 'Stephen King',
        age:75
    }]
};
let book2_2 = {
    title : 'Witcher',
    pageCount : 275,
    genre: 'fantasy',
    authors :[{
        name : 'Andrzej Sapkowski',
        age:75
    }]
};
let book3_3 = {
    title : 'Атлант розправив плечі',
    pageCount : 390,
    genre: 'роман',
    authors :[{
        name : 'Айн Ренд',
        age:75
    }]
};
//Task 4:
let user = [
    {name: 'Ivan', username : 'ii', password:123},
    {name: 'Sten', username : 'ss', password:243},
    {name: 'Lili', username : 'li', password:56736},
    {name: 'Nadin', username : 'na', password:1645423},
    {name: 'Myron', username : 'mm', password:1632223},
    {name: 'Ghkj', username : 'hgjk', password:16423},
    {name: 'Iokrr', username : 'tjg', password:15723},
    {name: 'JGlk', username : 'jkgfl', password:1236654},
    {name: 'Llkhv', username : 'ikhfi', password:166623},
    {name: 'IvaHGJn', username : 'iihyjg', password:1275463}
];
console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9].password);

//Логічні розгалуження:
//Task 1 :
let x = -3;
if (x != 0){
    console.log('Вірно')
} else {
    console.log('Невірно')
}
//Task 2 :
let time = +prompt('Enter number from 0 to 59');
if(time<0){
    console.log('Введіть додатнє значення')
}else if(time>=0 && time <=15 ){
    console.log('Перша чверть')
}else if(time >15 && time <=30){
    console.log('Друга чверть')
}else if(time>30 && time<=45){
    console.log('Третя чверть')
}else if (time >45 && time<60){
    console.log('Четверта чверть')
}else {
    console.log('Введіть число менше за 60')
};
//Task 3 :
let day = +prompt('Enter number of day');
if (day <=0 || day>31){
    console.log('Введіть інше число, такого дня не існує')
}else if(day>0 && day<=10 ){
    console.log('Перша половина');
}else if(day >10 && day<21 ){
    console.log('Друга половина')
}else {
    console.log('Третя половина')
};
//Task 4:
let dayOfWeek = prompt('Введіть день тижня');
switch (dayOfWeek){
    case 'Понеділок' :
        console.log('Monday');
        break;
    case 'Вівторок' :
        console.log('Tuesday');
        break;
    case 'Середа' :
        console.log('Wednesday');
        break;
    case 'Четвер' :
        console.log('Thursday');
        break;
    case 'Пятниця' :
        console.log('Friday');
        break;
    case 'Субота' :
        console.log('Saturday');
        break;
    case 'Неділя' :
        console.log('Sunday');
        break;
}
//Task 5 :
let a = +prompt('Enter number 1');
let b = +prompt('Enter number 2');
if (a>b){
    console.log(a)
}else if (a==b){
    console.log('Числа рівні')
}else{
    console.log(b)
};
//Task 6:
let X = prompt('enter smth') || 'default';
console.log(X);
//Task 7 :
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if(coursesAndDurationArray[0].monthDuration >5){
    console.log('Супер')
}else{
    console.log('Продовжуй')
}
if(coursesAndDurationArray[1].monthDuration >5){
    console.log('Супер')
}else{
    console.log('Продовжуй')
}
if(coursesAndDurationArray[2].monthDuration >5){
    console.log('Супер')
}else{
    console.log('Продовжуй')
}
if(coursesAndDurationArray[3].monthDuration >5){
    console.log('Супер')
}else{
    console.log('Продовжуй')
}
if(coursesAndDurationArray[4].monthDuration >5){
    console.log('Супер')
}else{
    console.log('Продовжуй')
}
if(coursesAndDurationArray[5].monthDuration >5){
    console.log('Супер')
}else{
    console.log('Продовжуй')
}