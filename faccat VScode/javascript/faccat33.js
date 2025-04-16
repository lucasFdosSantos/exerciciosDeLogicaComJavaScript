alert("Sistema de Avaliação de Aluno");


let nota1 = parseFloat(prompt("Digite a nota da primeira verificação:").replace(",", "."));
let nota2 = parseFloat(prompt("Digite a nota da segunda verificação:").replace(",", "."));
let nota3 = parseFloat(prompt("Digite a nota da terceira verificação:").replace(",", "."));
let mediaExercicios = parseFloat(prompt("Digite a média dos exercícios:").replace(",", "."));


let mediaAproveitamento = (nota1 + (nota2 * 2) + (nota3 * 3) + mediaExercicios) / 7;


let conceito;
if (mediaAproveitamento >= 9.0) {
    conceito = "A";
} else if (mediaAproveitamento >= 7.5) {
    conceito = "B";
} else if (mediaAproveitamento >= 6.0) {
    conceito = "C";
} else {
    conceito = "D";
}


alert(`Resultado Final:
Nota 1: ${nota1}
Nota 2: ${nota2}
Nota 3: ${nota3}
Média dos exercícios: ${mediaExercicios}
Média de aproveitamento: ${mediaAproveitamento.toFixed(2).replace(".", ",")}
Conceito final: ${conceito}`);