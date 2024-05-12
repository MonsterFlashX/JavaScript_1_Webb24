//övning 5

let txt1 = " Skärmskydd, 499";
console.log("original text1:" + txt1);
txt1 = txt1.replaceAll(",", "-");
console.log("replace , with -: " + txt1)

let txt2 = "Mobiltelefon, 299,";
let txt3 = " Telefonfodral, 89,";
let txt4 = " Laptop, 799";
let txt5 = " Hörlurar , 199 ";

//Dela upp strängen och extrahera varje produkt och dess pris en i taget.
//No list code
//extracting product name and prcie from txt1
let txt1Product = txt1.substring(1,13);
let txt1Price = txt1.substring(15,19);
console.log("txt1Product :" + txt1Product)
console.log("txt1Product :" + typeof txt1Price)
//formatting product name to uppercase
txt1Product = txt1Product.toUpperCase();
//convertinf price to a number
txt1Price = Number.parseInt(txt1Price);
console.log("txt1Product :" + txt1Product)
console.log("txt1Product :" + typeof txt1Price)

if(txt1Product.includes("TELEFON"))
{
    console.log("variable" + txt1Product + "containes the word TELEFON")
}
else
{
    console.log("variable" + txt1Product + "does not contain the word TELEFON");
}

//code with a list
let txt1Split = txt1.split("-");//<- creates a list
console.log(txt1Split);
//trim value in each index in the list
for (let i = 0; i < txt1Split.length; i++) {
    txt1Split[i] = txt1Split[i].trim();    
}

console.log(txt1Split);
//uppercase on index 0 in the list
txt1Split[0] = txt1Split[0].toUpperCase();
if(txt1Split.includes("TELEFON"))
{
    console.log("variable" + txt1Split[0] + "containes the word TELEFON")
}
else
{
    console.log("variable" + txt1Split[0] + "does not contain the word TELEFON");
}
//converting to integer on index 1 in the list
txt1Split[1] = Number.parseInt(txt1Split[1]);
console.log(txt1Split);



//Extrahera priset för varje produkt och spara det som ett numeriskt värde.