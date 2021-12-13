area = document.getElementById('area');
count = document.getElementById('count');
out = document.getElementById('out');


count.addEventListener('click', function(){
    sentence = area.value;

    function removeDuplicates(array){
        const trimarr = array.filter( (value, key)=>{
            return array.indexOf(value) == key
        });
        return trimarr;
    }

    function countUniqueWords(sentence) {
        const wordarr = sentence.split(' ');
        const trimarr = removeDuplicates(wordarr);

        const countObj = {};

        for (item of trimarr) {
            for (let i = 0; i < wordarr.length; i++) {
                if (!countObj.hasOwnProperty(item)) {
                    countObj[item] = 0
                }
                if (item === wordarr[i]) {
                    ++countObj[item]
                }
            }
        }
        console.log(countObj)
    }

    countUniqueWords(sentence);

});

