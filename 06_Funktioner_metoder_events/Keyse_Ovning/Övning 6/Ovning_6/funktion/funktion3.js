let counter = 0; // represent dish count

//en funktion för att lägga till en maträtt (counter++)

function addDish()
{
    counter = counter + 1;
    counter++;
    console.log("Dish added");
    document.getElementById("message").innerText = "Dish added";
}

//en funktion för att räkna antalet tillagda maträtter (log(counter))
function dishCount()
{
    counter = counter + 1;
    document.getElementById("counter").innerText = counter;
    console.log(counter);

}

//en funktion för att visa alla tillagda maträtter (for(´${i} maträtt´)).

function showDishes()
{
    for (let i = 0; i < counter; i++) 
    {
        console.log(`${i} maträtter`)        

    }
}



//Skapa en funktion taBortMaträtt som minskar antalet maträtter när en maträtt tas bort.

function removeDish()
{
    for (let remove = 0; remove > counter; i--)
    {
        console.log("dish removed");
        console.log(`${remove} maträtter`);
        document.getElementById("message").innerText = "Dish removed";
    }
}

//Lägg till en funktion rensaMaträtter som återställer antalet maträtter till 0.

function resetDish()
{
    for (let reset = 0; reset < counter; reset++) 
    {
        console.log("dishet reset");
        document.getElementById("message").innerText = "Dish reset";
    }
}

addDish();
dishCount();
showDishes();
removeDish();
resetDish();

//onclick example example

function addUserInputParagraph()
//get reference to input field
{
    let userInput = document.getElementById("userInput");
    //get reference to input field
    let userInputText = userInput.value;
    //create paragraph element
    let newParagraph = document.createElement("p");
    //add text from input filed to the paragraph
    newParagraph.innerText = userInputText;
    //get reference to body element
    let body = document.querySelector("body");
    //add paragraph to body element
    body.appendChild(newParagraph);
}

function changeColor()
{
    //get reference to body element
    let body = document.querySelector("body");
    body.style.backgroundColor="red";
}

function changeColor2()
{
    //get reference to body element
    let body = document.querySelector("body");
    body.style.backgroundColor="blue";
}