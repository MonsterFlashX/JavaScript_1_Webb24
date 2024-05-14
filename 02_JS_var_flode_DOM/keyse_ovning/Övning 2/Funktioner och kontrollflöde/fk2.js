let number1 = "5";
let number2 = "10";
let number3 = "15";
let number4 = "20";

if (number1 == "5") 
{
    console.log("the number " + number1 + "is smaller than " + number2);
    alert("the number " + number1 + "is smaller than " + number2);    
}
else
{
    console.log("then number " + number2 + "is bigger than " + number1);
    alert("the number " + number2 + "is smaller than " + number1);    
}

if(number2 == "10")
{
    console.log("the number " + number2 + "is bigger than " + number1);
    alert("the number " + number2 + "is smaller than " + number1);    
}
else
{
    console.log("the number " + number1 + "is smaller than " + number2);
    alert("the number " + number1 + "is smaller than " + number2);    
    
}

if(number3 == "15")
{
    console.log("the number " + number3 + "is bigger than " + number1 + number2);
    alert("the number " + number2 + "is smaller than " + number4);    
}
else
{
    console.log("the number " + number3 + "is smaller than " + number4);
    alert("the number " + number3 + "is bigger than " + number2 + number1);    
}

if(number4 == "15")
{
    console.log("the number " + number4 + "is bigger than " + number1 + number2 + number3);
    alert("the number " + number4 + "is bigger than " + number1 + number2 + number3);    
}

console.log(number1);
console.log(number2);
console.log(number3);
console.log(number4);
