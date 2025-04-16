alert("Calculadora de reajuste salarial")
let salarioAtual = parseFloat(prompt("digite o seu salario atual R$:").replace(',', '.'));
let reajuste = parseFloat(prompt("digite o percentual de reajuste(%)").replace(',', '.'));
let aumento =  salarioAtual * (reajuste / 100)
let salarioNovo = salarioAtual + aumento
alert(
    `salario atual R$:${salarioAtual};
    \npercentual de reajuste: ${reajuste}%;
    \nvalor de reajuste calculado R$:${aumento};
    \nvalor do novo salario R$:${salarioNovo}.
    `)
