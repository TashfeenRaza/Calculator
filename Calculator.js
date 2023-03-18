"use strict";
exports.__esModule = true;
var promptSync = require("prompt-sync");
var prompt = promptSync();
var numb1 = prompt("Enter 1st Number:");
var numb2 = prompt("Enter 2nd Number:");
var num1 = parseInt(numb1);
var num2 = parseInt(numb2);
var variable = prompt("Enter the operator +,-,*,/,%,**");
if (variable == '+') {
    console.log("Number 1:".concat(num1));
    console.log("Number 2:".concat(num2));
    console.log("Sum is:".concat(num1 + num2));
}
else if (variable == '-') {
    console.log("Number 1:".concat(num1));
    console.log("Number 2:".concat(num2));
    console.log("Difference is:".concat(num1 - num2));
}
else if (variable == '*') {
    console.log("Number 1:".concat(num1));
    console.log("Number 2:".concat(num2));
    console.log("Product is:".concat(num1 * num2));
}
else if (variable == '/') {
    console.log("Number 1:".concat(num1));
    console.log("Number 2:".concat(num2));
    console.log("Quotient is:".concat(num1 / num2));
}
else if (variable == '%') {
    console.log("Number 1:".concat(num1));
    console.log("Number 2:".concat(num2));
    console.log("Modulous/Remainder is:".concat(num1 % num2));
}
else if (variable == '**') {
    console.log("Number 1:".concat(num1));
    console.log("Number 2:".concat(num2));
    console.log("Power is:".concat(Math.pow(num1, num2)));
}
