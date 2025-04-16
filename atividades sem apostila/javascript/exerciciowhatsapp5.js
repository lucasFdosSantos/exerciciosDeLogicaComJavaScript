alert("numeros pares de 1 a 20");
let numero = 1;
let resultado;
do{
    resultado = numero % 2;
    if(resultado === 0 ){
   console.log(`${numero}`);
    }
    numero++;
}while(numero <= 20 )