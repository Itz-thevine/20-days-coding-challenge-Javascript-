// write a program to generate 5 random even numbers between 100 and 300

var arrNumber = [];
let b = 98
for (let i = 0; i <= 100; i++) {
    b += 2;
    arrNumber.push(b);
}

for (let i = 0; i < 5; i++) {
    var getRandom = getRandomNumberBetween(0, 99);
    console.log(arrNumber[getRandom]);
}

function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}