alert("Calculadora de salário com horas extras");
let horasTrabalhadas = parseFloat(prompt("Digite o total de horas trabalhadas no mês:").replace(',', '.'));
let salarioPorHora = parseFloat(prompt("Digite o valor do salário por hora:").replace(',', '.'));
let horasExtras;
let aumento;
let salarioFinal;
let salario = 160 * salarioPorHora;
if (horasTrabalhadas > 160){
    horasExtras = horasTrabalhadas - 160;
    aumento = salarioPorHora *   1.5;
    salarioFinal = salario + (horasExtras  * aumento);
    alert(`salario normal R$:${salario.toFixed(2).replace('.',',')}
        \nhoras extras trabalhadas: ${horasExtras.toFixed(2).replace('.',',')}
        \nganho por horas extras R$:${aumento.toFixed(2).replace('.',',')}
        \nsalario final R$:${salarioFinal.toFixed(2).replace('.',',')}`)
}
else{
    alert(`salario normal R$:${salario.toFixed(2).replace('.',',')}
        \nhoras extras trabalhadas: 0h
        \nganho por horas extras R$:0,00
        \nsalario final R$:${salario.toFixed(2).replace('.',',')}`)
}