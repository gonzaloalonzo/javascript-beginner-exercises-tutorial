let input = prompt('How many people are coming to your wedding?');

// Your code here
let price= 0;
if (input>200){
    price = 20000;
}
else if (input<=200 && input >=99){
    price = 15000;
}
else if (input>=100 && input>50){
    price = 10000;
}
else{
    price = 4000;
}

console.log('Your wedding will cost '+price+' dollars');