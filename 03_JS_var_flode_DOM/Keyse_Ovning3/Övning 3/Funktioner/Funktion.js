//Originala kod: (ingen)
//Förbättrad kod:
for (let i = 0; i <= 9; i++) 
{
    console.log(i);    
}

//Originala kod: (ingen)
//Förbättrad kod:
for (let i = 111; i <= 133; i++) 
{
    console.log(i);    
}

//Originala kod: (ingen)
//Förbättrad kod:
for (let i = 20; i >= 15; i++) 
{
    console.log(i);    
}

//Originala kod: (ingen)
//Förbättrad kod:
for (let i = 50; i >= 0; i++) 
{
    console.log(i);    
}

//Originala kod: (ingen)
// Förbättrad kod: 
let i = 1;
while (i <= 128)
{
    console.log();
    i *= 2;
}

//Originala kod: (ingen)
//Förbättrad kod: 
for (let i = 0; i <= 50; i++) 
{
    if (i % 2 === 0)
     {
        console.log(i *= 2);  
     }    
}

//Skriv ut i konsolen en rektangle på 10 rader

for (let i = 0; i < 10; i++) 
{
    let line = '';
    for (let j = 0; j < 10; j++) 
    {
        line += '*'        
    }
    console.log(line);
}

//Skriv ut i konsolen en triangel på 10 rader

for (let i = 0; i < 10; i++) 
{
    let line = '';
    for (let j = 0; j <= i; j++) 
    {
        line += '*'        
    }
    console.log(line);
}

