alert("Bem-vindo à Fruteira do Seu João ");

let quantidadeMorangosKg = parseFloat(prompt("Digite a quantidade de morangos (em Kg):").replace(",", "."));
let quantidadeMacasKg = parseFloat(prompt("Digite a quantidade de maçãs (em Kg):").replace(",", "."));

let precoMorangoPorKg = quantidadeMorangosKg <= 5 ? 2.50 : 2.20;
let precoMacaPorKg = quantidadeMacasKg <= 5 ? 1.80 : 1.50;

let valorTotalMorango = quantidadeMorangosKg * precoMorangoPorKg;
let valorTotalMaca = quantidadeMacasKg * precoMacaPorKg;

let valorTotalCompra = valorTotalMorango + valorTotalMaca;
let quantidadeTotalKg = quantidadeMorangosKg + quantidadeMacasKg;


if (quantidadeTotalKg > 8 || valorTotalCompra > 25) {
    valorTotalCompra = valorTotalCompra * 0.90;
}

alert(`Resumo da compra:
- Morangos: ${quantidadeMorangosKg} Kg a R$ ${precoMorangoPorKg.toFixed(2).replace('.', ',')} = R$ ${valorTotalMorango.toFixed(2).replace('.', ',')}
- Maçãs: ${quantidadeMacasKg} Kg a R$ ${precoMacaPorKg.toFixed(2).replace('.', ',')} = R$ ${valorTotalMaca.toFixed(2).replace('.', ',')}
- Total de frutas: ${quantidadeTotalKg} Kg
- Valor final a pagar: R$ ${valorTotalCompra.toFixed(2).replace('.', ',')}`);