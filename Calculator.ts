import promptSync = require('prompt-sync');
const prompt=promptSync();
let numb1=prompt(`Enter 1st Number:`);
let numb2=prompt(`Enter 2nd Number:`);
let num1=parseInt(numb1);
let num2=parseInt(numb2);

let variable:string=prompt("Enter the operator +,-,*,/,%,**");
if (variable=='+'){
    console.log(`Number 1:${num1}`);
    console.log(`Number 2:${num2}`);
    console.log(`Sum is:${num1+num2}`);
}
else if(variable=='-'){
    console.log(`Number 1:${num1}`);
    console.log(`Number 2:${num2}`);
    console.log(`Difference is:${num1-num2}`);
    
}
else if(variable=='*'){
    console.log(`Number 1:${num1}`);
    console.log(`Number 2:${num2}`);
    console.log(`Product is:${num1*num2}`);
}
else if(variable=='/'){
    console.log(`Number 1:${num1}`);
    console.log(`Number 2:${num2}`);
    console.log(`Quotient is:${num1/num2}`);
}
else if(variable=='%'){
    console.log(`Number 1:${num1}`);
    console.log(`Number 2:${num2}`);
    console.log(`Modulous/Remainder is:${num1%num2}`);
}
else if(variable=='**'){
    console.log(`Number 1:${num1}`);
    console.log(`Number 2:${num2}`);
    console.log(`Power is:${num1**num2}`);
}



