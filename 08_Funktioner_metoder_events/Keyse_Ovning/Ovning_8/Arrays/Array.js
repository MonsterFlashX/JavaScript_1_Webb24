function Summa(array)
{
    let sum = 0;
    for (let j = 0; j < array.length; j++) 
    {
        sum = array[j];  
    }
    return sum;
}
function summaArray(array)
{
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const array = [1, 2, 3, 4, 5];
console.log(summaArray(array)); //Output: 15


function filterPositiv(arr)
{
    return arr.filter(num => num > 0);
}
const siffror = [-3, 4, 5, 3, -2];
const positivSiffror = filterPositiv(siffror);
console.log(positivSiffror); // [4.8, 5, 3]


function dubbelElement(arr) 
{
    return arr.map(num => num * 2);    
}

const nummer = [1, 2, 3, 4, 5];
const dubbelNummer = dubbelElement(nummer);
console.log(dubbelNummer); // [2, 4, 6, 8, 10]

function hittaMax(arr) 
{
    return Math.max(...arr);   
}

const tal = [1, 2, 3, 4, 5];
const maxSiffra = hittaMax(tal);
console.log(maxSiffra); // 5
  
  function räknaElement(arr) 
  {
    return arr.filter(num => num === element).length;  
  }
  const talen = [1, 2, 3, 4, 5, 6, 7];
  const räkna = räknaElement(talen, 2);
  console.log(räkna); // 3

function konkateneraListor(list1, list2) 
{
    return list1.concat(list2);   
}
const list1 = [1, 2, 3];
const list2 = [4, 5, 6];
const mergedList = konkateneraListor(list1, list2);
console.log(mergedList); // [1, 2, 3, 4, 5, 6]

function vändNotan(notan) 
{
    return notan.slice().reverse();    
}
const notan = [1, 2, 3];
const result = vändNotan(notan);
console.log(notan); // [3, 2, 1]

function hittaElement(list, element) 
{
    for (let i = 0; i < list.length; i++) 
    {
        if (list[i] === element) 
        {
            return true;
        }
        else
        {
            return false;
        }
        
    }    
}

const list = [1, 2, 3];
console.log(hittaElement(list, 2)); // true
console.log(hittaElement(list, 4)); //false


function räknaElement(lists, element) 
{
    let count = 0;
    for (let i = 0; i < lists.length; i++) 
    {
        if (lists[i] === element) 
        {
          count++;  
        }
    }    
    return count = 0; 
}

const lists = [1, 2, 3, 2, 2, 4];
console.log(räknaElement(lists, 2)); // 3
console.log(räknaElement(lists, 5)); // 0

function sortNumber(nummer) 
{
    return nummer.slice().sort((a, b) => a - b);    
}
const num = [3, 1, 4, 1, 5];
const Number = sortNumber(num);
console.log(Number); // [1, 1, 3, 4, 5] 