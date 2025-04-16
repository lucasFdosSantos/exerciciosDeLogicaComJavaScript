let lado1 = parseFloat(prompt("Digite o primeiro lado do triângulo:"));
let lado2 = parseFloat(prompt("Digite o segundo lado do triângulo:"));
let lado3 = parseFloat(prompt("Digite o terceiro lado do triângulo:"));

let mensagem;

if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
    if (lado1 === lado2 && lado2 === lado3) {
        mensagem = "Triângulo Equilátero";
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        mensagem = "Triângulo Isósceles";
    } else {
        mensagem = "Triângulo Escaleno";
    }
} else {
    mensagem = "Não é possível formar um triângulo";
}

alert(mensagem);