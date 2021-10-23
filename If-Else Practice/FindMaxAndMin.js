//1.Displaying Max and min among 5 numbers

numbers=[];
for(i=0;i<5;i++)
{
 numbers[i]=Math.floor((Math.random() * 900) + 100);
 console.log(numbers[i]);
}
let max=0;
let min=1000;
for(i=0;i<5;i++)
{
    if(max<numbers[i])
    {
        max=numbers[i];
    }
    if(min>numbers[i])
    {
        min=numbers[i];
    }
}
console.log("Max no is "+max);
console.log("Min no is "+min);