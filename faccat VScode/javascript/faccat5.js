alert("salario final de um funcionario comissionado de uma concessionaria")
let salarioInicial = parseFloat(prompt("digite seu salario fixo em R$.").replace(',','.'));
let comissao = parseFloat(prompt("digite sua comissao em R$ por carro vendido.").replace(',','.'));
let carros = parseInt(prompt("digite o numero de carros vendidos").replace(',','.'));
let valorTotalCarros = parseFloat(prompt("digite o valor total das suas vendas em R$(Ex: 2 vendas de 3000,valor total das vendas = 6000)").replace(',','.'));
let  bonus = valorTotalCarros * 0.05;
let comissaototal = carros * comissao;
let valorFinal = salarioInicial + bonus + comissaototal;
alert(
    `salario inicial R$:${salarioInicial.toFixed(2)}; 
     \nvalor total de comissão R$:${comissaototal.toFixed(2)};    
     \nbonus de 5% do valor total das vendas R$:${bonus.toFixed(2)};
     \nvalor final do salario R$:${valorFinal.toFixed(2)}.
    `)