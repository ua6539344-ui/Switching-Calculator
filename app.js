var num1 = +prompt("Enter Your Value 1")
var opt = prompt("Enter Your opt")
var num2 = +prompt("Enter YOur Value 2")

switch(opt){
case "+":
console.log(num1 + num2);
break;

case "-":
console.log(num1 - num2);
break;

case "*":
console.log(num1 * num2);
break;

case "/":
console.log(num1 / num2);
break;

default:
console.log("invaild operator");

}