// factorial: 
// 5! = 1x2x3x4x5
// 10! = 1x2x3x4x5x6x7x8x9x10

function factorial(num){
    var factorial = 1;
    for( var i = 1; i <= num; i++){
        factorial = factorial * i ;
        // console.log(i, factorial);
    }
    return factorial;
}
var result = factorial(50)
console.log(result);

// function factorial(n){
//     var factorial = 1;
//     for(var i = n; i >= 1; i--){
//         factorial = factorial * i;
//         // console.log(factorial);
//     }
//     return factorial;
// }
// var result = factorial(50);
// console.log(result);