var mon = document.getElementById('mon');
var yr = document.getElementById('yr');
var go = document.getElementById('go');
var out = document.querySelector('.out');
var outTwo = document.querySelector('.outTwo');

go.addEventListener('click', function(){
    getMonth = mon.value;
    getYr = yr.value;

    generate(getMonth, getYr);
    // console.log(getMonth):


})

function generate(a,b){

    var errorArr = [];
    var reg = /^[1-9]([0-9]{3})$/;
    let errorOne = (0 > a || a >  12 || a == '') ? 'Error! only integer from 1 - 12 in month field' : '';
    let errorTwo = (reg.test(b) == false) ? 'Enter year with format yyyy' : '';
    errorArr.push(errorOne, errorTwo);
   
    if (errorArr[0] != '' || errorArr[1] != '') {
        out.innerText = errorArr[0];
        outTwo.innerText = errorArr[1];
    }else{
        dateValue = new Date(b, a, 0).getDate();
        out.innerText = dateValue;
        outTwo.innerText = ''
    }

}