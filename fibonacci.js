// var fibo = [0, 1];
// fibo[2] = fibo[2-1] + fibo[2-2];
// fibo[3] = fibo[3-1] + fibo[3-2];
// fibo[4] = fibo[4-1] + fibo[4-2];
// fibo[n] = fibo[n-1] + fibo[n-2];
// fibo[i] = fibo[i-1] + fibo[i-2];
function fibonacci(n){
    var fibo = [0, 1];
for(var i = 2; i <= n; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
    // console.log(fibo[i], fibo[i-1], fibo[i-2])
}
return fibo;
// console.log(fibo)
}
var result = fibonacci(15);
console.log(result);
// While loop fibo
var fibo = [0, 1];
var i = 2;
while(i<=10){
    fibo[i] = fibo[i-1] + fibo[i-2];
    i++;
}
console.log(fibo);
