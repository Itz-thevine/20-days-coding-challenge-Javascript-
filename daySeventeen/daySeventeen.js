// Write a program, which will find all such numbers between 1000 and 3000 (both included) 
// such that each digit of the number is an even number. The numbers obtained should be
// printed in a comma-separated sequence on a single line.
// BY MMADU DIVINE


var allString = '';
var getDigit = '';
var digits = [];
let digit = [];
let numbers = 1998;

//generate array of numbers, NT it can never be odd and it can not be from 1000 - 1998
for (let i = 0; i <= 500; i++) {
    numbers += 2
    digits.push(numbers)
}

convToString();

//validations function
function convToString () {
    for (let i = 0; i < digits.length; i++) {
        getStrings = digits[i].toString().split('');
        digit.push('');
           getStrings.forEach(getString => {
               if(getString ==2 || getString == 4 || getString == 6 || getString == 8){
                   digit[i] += getString;
               }
           });   
    }
    for (let i = 0; i < digit.length; i++) {
        if(digit[i].length == 4){
            allString += digit[i] + ','
        }
    }

    console.log(allString);
}