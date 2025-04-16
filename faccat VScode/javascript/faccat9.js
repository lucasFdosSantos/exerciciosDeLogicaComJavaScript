alert("verificador de numeros positivos e negativos");
let numero = parseInt(prompt("digite um numero que gostaria de  verificar se é positivo ou negativo(somente valores inteiro, EX:10,4,6,)"))
if (numero > -1){
    alert(`numero: ${numero} é um número positivo`)
}
else{
    alert(`numero: ${numero} é um numero negativo`)
}