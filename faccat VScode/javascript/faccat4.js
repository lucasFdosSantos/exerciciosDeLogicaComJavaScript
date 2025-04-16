alert("calculo do preço de um carro novo");
alert (`percentual do imposto sobre o custo de fabrica: 45%
       \npercentual do distribuidor sobre o valor de fabrica: 28%  
    `);

let  custoFabrica= parseFloat(prompt("digite o preço de frabrica do carro").replace(',','.'));
let valorImposto = (45 / 100) * custoFabrica;
let valorDestribuidora = (28 / 100) * custoFabrica;
let  valorFinal = custoFabrica + valorImposto + valorDestribuidora;
alert(
    `valor de fábrica R$:${custoFabrica};
     \nvalor dos imposto R$:${valorImposto};
     \nvalor da distribuidora R$:${valorDestribuidora};
     \nvalor final do carro R$:${valorFinal}.
    
    
    
    
    `) 