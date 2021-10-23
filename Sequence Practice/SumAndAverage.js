// 4. Displaying Sum and Average of 5 numbers

let Random1 = Math.floor(Math.random() * 90 )+ 10;
let Random2 = Math.floor(Math.random() * 90 )+ 10;
let Random3 = Math.floor(Math.random() * 90 )+ 10;
let Random4 = Math.floor(Math.random() * 90 )+ 10;
let Random5 = Math.floor(Math.random() * 90 )+ 10;

console.log("Two digits Numbers are : "+Random1+","+Random2+","+Random3+","+Random4+","+Random5);

let Sum = Random1+Random2+Random3+Random4+Random5;
console.log("Sum of Five Numbers is : "+Sum);

let average = Sum / 5; 
console.log("Average of Five numbers is : "+average);
