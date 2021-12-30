
var dividends = [2, 3, 4, 5, 6, 7, 8, 9];
var prime = [];

for (let i = 2; i < 10; i++) {
    dividends.forEach(dividend => {
        if (i%dividend == 0) {
            prime.push(i);
        }
    });
    if (prime.length == 1) {
        console.log(i)
    }
    prime = [];    
}


// console.log('hello');