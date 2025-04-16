alert("Controle de estoque de produto");

let qtdAtual = parseInt(prompt("Digite a quantidade atual em estoque:"));
let qtdMax = parseInt(prompt("Digite a quantidade MÁXIMA em estoque:"));
let qtdMin = parseInt(prompt("Digite a quantidade MÍNIMA em estoque:"));

let qtdMedia = (qtdMax + qtdMin) / 2;

let mensagem = qtdAtual >= qtdMedia ? " Não efetuar compra." : " Efetuar compra.";

alert(
`Quantidade média: ${qtdMedia}
Estoque atual: ${qtdAtual}
${mensagem}`
);