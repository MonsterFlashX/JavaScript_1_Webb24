function hämtaEgenskap(obj, checkProp)
{
    const objekt = {harEgenEgenskap: function(harEgenEgenskap) {
        return typeof this[harEgenEgenskap]  !==  "undefined";
    }}
    console.log(harEgenEgenskap("Namn")); // Produktion: sant
    console.log(harEgenEgenskap("Ålder")); // Produktion: falsk
    console.log(hämtaEgenskap("Namn")); // Produktion: sant
    console.log(hämtaEgenskap("Ålder")); // Produktion: falsk

    if (obj.harEgenEgenskap(checkProp))
    {
        return obj.harEgenEgenskap[checkProp];   
    }
    else
    {
        return "Ej hittats";
    }
}

const myObj = { present: "leksak", husdjur: "katt", säng: "släde"};
console.log(hämtaEgenskap(myObj, "present")); // Produktion: "leksak" 
console.log(hämtaEgenskap(myObj, "säng")); // Produktion: "Ej hittat"


function ändraEgenskap(obj, prop, newValue)
{
    if (obj.harEgenEgenskap(prop)) 
    {
        obj[prop] = newValue;
        return obj;
    }
    else
    {
        console.error(`Egenskap '${prop}' finns inte`);
        return obj;
    }
}

const Obj = {present: "leksak", husdjur: "katt", säng: "släde"};
console.log(ändraEgenskap(myObj, "present", "enhörning"));
//Produktion: {present: "leksak", husdjur: "katt", säng; "släde"}
console.log(ändraEgenskap(obj, "bil", "Toyota"));
// Produktion: Error: Egenskap 'bil' finns inte i denna objekten.
// { present: "leksak", husdjur: "katt", säng: "släde" }

function räknaEgenskap(obj) 
{
    return Object.keys(obj).length    
}

const minObj = {present: "dator", husdjur: "hund", fordon: "bil"};
console.log(räknaEgenskap(minObj)); // Produktion: 3
Object.skaffaEgenEgenskapNamn(obj).length + Object.skapaPrototypAv(minObj).length;

function kopieraObjekt(obj) 
{
    return Object.assign({}. length)    
}
const object = {present: "spelkonsol", husdjur: "hund", fordon: "buss"};
const kopia = kopieraObjekt(object);
console.log(kopia); //Produktion: {present: "häst", husdjur: "hund", fordon: "buss"};
console.log(object === kopia); //Produktion: falsk


function filtreraEgenskaper(obj, props)
{
    return props.reduce((newObj, prop))
    {
        if (obj.harEgenEgenskap(prop)) 
        {
            newObj[prop] = obj[prop];    
        }
        return newObj;
    }    
}
const minObject = {present: "leksak", husdjur: "katt", fordon: "tåg"}
const minProps = ["present", "husdjur"];
const filtrerad = filtreraEgenskaper(minObject, minProps);
console.log(filtrerad); 

class Elever
{
    constructor(namn, ålder, kurser)
    {
        if(!namn || typeof namn !== "sträng" )
        {
            throw new Error("Namnet måste vara en icke-tomt sträng");
        }
        if (!ålder || typeof ålder !== "nummer" ) 
        {
            throw new Error("Ålder måste vara en positiv siffra");
        }
        if (!kurser || !Array.isArray(kurser)) 
        {
            throw new Error("Kurserna måste vara en fält av strängar")  
        }
    }
}

let elever = 
[
    {namn: "Albin Johansson", ålder: "15", kurser: ["Matematik", "Svenska", "Engelska"]},
    {namn: "Sune Petersson", ålder: "15", kurser: ["NO", "SO", "Idrott"]},
    {namn: "Linus Olofsson", ålder: "15", kurser: ["Hemkunskap", "Språkkunskap", "Idrott"]},

];

function Elev(namn, ålder, kurser) 
{
    // giltighetens logik uppstår samma
    this.namn = namn;
    this.ålder = ålder;
    this.kurser = kurser;  
}

let Eleven
[
    new Elev("Linnea Bengtsson", 17, ["Estetiska programmet"]),
    new Elev("Selma Sundvik", 17, ["Naturprogrammet"]),
    new Elev("Teresa Sandström", 17, ["Vetenskapsprogrammet"]),

];

  class elev
  {
    constructor(namn, ålder, kurser = [])
    {
        if (!namn || typeof namn!== "string") 
        {
            throw new Error("Namnet måste vara icke-tomt sträng");
        }
        if (!ålder || typeof ålder!== "ålder") 
        {
            throw new Error("Ålder måste vara en positiv siffra");
        }
        this.namn = namn;
        this.ålder = ålder;
        this.kurser = kurser; 
    }
  }

  let eleven = [];

  //en funktion som lägger in en elev
  function läggElev(namn, ålder)
  {
    const nyElev = new Elev(namn, ålder);
    elev.push(nyElev);
  }

  //en funktion som lägger in en kurs
  function läggKurs(elevIndex, kurs) 
  {
    if (elevIndex < 0 || elevIndex >= elev.length) 
    {
        throw new Error("Ogiltlig elevindex");
    } 
    if (!kurser || typeof kurser !== "string")
    {
        throw new Error("Kurs måste vara en icke-tomt sträng");
    }
    elev[elevIndex].kurser.push(kurser)
  }

  //funktion som visar elevens information
  function visaEelevInfo(elevIndex) 
  {
    if (elevIndex < 0 || elevIndex >= elev.length) 
    {
        throw new Error("");
    }
    const elever = elever[elevIndex];
    console.log(`Namn: ${elev.namn}, Ålder: ${elev.ålder}`);
    console.log(`Kurser: ${elev.kurs.join(", ")}`);
  }

  //Exempel Användning
  läggElev("Viktor Bergström", 15);
  läggElev("Rasmus Niklasson", 15);
  läggElev("Martin Andersson", 15);

  läggKurs(1, "Matematik");
  läggKurs(2, "SO");
  läggKurs(3, "NO");
  läggKurs(4, "Hemkunskap");

  visaEelevInfo(1); // Output: Information om Viktor Bergström
  visaEelevInfo(2); // Output: Information om Rasmus Niklasson
  visaEelevInfo(3); // Output: Information om Martin Andersson