//5: Unit Conversion

let One_Feet = 12;//1 feet = 12 inches
let One_Meter = 3.28;//1 meter = 3.28 feet
let Total_Plots = 25;
let feet = 42 / One_Feet;
console.log("42 inches in feet is : "+feet);

//Conversion of Rectanguler plot from feets to meters
let length = 60;//feets
let width = 40;//feets
console.log("Length and Width are "+length+" and "+width);

let Area_Feets = length * width;
console.log("Area of Plot in feets is : "+Area_Feets);

let Area_In_Meter = Area_Feets / One_Meter;
console.log("Area of Plot in Meters is : "+Area_In_Meter);

let Total_Area = Area_In_Meter * Total_Plots;
console.log("Total Area of "+Total_Plots+" Plots is "+Total_Area);
