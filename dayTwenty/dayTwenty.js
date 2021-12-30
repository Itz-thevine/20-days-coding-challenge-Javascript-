// Create a rock paper scissors game. For the player, receive input from the user. Also,
// we want to know the winner at the end of the game.

var userScore = document.querySelector('.userScore');
var compScore = document.querySelector('.compScore');
var userInp = document.getElementById('userInp');
var submit = document.getElementById('submit');
var out = document.querySelector('.out');
var compValue = document.querySelector('.compValue');

var comOption = ['rock', 'scissors', 'paper'];
var userNumber = 0;
var comNumber = 0;
var score = 1;

submit.addEventListener('click', ()=>{
    if (userInp.value.toLowerCase() == 'rock' || userInp.value.toLowerCase() == 'paper' || userInp.value.toLowerCase() == 'scissors') {
        // out.innerText = 'yea'
        let rdm = Math.floor(Math.random() * (2 - 0 +1)) + 0;
        let randomIndex = comOption[rdm];
        
        compValue.innerText = 'computer picks :' +randomIndex;
        
        // console.log(number)
        // userScore.innerText = number;

        if (userInp.value.toLowerCase() == 'rock' && randomIndex =='scissors') {
            userNumber += score;
            userScore.innerText = userNumber;
            out.innerText = 'user beats Computer';
        }else if (userInp.value.toLowerCase() == 'scissors' && randomIndex =='paper') {
            userNumber += score;
            userScore.innerText = userNumber;
            out.innerText = 'user beats computer'
        }else if (userInp.value.toLowerCase() == 'paper' && randomIndex =='rock') {
            userNumber += score;
            userScore.innerText = userNumber;
            out.innerText = 'user beats computer'
        }else if (userInp.value.toLowerCase() == 'scissors' && randomIndex =='rock') {
            comNumber += score;
            compScore.innerText = comNumber;
            out.innerText = 'computer beats user';
        }else if (userInp.value.toLowerCase() == 'paper' && randomIndex =='scissors') {
            comNumber += score;
            compScore.innerText = comNumber;
            out.innerText = 'computer beat user';
        }else if(userInp.value.toLowerCase() == 'rock' && randomIndex =='paper'){
            comNumber += score;
            compScore.innerText = comNumber;
            out.innerText = 'computer beat user'
        }else{
            out.innerText = 'draw'
        }


    }else{
        out.innerText = 'invalid pick, choose either ROCK or PAPER or SCISSORS';
    }

    
})