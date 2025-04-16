alert("posto de gasolina e alcool do seu zé");
alert("gasolina R$:3,30 | alcool R$: 2,90")
alert("desconto de 3% na gasolina ate 20 litros, acima disso desconto de 5% " +
    " desconto de 4% no alcool ate 20 litros, acima disso desconto de 6%")
    let combustivel = prompt("qual combustivel gostaria?('A' para alcool e 'G' para gasolina)").toUpperCase();
    let qtdcombustivel = parseFloat(prompt("quantos litros vai querer?").replace(',','.'))
    let precoPorLitro;
    let descontoPorLitro;

    if (combustivel === "G"){
     precoPorLitro = 3.30;  
     if(qtdcombustivel <= 20){
      descontoPorLitro = 0.03

     }
     else{
        descontoPorLitro = 0.05
     }
    }
    else if (combustivel === "A"){
        precoPorLitro = 2.90;  
        if(qtdcombustivel <= 20){
         descontoPorLitro = 0.04
   
        }
        else{
           descontoPorLitro = 0.06
        }
       }
else{
    alert("Tipo de combustível inválido. Use A para Álcool ou G para Gasolina.");
    throw new Error("Combustível inválido");
}

let valorSemDesconto = qtdcombustivel * precoPorLitro;
let valorDesconto = valorSemDesconto * descontoPorLitro;
let valorFinal = valorSemDesconto - valorDesconto;

alert(`Resumo da compra:
    \nCombustível: ${combustivel === "A" ? "Álcool" : "Gasolina"}
    \nLitros: ${qtdcombustivel} L
    \nPreço por litro: R$ ${precoPorLitro.toFixed(2).replace(".", ",")}
    \nDesconto aplicado: ${(descontoPorLitro * 100).toFixed(0)}%
    \nValor total a pagar: R$ ${valorFinal.toFixed(2).replace(".", ",")}
    `);
       