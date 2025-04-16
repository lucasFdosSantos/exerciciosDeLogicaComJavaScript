alert("Cálculo entre idades de 2 homens e 2 mulheres");

let idadeHomem1 = parseInt(prompt("Digite a idade do primeiro homem:"));
let idadeHomem2 = parseInt(prompt("Digite a idade do segundo homem:"));
let idadeMulher1 = parseInt(prompt("Digite a idade da primeira mulher:"));
let idadeMulher2 = parseInt(prompt("Digite a idade da segunda mulher:"));

let homemMaisVelho = idadeHomem1 > idadeHomem2 ? idadeHomem1 : idadeHomem2;
let homemMaisNovo = idadeHomem1 < idadeHomem2 ? idadeHomem1 : idadeHomem2;

let mulherMaisVelha = idadeMulher1 > idadeMulher2 ? idadeMulher1 : idadeMulher2;
let mulherMaisNova = idadeMulher1 < idadeMulher2 ? idadeMulher1 : idadeMulher2;

let somaIdades = homemMaisVelho + mulherMaisNova;
let produtoIdades = homemMaisNovo * mulherMaisVelha;

alert(`Resultado dos cálculos:
- Soma do homem mais velho com a mulher mais nova: ${somaIdades}
- Produto do homem mais novo com a mulher mais velha: ${produtoIdades}`);