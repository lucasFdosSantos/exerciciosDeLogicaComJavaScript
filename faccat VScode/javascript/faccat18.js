alert("Salário final de um funcionário comissionado de uma empresa de vendas");
alert("Comissão de 3% sobre o total das vendas até R$1.500,00, mais 5% sobre o que ultrapassar esse valor.");

let salarioFixo = parseFloat(prompt("Qual o seu salário atual em R$?").replace(',', '.'));
let valorVendas = parseFloat(prompt("Qual o valor total das vendas efetuadas por você?").replace(',', '.'));
let valorAumento;
let salarioFinal;
let comissao;

if (valorVendas > 1500) {
    valorAumento = valorVendas - 1500;
    comissao = (1500 * 0.03) + (valorAumento * 0.05);
    salarioFinal = salarioFixo + comissao;
} else {
    comissao = valorVendas * 0.03;
    salarioFinal = salarioFixo + comissao;
}

alert(
`Salário fixo: R$ ${salarioFixo.toFixed(2).replace('.', ',')}
Comissão total: R$ ${comissao.toFixed(2).replace('.', ',')}
Salário final: R$ ${salarioFinal.toFixed(2).replace('.', ',')}`
);