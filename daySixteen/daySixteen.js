var stars = [];
star = '';
let reStar = 0;

for (let i = 0 ; i <= 5 ; i++){
  star += '*';
  stars.push(star);
}

for (let i = 0 ; i <= 10 ; i++){
  if (i <= 5) {
    console.log(stars[i])
  }else{
    reStar += 1
    console.log(stars[i-(2*reStar)])
  }
}
