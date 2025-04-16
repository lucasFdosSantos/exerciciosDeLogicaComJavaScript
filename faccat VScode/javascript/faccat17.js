alert("calculadora de peso ideal para homens e mulheres");
let nome = prompt("qual seu nome?");
let idade = parseInt(prompt("qual a sua idade?"));
let sexo = prompt("qual seu sexo(F/M)");
let altura = parseFloat(prompt("qual a sua altura?").replace(',','.'))
let pesoIdeal;
if (sexo == "M" || sexo == "m"){
 pesoIdeal = (72.7 * altura) - 58
 alert (`---ficha---
 nome: ${nome}
   \nidade: ${idade} 
   \nsexo: Masculino
   \naltura: ${altura} m
   \npeso ideal: ${pesoIdeal.toFixed(1)} 
    ` );
}
else if(sexo == "F" || sexo == "f"){

pesoIdeal = (62.1 * altura) - 44.7
alert (`---ficha--
 nome: ${nome}
   \nidade: ${idade} 
   \nsexo: Feminino
   \naltura: ${altura} m
   \npeso ideal: ${pesoIdeal.toFixed(1)} 
    ` );
}
else{
    alert("escolha entre F/M(Feminino ou Masculino)")
}
