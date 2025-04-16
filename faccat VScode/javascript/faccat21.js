alert("indentificador de números positivos e negativos2.0")
let numero = parseFloat(prompt("digite o número que gostaria de verificar:").replace(',','.'))
if (numero == 0 ){
    alert(`número ${numero},valor nulo insira outro valor diferente de 0`)
} 
else if (numero > 0){
    alert(`o número ${numero} é positivo`)
}
else{
    alert(`o número ${numero} é negativo`)
}