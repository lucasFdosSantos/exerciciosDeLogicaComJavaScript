alert("calculo de fatorial");
let numero = parseInt(prompt("digite o numero a ser fatorado"));
let resultado = 1;
if (numero > 1) {
    
let contador = numero;
do {
    resultado *= contador
    contador--
} while (contador > 1);
}
alert(`o resultado da fatoração do número ${numero} é ${resultado} `);
