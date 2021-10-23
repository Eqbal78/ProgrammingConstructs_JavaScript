//2.Checking date
var startDate=new Date();
startDate.setMonth(3);
startDate.setDate(20);
startDate.setFullYear(2020);

var endDate=new Date();
endDate.setMonth(6);
endDate.setDate(20);
endDate.setFullYear(2020);

var d=new Date(2020, 4, 24);
if(d>startDate&&d<endDate)
{
    console.log("true");
}
else{
    console.log("false");
} 