// Your code here:
(function song(){
    for (let i=99 ; i>=1 ;i--){
       
        if (i != 1){
            console.log( i,' bottles of milk on the wall, ', i,' bottles of milk. Take one down and pass it around, ', i-1 ,' bottles of milk on the wall.');
        }
         else{
             console.log("1 bottle of milk on the wall, 1 bottle of milk, Take one down and pass it around, no more bottles of milk on the wall.");
         }
    }
})();