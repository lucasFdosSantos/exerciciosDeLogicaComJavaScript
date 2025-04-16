alert("Verificador de resultado com base em dois valores.");

let primeiroValor = parseFloat(prompt("Digite o primeiro valor:").replace(",", "."));
let segundoValor = parseFloat(prompt("Digite o segundo valor:").replace(",", "."));

let resultadoCalculado = (primeiroValor * segundoValor) + 5;

let categoriaResposta;

if (resultadoCalculado <= 0) {
    categoriaResposta = "A";
} else if (resultadoCalculado <= 100) {
    categoriaResposta = "B";
} else {
    categoriaResposta = "C";
}

alert(
    `Resultado calculado: ${resultadoCalculado.toFixed(2)}\n 
    \nCategoria: ${categoriaResposta}`
);