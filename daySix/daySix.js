var firstInput = document.getElementById('firstInput');
var secondInput = document.getElementById('secondInput');
var sub = document.querySelector('.sub');
var out = document.querySelector('.out');

sub.addEventListener('click', function(){
    var first = firstInput.value;
    var second = secondInput.value;
    if (first.length != second.length) {
        out.innerText = 'string not of equal length'
    }else{
        
        firstSort = first.toLowerCase().split('').sort().join();
        secondSort =second.toLowerCase().split('').sort().join();
        if (firstSort == secondSort) {
            out.innerText = "these words are anagram"
        }else{
            out.innerText = "these words are not anagram"
        }
    }
});