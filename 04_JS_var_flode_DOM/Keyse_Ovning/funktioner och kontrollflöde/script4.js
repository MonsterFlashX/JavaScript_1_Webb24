  for (let i = 1; i <= 5; i++)
  {
    let row = document.createElement('tr');
    for (let j = 1; j <= 5; j++)
    {
        let cell = document.createElement('td');
        cell.textContent = `${i} * ${j} = ${i * j}`;
        row.appendChild(cell);
    }
    document.querySelector('table').appendChild(row);
  }
  console.log(i+j);


let sum = 0;
for (let i = 0; i <= 100; i++)
{
    if(i % 2 == 0)
    {
        sum += i;
    }
}
console.log("Summan av udda tal: " + sum);