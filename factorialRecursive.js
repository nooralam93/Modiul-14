function factorial(n){
    var factorial = 1;
    for(var i = 10; i >= 1; i--){
        factorial = factorial * i;
        // console.log(factorial);
    }
    // console.log(factorial);
    return factorial;
}
var result = factorial(5);
console.log(result);

function factorial(n){
    var factorial = 1;
    var i = n;    
    while(i >= 1){       
        factorial = factorial * i;
        i--;
        // console.log(factorial);
    }
    return factorial;
}
var result = factorial(10);
console.log(result);
//Recursive function
function factorial(n){
    if(n == 0){
        return 1;
    }
   else{
       return n* factorial(n-1);
   }
}
var result = factorial(50);
console.log(result);