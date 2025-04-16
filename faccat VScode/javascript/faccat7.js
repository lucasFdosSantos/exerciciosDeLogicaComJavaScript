alert("calculadora de media ponderada escolar.")
alert("os pesos das notas sao 2,3,5 respectivamente.")
let nota1 = parseFloat(prompt("insira o valor da nota de historia").replace(',','.'));
let nota2 = parseFloat(prompt("insira o valor da nota de matemática").replace(',','.'));
let nota3 = parseFloat(prompt("insira o valor da nota de português").replace(',','.'));
let media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;
alert(
    `a media das notas digitadas: ${media.toFixed(1).replace('.',',')}
    
    `)