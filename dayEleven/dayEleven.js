const arrayOne = [2,3,4,5,6,7,8];
const arrayTwo = [4,9,16,25,36,49,64];

var b = '';
if (arrayOne.length == arrayTwo.length) {
    for (let i = 0; i < arrayOne.length; i++) {
        b += '(' + arrayOne[i] + ',' + arrayTwo[i] + ')'; 
    }

    console.log(b);
}