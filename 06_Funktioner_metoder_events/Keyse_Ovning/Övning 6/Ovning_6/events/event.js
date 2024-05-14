function skapaRäkning(intaVärde) 
{
    let värde = intaVärde; 
    return function ökningRälning()
    {
    värde += 1;
    return värde;
    } 
}
const räkning = skapaRäkning(0);
console.log(räkning()); //1
console.log(räkning()); //2
console.log(räkning()); //3