// Write a program, which will find all such numbers between 1000 and 3000 (both included) 
// such that each digit of the number is an even number. The numbers obtained should be
// printed in a comma-separated sequence on a single line.

let numbers= '';
let number = 998
for (let i = 0; i <= 1000; i++) {
    number += 2;
    numbers += number + ',';
}

console.log(numbers);
