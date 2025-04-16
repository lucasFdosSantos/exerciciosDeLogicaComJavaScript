alert("banco de dados de tabuadas")
let multiplicador = parseFloat(prompt("digite um numero para ver sua tabuada de 1 a 10").replace(',','.'));
let numerador = 1;
let resultado; 
do{
   resultado = multiplicador * numerador; 
   console.log(`${multiplicador} X ${numerador} = ${resultado}`);
   numero++;
}while(numerador < 11);