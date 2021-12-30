var aValue = document.getElementById('a');
var bValue = document.getElementById('b');
var cValue = document.getElementById('c');
var go = document.getElementById('go');
var out = document.querySelector('.out');

go.addEventListener('click', function(){
    if (aValue.value == '' || bValue.value == '' || cValue.value == '') {
        out.innerText = 'Make sure to provide values for each sides of the triangle';
    }else{
        check(aValue.value, bValue.value, cValue.value);
    }
});


function check(a, b, c){

    if (a==b==c) {
        out.innerText = 'this is an Equilateral Triangle';
    }else if (a != b && b != c && c != a) {
        out.innerText = 'this is a Scalene Triangle';
    }else{
        out.innerText = 'this is an Isosceles Triangle';
    }

}