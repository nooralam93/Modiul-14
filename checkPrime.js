// var n = 110;
function isPrime(n){
    for( var i = 2; i < n; i++){
        // console.log( i, n / i);
        // console.log( i, n % i);
        if(n % i == 0){
            return "Not a prime number"
            // break;
        }  
    }
    return "Your number is a prime number"
}
var result = isPrime(109);
console.log(result);