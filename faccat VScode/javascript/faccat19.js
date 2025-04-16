alert("Verificador de saldo de conta bancária");

let numeroConta = prompt("Digite o número da conta:");
let saldo = parseFloat(prompt("Digite o saldo atual da conta:").replace(',', '.'));
let debito = parseFloat(prompt("Digite o valor do débito:").replace(',', '.'));
let credito = parseFloat(prompt("Digite o valor do crédito:").replace(',', '.'));

let saldoAtual = saldo - debito + credito;
//jeito mais facil de dizer if/ else
let situacao = saldoAtual >= 0 ? "Saldo Positivo" : "Saldo Negativo";

alert(
`Número da conta: ${numeroConta}
Saldo atual: R$ ${saldoAtual.toFixed(2).replace('.', ',')}
Situação: ${situacao}`
);