alert("numeros em ordem crescente")
alert("vou ler tres valores e organizalos em ordem crescente")
let numero1 = parseFloat(prompt("digite um número").replace(',','.'));
let numero2 = parseFloat(prompt("digite um segundo número").replace(',','.'));
let numero3 = parseFloat(prompt("digite um terceiro número").replace(',','.'));
let menor;
let meio;
let maior;
//&&  = ou 
if (numero1 < numero2 && numero1 < numero3){
 menor = numero1;
 if (numero2 < numero3){
 meio = numero2;
 maior = numero3;
}

else{
    meio = numero3;
    maior = numero2; 
}
}
else if (numero2 < numero1 && numero2 < numero3){
    menor = numero2;
    if(numero1 < numero3){
 meio = numero1;
 maior = numero3;
}

else{
    meio = numero3;
 maior = numero1;
}
}
else{
    menor = numero3;
    if (numero1 < numero2){
 meio = numero1;
 maior = numero2;
}

else{
 meio = numero2;
 maior = numero1;
}
}

alert(`
    os numeros digitados em ordem crescente ficam
    \n${menor}, ${meio}, ${maior}
    `);
