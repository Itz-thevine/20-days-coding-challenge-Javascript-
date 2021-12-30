// *str* = 'My Name is Jessa'
// emp_dict = { "company": { "employee": { "name": "Jess", "payable": { "salary": 9000, "increment": {"My Name is Jessa": 15 } } } }
// Get str from the set above and reverse it to get the output:
// *yM emaN si asseJ*

var str = 'My name is Jessa';
var reverseWord;
var reSentence = '';

var splitStr = str.split(" ");

splitStr.map(spl =>{
     reverseWord = spl.split("").reverse().join('');
     reSentence += reverseWord + ' ';
})

console.log(reSentence);


// console.log(splitStr)