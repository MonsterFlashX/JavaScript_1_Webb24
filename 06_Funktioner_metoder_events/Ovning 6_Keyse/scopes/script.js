//scope

let var1 = "variable in outer script";
let var4;
let var5; 
let var3 = "variable in if statement scope";


function func()
{
    let var2 = "variable in function scope";

    if(true)
    {
        let var3 = "variable in if statement scope";
        var4 = "variable initialised in if statement scope";
        var5 = "variable is initialised ONLY if func is executed";
        console.log(var1);

    }
}

console.log(var5);
func();
console.log(var3);//wriong scope not availabe outside if statement scope
console.log(var4);

//scope example

let count = 0;

function add()
{
    count = count + 1;
    let h1 = document.createElement("h1");
    h1.innerText = count;
    document.body.appendChild("h1")
    console.log(count);
}