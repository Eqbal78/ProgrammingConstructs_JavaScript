
let arr = [];
let num1 = 1;
arr.push(num1);
let num2 = 2;
arr.push(num2);
let num3 = -3;
arr.push(num3);
let sum = 0;
function Sum(num) 
{
    sum = sum+num;
}
arr.forEach(Sum);
if (sum == 0)
    console.log('Sum is Zero');
else{
    console.log('Sum is not zero.');
}
