const num = document.getElementById('num');
const submit = document.getElementById('submit');
const firstHint = document.querySelector('.firstHint');
const secondHint = document.querySelector('.secondHint');
const out = document.querySelector('.out');


var hintOne = (Math.floor(Math.random() * (100 - 50 + 1) + 50))
var hintTwo = (Math.floor(Math.random() * (hintOne - 1 + 1) + 1))
var number = (Math.floor(Math.random() * (hintOne - hintTwo + 1) + hintTwo));



window.onload = () =>{
  if(hintOne < hintTwo){
    firstHint.innerText = hintOne;
    secondHint.innerText = hintTwo;
  }else{
    firstHint.innerText = hintTwo;
    secondHint.innerText = hintOne;
  }
 
}

submit.addEventListener('click', () => {
  console.log(number)
  console.log(num.value);
  if (num.value == '') {
    out.innerText = 'Enter value';
  }else{
    if (num.value == number) {
      out.innerText = 'CORRECT!';
    } else if (num.value != number && num.value - number < 0 ) {
      out.innerText = 'INCORRECT! Your entry is lower than number';
    }else if(num.value != number && num.value - number > 0){
      out.innerText = 'INCORRECT! Your entry is higher than number';
    }
  }
})

