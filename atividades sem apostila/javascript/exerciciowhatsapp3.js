alert("somador de numero")
alert("digite um numero negativo para sair")
let soma = 0;
let numero;
do{
     numero = parseInt(prompt("digite um valor para a soma total"))
     if (numero > 0 ){
    soma = soma + numero;
     }
} while(numero > -1 );
alert(`a soma de todos os numeros digitados é ${soma}`);