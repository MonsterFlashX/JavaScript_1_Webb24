/* Min lösning som är bättre */

for (let row = 1; row < 6; row++) {
    let cell = "";

    for (let col = 1; col < 6; col++) {
        cell += "|" + row * col + "|\t";
    }
    console.log(cell);
}

/* Lukas lösning, med en 180 graders tvist */

let size = 5;

for (let row2 = 1; row2 <= size; row2++) {
    let rowData = "";
    for (let col2 = 1; col2 <= size + 1; col2++) {
        rowData += "|" + row2 * col2 + "|\t";
    }
    console.log(rowData);
}

// udda tal

let start = 0;
let finish = 100;
let summa = 0;

for (let index = start; index < finish; index++) {
    if(index%2 !==0) {
        summa = summa + index;
    }

}
console.log(`The sum of odd numbers between ${start} and ${finish} is ${summa}`)