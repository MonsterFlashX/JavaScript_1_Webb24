/////  multiplication tabel

let size= 10;
for (let row = 1; row < size + 1; row++) {
    let cell = "";
    for (let col = 1; col < size + 1; col++) {
        cell = cell + "|" + row*col +  "| \t";
        
    }
    console.log(cell);
}
console.log("");
console.log("------------------ sum of odd numbers ----------------------------");
console.log("");

let start=0;
let finish = 100;
let summa = 0;

for (let index = start; index < finish; index++) {
    if(index%2 !== 0){
        summa = summa + index;
        console.log();
    }  
    
}

console.log(`The sum of odd numbers between ${start} and ${finish} is ${summa} `);

let rand = Math.random()*100;
let condition = Math.floor( rand );
let con2 = Math.ceil(rand);
for (let index = 0; index < condition; index++) {
    console.log(index%8);
    
}
