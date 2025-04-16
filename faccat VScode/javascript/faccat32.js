alert("Sistema de vendas - Cálculo de desconto");


let nomeProduto = prompt("Digite o nome do produto:");
let quantidadeComprada = parseInt(prompt("Digite a quantidade adquirida:"));
let precoUnitario = parseFloat(prompt("Digite o preço unitário do produto:").replace(",", "."));


let totalSemDesconto = quantidadeComprada * precoUnitario;


let percentualDesconto;

if (quantidadeComprada <= 5) {
    percentualDesconto = 0.02; 
} else if (quantidadeComprada <= 10) {
    percentualDesconto = 0.03; 
} else {
    percentualDesconto = 0.05; 
}


let valorDesconto = totalSemDesconto * percentualDesconto;
let totalFinal = totalSemDesconto - valorDesconto;


alert(`Resumo da Compra:
Produto: ${nomeProduto}
Quantidade: ${quantidadeComprada}
Preço unitário: R$ ${precoUnitario.toFixed(2).replace(".", ",")}
Total sem desconto: R$ ${totalSemDesconto.toFixed(2).replace(".", ",")}
Desconto: R$ ${valorDesconto.toFixed(2).replace(".", ",")} (${(percentualDesconto * 100).toFixed(0)}%)
Total a pagar: R$ ${totalFinal.toFixed(2).replace(".", ",")}
`);