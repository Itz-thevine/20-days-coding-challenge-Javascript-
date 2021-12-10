var a = document.getElementById('a');
var b = document.getElementById('b');
var c = document.getElementById('c');
var sol = document.getElementById('sol');
var out = document.querySelector('.solutionOne');
var outTwo = document.querySelector('.solutionTwo');

sol.addEventListener('click', function(){
    var aValue = a.value;
    var bValue = b.value;
    var cValue = c.value;
    quadratic(aValue, bValue, cValue);
});

function quadratic(firstCof, secCof, thirdCof){
   if (firstCof != '' && secCof != '' && thirdCof != '') {
        negSecCof = -secCof;
        sqrSecCof = secCof * secCof;
        var z = sqrSecCof - (4 * firstCof * thirdCof);
        var root = Math.sqrt(z);
        var rootOne = (negSecCof + root)/(2 * firstCof);
        var rootTwo = (negSecCof - root)/(2 * firstCof);

        if (Number.isNaN(rootOne) == true) {
            out.innerText = 'root One is a complex Number'
        }else{
            out.innerText = 'Root one =' + rootOne
        }
        if (Number.isNaN(rootTwo) == true) {
            outTwo.innerText = 'root Two is a complex Number'
        }else{
            outTwo.innerText = 'Root Two =' + rootTwo
        }

   }else{
       out.innerText = 'field not completely filled'
   }
}