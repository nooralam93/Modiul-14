var inch = 156;
var feet = inch/12;
console.log(feet);

function inchToFeet(inch){
    var feet = inch/12;
    return feet;
}
var senior = [156, 168, 288 ,3000];
var NoorFeet = inchToFeet(senior[3]);
console.log(NoorFeet);
var LamiyaFeet = inchToFeet(288);
console.log(LamiyaFeet);
var RahimFeet = inchToFeet(300);
console.log(RahimFeet);