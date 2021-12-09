var btn = document.querySelector('.btn');
var out = document.querySelector('.out');

var arr = ['081', '080','070', '090'];
btn.addEventListener('click', function () {
    
    for (let i = 0; i <= 9; i++) {
        var number = getRandom();
        console.log(arr[randomIndex()] + number);
    }
})

function getRandom (min=11111111, max=100000000){
    return Math.floor(Math.random() * (max - min) + min);
}
function randomIndex(){
    return Math.floor(Math.random()*4);
}