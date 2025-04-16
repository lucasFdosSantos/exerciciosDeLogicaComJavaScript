alert("area e perimetro de um triângulo");
let base = parseFloat(prompt("digite o valor da base do triângulo que gostaria de calcular a área e o perímetro"));
let altura = parseFloat(prompt("digite o valor da altura do triângulo que gostaria de calcular a área e o perímetro"));
let pergunta = prompt("voce sabe os 3 lados do triãngulo para o calculo do perímetro? [S/N]")
let area = (base * altura) / 2;
if (pergunta == "S" || pergunta == "s"){
let lado1 = parseFloat(prompt("qual o valor do lado 'A'?"))
let lado2 = parseFloat(prompt("qual o valor do lado 'b'?"))
let lado3 = parseFloat(prompt("qual o valor do lado 'c'?"))
let perimetro = lado1 + lado2 + lado3;
alert("base do triângulo: "+base+
    "\ncomprimento do triângulo: "+altura+
    "\nlado A,B,C respectivamente: "+lado1+", "+lado2+", "+lado3+
    "\narea do triângulo: "+area.toFixed(2)+
    "\nperímetro do triângulo: "+perimetro.toFixed(2))}
else if (pergunta == "N" || pergunta == "n"){
    alert("tudo bem, vamos continuar so calculando a área")
    alert("base do triângulo: "+base+
        "\ncomprimento do triângulo: "+altura+
        "\narea do triângulo: "+area.toFixed(2))

} 
else {
    alert("resposta invalida,reinicie a pagina e coloque uma resposta valida")
}   