/* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/

let x = prompt("enter the rate:");
if (x < 50){
    window.alert("Fail");
} 
else if (50 <= x && x <= 59){
    window.alert("E");
}
else if (60 <= x && x<= 69){
    window.alert("D");
}
else if (70 <= x && x <= 79){
    window.alert("C");
}
else if (80 <= x && x <= 89){
    window.alert("B");
}
else if (90 <= x && x<= 100){
    window.alert("A");
}
else{
    window.alert("Over");
}